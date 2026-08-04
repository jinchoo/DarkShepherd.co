import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage

SRC = "/Users/jinchoo_1/DarkShepherd.co/public/images/dashboard-preview.png"
DST = "/Users/jinchoo_1/DarkShepherd.co/public/images/dashboard-preview-v3.png"
# Higher-resolution, sharpened output so high-DPI (retina) screens render crisp.
DST_HD = "/Users/jinchoo_1/DarkShepherd.co/public/images/dashboard-preview-v10.png"
UPSCALE = 3
# How far (px, at source resolution) inward from the panel edge to hunt for the
# gold border rim, and the dark color to repaint it with.
BORDER_BAND = 9
PANEL_DARK = (9, 11, 18)
# Thickness (px, at source resolution) of the black outline drawn on the panel
# edge, and its color.
BLACK_BORDER = 4
BORDER_COLOR = (0, 0, 0)

# A pixel counts as "background" if its brightest channel is below this.
# This source's panel interior sits around brightness ~9, very close to the pure
# black (0) frame, so keep this low to avoid flood-filling through the panel.
THRESHOLD = 6

img = Image.open(SRC).convert("RGBA")
arr = np.array(img)
h, w = arr.shape[:2]

rgb = arr[:, :, :3].astype(np.int16)
brightness = rgb.max(axis=2)
is_dark = brightness < THRESHOLD

# Label connected regions of dark pixels, then treat only the components that
# touch the image border as background. This preserves the dark interior of the
# dashboard panel (which is not connected to the outer black frame).
labels, _ = ndimage.label(is_dark)
border_labels = set(labels[0, :]) | set(labels[-1, :]) | set(labels[:, 0]) | set(labels[:, -1])
border_labels.discard(0)
visited = np.isin(labels, list(border_labels))

# Remove the gold border rim: look only in a thin band just inside the panel
# edge (dilate the background inward), and repaint warm/bright pixels there with
# the dark panel color. Restricting to this band leaves interior gold UI (logo,
# badges, buttons) untouched.
band = ndimage.binary_dilation(visited, iterations=BORDER_BAND) & ~visited
warm = (rgb[:, :, 0] > rgb[:, :, 2] + 18) & (brightness > 28)
rim = band & warm
arr[rim, 0] = PANEL_DARK[0]
arr[rim, 1] = PANEL_DARK[1]
arr[rim, 2] = PANEL_DARK[2]
print(f"Repainted {int(rim.sum())} gold-rim px")

# Draw a crisp black border hugging the panel edge: the outermost opaque ring of
# the panel (pixels within BLACK_BORDER px of the transparent background).
edge = ndimage.binary_dilation(visited, iterations=BLACK_BORDER) & ~visited
arr[edge, 0] = BORDER_COLOR[0]
arr[edge, 1] = BORDER_COLOR[1]
arr[edge, 2] = BORDER_COLOR[2]
print(f"Drew {int(edge.sum())} black-border px")

# Feather the edge: background-connected pixels get alpha scaled by brightness
# so the transition into the panel/glow isn't a hard cut.
alpha = arr[:, :, 3].astype(np.float32)
edge_alpha = np.clip((brightness.astype(np.float32) / THRESHOLD) * 255.0, 0, 255)
alpha[visited] = np.minimum(alpha[visited], edge_alpha[visited])
arr[:, :, 3] = alpha.astype(np.uint8)

removed = int(visited.sum())
out = Image.fromarray(arr)
out.save(DST)
print(f"Saved {DST}: {removed} background px cleared ({removed / (h * w):.1%} of image)")

# Build a crisper high-DPI variant: upscale with Lanczos, then sharpen only the
# RGB channels (keep the alpha edge smooth) to counter the perceived blur.
hd = out.resize((w * UPSCALE, h * UPSCALE), Image.LANCZOS)
r, g, b, a = hd.split()
rgb = Image.merge("RGB", (r, g, b)).filter(
    ImageFilter.UnsharpMask(radius=2.4, percent=200, threshold=1)
)
hd = Image.merge("RGBA", (*rgb.split(), a))
hd.save(DST_HD)
print(f"Saved {DST_HD}: {hd.width}x{hd.height} sharpened HD variant")

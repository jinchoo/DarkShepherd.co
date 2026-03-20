/** Fixed galaxy background + radial overlay (shared across marketing pages). */
export function SiteBackground() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-0 min-h-full min-w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/darkshepherd-background.png)" }}
      />
      <div
        className="pointer-events-none fixed inset-0 z-[1] min-h-full min-w-full"
        style={{
          background:
            "radial-gradient(circle at left center, rgba(5,8,22,0.96) 0%, rgba(5,8,22,0.9) 40%, rgba(5,8,22,0.8) 70%, rgba(5,8,22,0.75) 100%)",
        }}
        aria-hidden
      />
    </>
  );
}

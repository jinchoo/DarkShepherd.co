import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type BetaPayload = {
  fullName?: unknown;
  workEmail?: unknown;
  storeName?: unknown;
  shopifyUrl?: unknown;
  role?: unknown;
  orderVolume?: unknown;
  challenge?: unknown;
};

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: BetaPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const fullName = asTrimmedString(body.fullName);
  const workEmail = asTrimmedString(body.workEmail);
  const storeName = asTrimmedString(body.storeName);
  const shopifyUrl = asTrimmedString(body.shopifyUrl);
  const role = asTrimmedString(body.role);
  const orderVolume = asTrimmedString(body.orderVolume);
  const challenge = asTrimmedString(body.challenge);

  if (!fullName || !storeName || !shopifyUrl || !role || !orderVolume || !challenge) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(workEmail)) {
    return NextResponse.json(
      { error: "Please enter a valid work email." },
      { status: 400 },
    );
  }

  const application = {
    fullName,
    workEmail,
    storeName,
    shopifyUrl,
    role,
    orderVolume,
    challenge,
    submittedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.BETA_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(application),
      });
      if (!res.ok) {
        const detail = await res.text().catch(() => "");
        console.error("Beta webhook failed:", res.status, detail);
        return NextResponse.json(
          { error: "Submission failed. Please try again." },
          { status: 502 },
        );
      }
    } catch (err) {
      console.error("Beta webhook error:", err);
      return NextResponse.json(
        { error: "Submission failed. Please try again." },
        { status: 502 },
      );
    }
  } else {
    console.info("Beta application received:", application);
  }

  return NextResponse.json({ ok: true });
}

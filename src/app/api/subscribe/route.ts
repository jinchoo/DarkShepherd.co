import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !publicationId) {
    return NextResponse.json(
      { error: "Newsletter is not configured. Please try again later." },
      { status: 500 },
    );
  }

  let email: unknown;
  try {
    const body = await request.json();
    email = body?.email;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const cleanEmail = email.trim();

  try {
    const existingRes = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions/by_email/${encodeURIComponent(
        cleanEmail,
      )}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${apiKey}` },
      },
    );

    if (existingRes.ok) {
      const existing = await existingRes.json().catch(() => null);
      if (existing?.data?.status === "active") {
        return NextResponse.json({ ok: true, alreadySubscribed: true });
      }
    }

    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: cleanEmail,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: "darkshepherd_site",
        }),
      },
    );

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Beehiiv subscribe failed:", res.status, detail);
      return NextResponse.json(
        { error: "Subscription failed. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, alreadySubscribed: false });
  } catch (err) {
    console.error("Beehiiv subscribe error:", err);
    return NextResponse.json(
      { error: "Subscription failed. Please try again." },
      { status: 502 },
    );
  }
}

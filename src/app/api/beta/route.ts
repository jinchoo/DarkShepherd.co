import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import { isValidHttpUrl, normalizeStoreName, normalizeStoreUrl, storeHostname } from "@/lib/storeUrl";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_ROLES = new Set([
  "Founder / Owner",
  "Operations",
  "Customer Support",
  "Fulfillment",
  "Engineering / Tech",
  "Other",
]);
const ALLOWED_VOLUMES = new Set([
  "Under 100",
  "100 – 500",
  "500 – 1,000",
  "1,000 – 5,000",
  "5,000+",
]);

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
  const workEmail = asTrimmedString(body.workEmail).toLowerCase();
  const storeName = normalizeStoreName(asTrimmedString(body.storeName));
  const shopifyUrl = normalizeStoreUrl(asTrimmedString(body.shopifyUrl));
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

  if (!isValidHttpUrl(shopifyUrl)) {
    return NextResponse.json(
      { error: "Please enter a valid Shopify store URL." },
      { status: 400 },
    );
  }

  if (!ALLOWED_ROLES.has(role) || !ALLOWED_VOLUMES.has(orderVolume)) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 400 },
    );
  }

  let supabase;
  try {
    supabase = getSupabaseAdmin();
  } catch {
    console.error("Beta submit: missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
    return NextResponse.json(
      { error: "Beta applications are not available right now. Please try again later." },
      { status: 503 },
    );
  }

  const hostname = storeHostname(shopifyUrl);

  const { data: existingRows, error: lookupError } = await supabase
    .from("beta_applications")
    .select("full_name, work_email, store_name, shopify_store_url");

  if (lookupError) {
    console.error("Beta duplicate lookup failed:", lookupError);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 502 },
    );
  }

  const alreadyApplied = existingRows ?? [];

  const normalizedName = normalizeStoreName(fullName).toLowerCase();

  const samePerson = alreadyApplied.some((row) => {
    const existingEmail = String(row.work_email ?? "").trim().toLowerCase();
    const existingPersonName = normalizeStoreName(String(row.full_name ?? "")).toLowerCase();
    return existingEmail === workEmail || existingPersonName === normalizedName;
  });
  if (samePerson) {
    return NextResponse.json(
      { error: "You're already on the list." },
      { status: 409 },
    );
  }

  const sameCompany = alreadyApplied.some((row) => {
    const existingName = normalizeStoreName(String(row.store_name ?? ""));
    const existingHost = storeHostname(String(row.shopify_store_url ?? ""));
    const sameName = existingName.toLowerCase() === storeName.toLowerCase();
    const sameStore = Boolean(hostname) && existingHost === hostname;
    return sameName || sameStore;
  });
  if (sameCompany) {
    return NextResponse.json(
      { error: "Someone from this company is already on the list." },
      { status: 409 },
    );
  }

  const { error: insertError } = await supabase.from("beta_applications").insert({
    full_name: fullName,
    work_email: workEmail,
    store_name: storeName,
    shopify_store_url: shopifyUrl,
    role,
    average_orders_per_month: orderVolume,
    fulfillment_challenge: challenge,
    status: "new",
  });

  if (insertError) {
    if (insertError.code === "23505") {
      const detail = `${insertError.message} ${insertError.details ?? ""}`.toLowerCase();
      const companyConflict =
        detail.includes("store_name") || detail.includes("shopify_store_url");
      return NextResponse.json(
        {
          error: companyConflict
            ? "Someone from this company is already on the list."
            : "You're already on the list.",
        },
        { status: 409 },
      );
    }

    console.error("Beta insert failed:", insertError);
    return NextResponse.json(
      { error: "Submission failed. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

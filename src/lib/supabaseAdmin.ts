import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let cached: SupabaseClient | null = null;

function normalizeSupabaseUrl(value: string) {
  const trimmed = value.trim().replace(/\/+$/, "");
  return trimmed.replace(/\/rest\/v1$/i, "");
}

export function getSupabaseAdmin(): SupabaseClient {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error("Supabase is not configured.");
  }

  if (!cached) {
    cached = createClient(normalizeSupabaseUrl(url), serviceRoleKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }

  return cached;
}

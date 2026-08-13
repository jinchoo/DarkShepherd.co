-- DarkShepherd beta applications
-- Apply in the Supabase SQL editor, or via `supabase db push`.
-- Inserts are performed server-side with the service role (bypasses RLS).
-- Anon / authenticated users have no policies, so they cannot read or write.

create table if not exists public.beta_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  work_email text not null,
  store_name text not null,
  shopify_store_url text not null,
  role text not null,
  average_orders_per_month text not null,
  fulfillment_challenge text not null,
  status text not null default 'new'
);

create unique index if not exists beta_applications_work_email_lower_idx
  on public.beta_applications (lower(work_email));

alter table public.beta_applications enable row level security;

revoke all on table public.beta_applications from anon, authenticated;
grant all on table public.beta_applications to service_role;

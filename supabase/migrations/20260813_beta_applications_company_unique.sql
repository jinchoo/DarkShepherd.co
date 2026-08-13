-- Extra duplicate protection for beta applications.
-- Safe to run in the SQL editor even if the table already exists.

create unique index if not exists beta_applications_store_name_lower_idx
  on public.beta_applications (lower(btrim(store_name)));

Instructions to create the `waitlist` table in Supabase

1. Open your Supabase project dashboard.
2. Go to SQL Editor → New query.
3. Paste the SQL from `db/001_create_waitlist.sql` and run it.

Notes:
- This creates a table with `email`, `stage`, and `created_at` and enables Row Level Security.
- The policy `Allow insert` permits unauthenticated inserts but prevents public reads. Adjust policies if you want read access for admins only.
- To run via `psql` or a migration runner, execute the SQL against your DB connection string.

Recommended server setup:
- Store `SUPABASE_SERVICE_ROLE_KEY` in Vercel (or your server env) for secure server-side writes.
- Locally, create a `.env.local` in the `onefoundr` folder with:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_SITE_URL=https://onefoundr.com
```

Security reminder: never commit `SUPABASE_SERVICE_ROLE_KEY` or `RESEND_API_KEY` to source control.

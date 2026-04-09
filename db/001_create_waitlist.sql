-- Create waitlist table and RLS policy for OneFoundr
-- Run this in your Supabase SQL editor or via psql against the database

create table if not exists waitlist (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  stage text not null,
  created_at timestamp with time zone default now()
);

-- Enable Row Level Security
alter table waitlist enable row level security;

-- Allow insert only (no public reads)
create policy "Allow insert" on waitlist
  for insert with check (true);

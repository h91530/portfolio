-- 포트폴리오 방문 로그 테이블
-- Supabase 대시보드 > SQL Editor 에 붙여넣고 실행하세요.
-- 프로젝트: jyuhuwbkkrkdjnhijkks

create table if not exists public.portfolio_visits (
  id bigint generated always as identity primary key,
  ip text,
  user_agent text,
  browser text,
  os text,
  device_type text,
  path text,
  referer text,
  created_at timestamptz not null default now()
);

create index if not exists portfolio_visits_created_at_idx
  on public.portfolio_visits (created_at desc);

-- 서버(service_role)에서만 접근하므로 RLS 활성화 + public 정책 없음
alter table public.portfolio_visits enable row level security;

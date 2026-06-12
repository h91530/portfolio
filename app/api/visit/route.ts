import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '../../lib/supabaseAdmin';

export const dynamic = 'force-dynamic';

// User-Agent에서 브라우저 / OS / 기기 유형 추정
function parseUA(ua: string) {
  const u = ua || '';
  // OS
  let os = '기타';
  if (/Windows NT 10/.test(u)) os = 'Windows 10/11';
  else if (/Windows NT/.test(u)) os = 'Windows';
  else if (/iPhone|iPad|iPod/.test(u)) os = 'iOS';
  else if (/Android/.test(u)) os = 'Android';
  else if (/Mac OS X/.test(u)) os = 'macOS';
  else if (/Linux/.test(u)) os = 'Linux';

  // 브라우저
  let browser = '기타';
  if (/Edg\//.test(u)) browser = 'Edge';
  else if (/OPR\/|Opera/.test(u)) browser = 'Opera';
  else if (/SamsungBrowser/.test(u)) browser = 'Samsung Internet';
  else if (/Chrome\//.test(u)) browser = 'Chrome';
  else if (/Firefox\//.test(u)) browser = 'Firefox';
  else if (/Safari\//.test(u)) browser = 'Safari';

  // 기기 유형
  let deviceType = 'PC';
  if (/iPad|Tablet/.test(u)) deviceType = '태블릿';
  else if (/Mobi|Android|iPhone/.test(u)) deviceType = '모바일';

  return { os, browser, deviceType };
}

function getClientIp(req: NextRequest): string {
  const xff = req.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0].trim();
  return (
    req.headers.get('x-real-ip') ||
    req.headers.get('cf-connecting-ip') ||
    'unknown'
  );
}

// 방문 기록 저장
export async function POST(req: NextRequest) {
  try {
    const ua = req.headers.get('user-agent') || '';
    const { os, browser, deviceType } = parseUA(ua);
    const ip = getClientIp(req);

    let path = '/';
    let referer: string | null = null;
    try {
      const body = await req.json();
      if (body?.path) path = String(body.path);
      // 실제 유입 경로는 클라이언트의 document.referrer 뿐.
      // 비어 있으면 "직접 방문/출처 불명"이므로 null 로 둔다.
      // (요청 헤더 referer 는 /api/visit 을 호출한 포트폴리오 자기 주소라 의미 없음 → 폴백 금지)
      if (typeof body?.referrer === 'string' && body.referrer.trim() !== '') {
        referer = body.referrer.trim();
      }
    } catch {
      /* body 없을 수 있음 */
    }

    const { error } = await supabaseAdmin.from('portfolio_visits').insert([
      { ip, user_agent: ua, browser, os, device_type: deviceType, path, referer },
    ]);

    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('방문 기록 실패:', e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

// 방문 목록 조회
export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from('portfolio_visits')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1000);

    if (error) throw error;
    return NextResponse.json({ visits: data || [] });
  } catch (e) {
    console.error('방문 조회 실패:', e);
    return NextResponse.json({ error: '조회 실패' }, { status: 500 });
  }
}

// 전체 삭제
export async function DELETE() {
  try {
    const { error } = await supabaseAdmin
      .from('portfolio_visits')
      .delete()
      .gte('id', 0);

    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('전체 삭제 실패:', e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

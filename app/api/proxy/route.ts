import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url');

  if (!url) {
    return new NextResponse('URL required', { status: 400 });
  }

  try {
    let targetUrl = url;
    if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
      targetUrl = 'https://' + targetUrl;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(targetUrl, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'ko-KR,ko;q=0.9',
        'Referer': 'https://www.google.com/',
      },
      redirect: 'follow',
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return new NextResponse(`Error: ${response.status}`, { status: response.status });
    }

    let html = await response.text();

    // X-Frame-Options 및 CSP 메타 태그 제거
    html = html.replace(/<meta[^>]*http-equiv=['"]Content-Security-Policy['"][^>]*>/gi, '');
    html = html.replace(/<meta[^>]*name=['"]X-Frame-Options['"][^>]*>/gi, '');
    html = html.replace(/<meta[^>]*property=['"]og:url['"][^>]*>/gi, '');

    // base 태그 추가로 상대 경로 처리
    if (!html.includes('<base')) {
      const baseTag = `<base href="${targetUrl}">`;
      html = html.replace('</head>', `${baseTag}</head>`);
    }

    const responseHeaders = new Headers();
    responseHeaders.set('Content-Type', 'text/html; charset=utf-8');
    responseHeaders.set('X-Frame-Options', 'ALLOWALL');
    responseHeaders.set('Content-Security-Policy', "default-src * 'unsafe-inline' 'unsafe-eval'; frame-ancestors *");

    return new NextResponse(html, {
      status: 200,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error('Proxy error:', error);
    return new NextResponse('Failed to fetch the page', { status: 500 });
  }
}

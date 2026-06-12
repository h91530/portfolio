'use client';

import { useEffect } from 'react';

// 포트폴리오 방문 시 1회 기록 (세션당 한 번)
export default function VisitLogger() {
  useEffect(() => {
    try {
      // 대시보드 자체 방문은 기록하지 않음
      if (window.location.pathname.startsWith('/dashboard')) return;
      // 세션당 중복 기록 방지
      if (sessionStorage.getItem('visit_logged')) return;
      sessionStorage.setItem('visit_logged', '1');

      fetch('/api/visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: window.location.pathname }),
        keepalive: true,
      }).catch(() => {});
    } catch {
      /* 무시 */
    }
  }, []);

  return null;
}

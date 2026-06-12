'use client';

import { useEffect, useState, useCallback } from 'react';
import styles from './dashboard.module.css';

interface Visit {
  id: number;
  ip: string | null;
  user_agent: string | null;
  browser: string | null;
  os: string | null;
  device_type: string | null;
  path: string | null;
  referer: string | null;
  created_at: string;
}

// 한글 '양태12' 와 영문 자판 그대로 친 'didxo12' 둘 다 허용
const DASHBOARD_PASSWORDS = ['양태12', 'didxo12'];
const AUTH_KEY = 'dashboard_auth';

export default function DashboardPage() {
  const [authed, setAuthed] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [pwInput, setPwInput] = useState('');
  const [pwError, setPwError] = useState('');

  const [visits, setVisits] = useState<Visit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // 최초 진입 시 localStorage 인증 확인
  useEffect(() => {
    try {
      if (localStorage.getItem(AUTH_KEY) === 'ok') setAuthed(true);
    } catch {
      /* 무시 */
    }
    setAuthChecked(true);
  }, []);

  const submitPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (DASHBOARD_PASSWORDS.includes(pwInput)) {
      try {
        localStorage.setItem(AUTH_KEY, 'ok');
      } catch {
        /* 무시 */
      }
      setAuthed(true);
      setPwError('');
    } else {
      setPwError('비밀번호가 올바르지 않습니다.');
    }
  };

  const load = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/visit', { cache: 'no-store' });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || '조회 실패');
      setVisits(data.visits || []);
    } catch (e) {
      setError(e instanceof Error ? e.message : '조회 실패');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authed) load();
  }, [authed, load]);

  const deleteOne = async (id: number) => {
    if (!confirm('이 방문 기록을 삭제할까요?')) return;
    const res = await fetch(`/api/visit/${id}`, { method: 'DELETE' });
    if (res.ok) setVisits((prev) => prev.filter((v) => v.id !== id));
    else alert('삭제 실패');
  };

  const deleteAll = async () => {
    if (!confirm('전체 방문 기록을 모두 삭제할까요? 되돌릴 수 없습니다.')) return;
    const res = await fetch('/api/visit', { method: 'DELETE' });
    if (res.ok) setVisits([]);
    else alert('전체 삭제 실패');
  };

  const fmtReferrer = (ref: string | null) => {
    if (!ref || ref.trim() === '') return '직접 방문';
    try {
      const u = new URL(ref);
      return u.hostname + (u.pathname !== '/' ? u.pathname : '');
    } catch {
      return ref;
    }
  };

  const fmt = (iso: string) => {
    const d = new Date(iso);
    const kst = new Date(d.getTime() + 9 * 60 * 60 * 1000);
    const p = (n: number) => String(n).padStart(2, '0');
    return `${kst.getUTCFullYear()}-${p(kst.getUTCMonth() + 1)}-${p(kst.getUTCDate())} ${p(kst.getUTCHours())}:${p(kst.getUTCMinutes())}`;
  };

  // 인증 확인 전에는 아무것도 렌더링하지 않음 (깜빡임 방지)
  if (!authChecked) return null;

  // 비밀번호 미인증 시 입력 화면
  if (!authed) {
    return (
      <div className={styles.page}>
        <div className={styles.lockWrap}>
          <form className={styles.lockBox} onSubmit={submitPassword}>
            <h1 className={styles.lockTitle}>🔒</h1>
            <p className={styles.lockDesc}>비밀번호를 입력하세요</p>
            <input
              className={styles.lockInput}
              type="password"
              value={pwInput}
              onChange={(e) => setPwInput(e.target.value)}
              placeholder="비밀번호"
              autoFocus
            />
            {pwError && <div className={styles.lockError}>{pwError}</div>}
            <button className={styles.lockBtn} type="submit">
              입력
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <p className={styles.subtitle}>포트폴리오 방문 기록 · 총 {visits.length}건</p>
          </div>
          <div className={styles.actions}>
            <button className={styles.refreshBtn} onClick={load} disabled={loading}>
              새로고침
            </button>
            <button
              className={styles.deleteAllBtn}
              onClick={deleteAll}
              disabled={loading || visits.length === 0}
            >
              전체 삭제
            </button>
          </div>
        </header>

        {error && <div className={styles.error}>{error}</div>}

        {loading ? (
          <div className={styles.empty}>불러오는 중…</div>
        ) : visits.length === 0 ? (
          <div className={styles.empty}>방문 기록이 없습니다.</div>
        ) : (
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>방문 시각 (KST)</th>
                  <th>IP</th>
                  <th>기기</th>
                  <th>OS</th>
                  <th>브라우저</th>
                  <th>유입 경로</th>
                  <th>경로</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {visits.map((v) => (
                  <tr key={v.id}>
                    <td>{fmt(v.created_at)}</td>
                    <td className={styles.mono}>{v.ip || '-'}</td>
                    <td>
                      <span className={styles.badge}>{v.device_type || '-'}</span>
                    </td>
                    <td>{v.os || '-'}</td>
                    <td>{v.browser || '-'}</td>
                    <td className={styles.mono}>
                      {v.referer && v.referer.trim() !== '' ? (
                        <a
                          className={styles.refLink}
                          href={v.referer}
                          target="_blank"
                          rel="noreferrer noopener"
                          title={v.referer}
                        >
                          {fmtReferrer(v.referer)}
                        </a>
                      ) : (
                        '직접 방문'
                      )}
                    </td>
                    <td className={styles.mono}>{v.path || '-'}</td>
                    <td>
                      <button className={styles.deleteBtn} onClick={() => deleteOne(v.id)}>
                        삭제
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

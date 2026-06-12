'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import BackgroundSlider from './components/BackgroundSlider';
import Taskbar from './components/Taskbar';
import Windows from './components/Windows';
import Login from './components/Login';
import VisitLogger from './components/VisitLogger';
import { WindowProvider } from './contexts/WindowContext';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const pathname = usePathname();

  // 대시보드는 부팅/로그인 연출 없이 독립 페이지로 렌더링
  if (pathname?.startsWith('/dashboard')) {
    return <>{children}</>;
  }

  return (
    <>
      <VisitLogger />
      {isLoading ? (
        <Windows setIsLoading={setIsLoading} onComplete={() => setIsLogin(true)} />
      ) : isLogin ? (
        <Login setIsLogin={setIsLogin} />
      ) : (
        <WindowProvider>
          <BackgroundSlider>{children}</BackgroundSlider>
          <Taskbar />
        </WindowProvider>
      )}
    </>
  );
}

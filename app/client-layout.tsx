'use client';

import { useState } from 'react';
import BackgroundSlider from './components/BackgroundSlider';
import Taskbar from './components/Taskbar';
import Windows from './components/Windows';
import Login from './components/Login';
import { WindowProvider } from './contexts/WindowContext';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
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

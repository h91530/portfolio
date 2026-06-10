'use client';

import { useState, useEffect } from 'react';

export default function Login({ setIsLogin }: { setIsLogin: (value: boolean) => void }) {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const fullText = '안녕하세요. 웹개발자 양태현입니다.';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const handleLogin = () => {
    setIsLoggingIn(true);
    setTimeout(() => {
      setIsLogin(false);
    }, 500);
  };

  return (
    <div 
      className={`login-screen-full ${isLoggingIn ? 'fade-out-full' : ''}`}
    >
      <div className="login-background" style={{ backgroundImage: 'url(/login.jpg)' }}></div>
      <div className="login-overlay">
        <div className="login-content">
          <div className="user-image-wrap">
            <img src="/user.png" alt="User" className="user-image" />
          </div>
          <div className="login-username">
            {displayedText}
            <span className="typing-cursor">|</span>
          </div>
          <button className="login-button-gray" onClick={handleLogin} disabled={isLoggingIn}>
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}

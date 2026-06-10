'use client';

import { useState, useEffect } from 'react';
import { useWindows } from '../contexts/WindowContext';

const projects = [
  { id: 'about', label: '소개', icon: '/me.png' },
  { id: 'telemon', label: '텔레몬', icon: '/telemon.svg' },
  { id: '2fitreport', label: '2FitReport', icon: '/2fitreport.png' },
  { id: 'yolo', label: 'YOLO AI', icon: '/ai.svg' },
  { id: 'realestate', label: '부동산 API', icon: '/logo.png' },
  { id: 'consulting', label: '컨설팅', icon: '/logo1.png' },
];

const getWeatherInfo = (code: number) => {
  const weatherMap: { [key: number]: { label: string; icon: string } } = {
    0: { label: '맑음', icon: '☀️' },
    1: { label: '맑음', icon: '☀️' },
    2: { label: '흐림', icon: '⛅' },
    3: { label: '흐림', icon: '☁️' },
    45: { label: '안개', icon: '🌫️' },
    48: { label: '안개', icon: '🌫️' },
    51: { label: '이슬비', icon: '🌧️' },
    53: { label: '이슬비', icon: '🌧️' },
    55: { label: '이슬비', icon: '🌧️' },
    61: { label: '비', icon: '🌧️' },
    63: { label: '비', icon: '🌧️' },
    65: { label: '폭우', icon: '⛈️' },
    71: { label: '눈', icon: '❄️' },
    73: { label: '눈', icon: '❄️' },
    75: { label: '눈', icon: '❄️' },
    95: { label: '번개', icon: '⛈️' },
    96: { label: '번개', icon: '⛈️' },
    99: { label: '번개', icon: '⛈️' },
  };
  return weatherMap[code] || { label: '알 수 없음', icon: '?' };
};

export default function Taskbar() {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [temperature, setTemperature] = useState('');
  const [weatherInfo, setWeatherInfo] = useState<{ label: string; icon: string } | null>(null);
  const [weatherDetails, setWeatherDetails] = useState<{ humidity: number; windSpeed: number; apparentTemp: number } | null>(null);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [weatherModalOpen, setWeatherModalOpen] = useState(false);
  const { windows, activeId, taskbarClick, openWindow } = useWindows();
  const openItems = Object.values(windows).filter((w) => w.open);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const ampm = hours >= 12 ? '오후' : '오전';
      const displayHours = hours % 12 || 12;

      setTime(`${ampm} ${displayHours}:${minutes}`);

      // 선택된 날짜가 오늘이 아니면 업데이트하지 않음
      const isToday = selectedDate.getDate() === now.getDate() &&
                      selectedDate.getMonth() === now.getMonth() &&
                      selectedDate.getFullYear() === now.getFullYear();

      if (isToday) {
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        setDate(`${year}-${month}-${day}`);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [selectedDate]);

  useEffect(() => {
    const setFallbackWeather = () => {
      setTemperature('');
      setWeatherInfo(null);
      setWeatherDetails(null);
    };

    const fetchWeather = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);
        const response = await fetch('/api/weather', { signal: controller.signal });
        clearTimeout(timeoutId);
        if (!response.ok) throw new Error(`status ${response.status}`);
        const data = await response.json();
        if (data.error) throw new Error(data.error);
        setTemperature(String(data.temperature));
        setWeatherInfo(getWeatherInfo(data.code));
        setWeatherDetails({
          humidity: data.humidity,
          windSpeed: data.windSpeed,
          apparentTemp: data.apparentTemp,
        });
      } catch {
        setFallbackWeather();
      }
    };

    fetchWeather().catch(() => setFallbackWeather());
    const interval = setInterval(() => {
      fetchWeather().catch(() => setFallbackWeather());
    }, 600000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="taskbar">
        <button
          className="taskbar-icon"
          title="시작"
          onClick={() => setStartMenuOpen(!startMenuOpen)}
        >
          <img src="/windows.png" alt="Windows" className="taskbar-windows-icon" />
        </button>
      <div className="taskbar-windows">
        {openItems.map((w) => {
          const isActive = activeId === w.id && !w.minimized;
          return (
            <button
              key={w.id}
              className={`taskbar-window-item${isActive ? ' active' : ''}${w.minimized ? ' minimized' : ''}`}
              title={w.title}
              onClick={() => taskbarClick(w.id)}
            >
              <span className="tw-icon">
                {w.icon.startsWith('/') ? (
                  <img src={w.icon} alt="" className="tw-icon-img" />
                ) : (
                  w.icon
                )}
              </span>
            </button>
          );
        })}
      </div>
      <div className="system-info">
        <div
          className="system-weather"
          onClick={() => setWeatherModalOpen(true)}
          style={{ cursor: 'pointer' }}
        >
          {weatherInfo && (
            <>
              <span>{weatherInfo.icon}</span>
              <span>{weatherInfo.label}</span>
              <span>{temperature}°C</span>
            </>
          )}
        </div>
        <div
          className="system-time"
          onClick={() => setCalendarOpen(!calendarOpen)}
          style={{ cursor: 'pointer' }}
        >
          <div>{time}</div>
          <div>{date}</div>
        </div>
      </div>
      </div>
      {calendarOpen && (
        <div
          className="calendar-overlay"
          onClick={() => setCalendarOpen(false)}
        >
          <div className="calendar" onClick={(e) => e.stopPropagation()}>
            <div className="calendar-header">
              <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1))}>◀</button>
              <h3>{selectedDate.getFullYear()}년 {selectedDate.getMonth() + 1}월</h3>
              <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1))}>▶</button>
            </div>
            <button
              className="today-btn"
              onClick={() => {
                const today = new Date();
                setSelectedDate(today);
                const year = today.getFullYear();
                const month = String(today.getMonth() + 1).padStart(2, '0');
                const day = String(today.getDate()).padStart(2, '0');
                setDate(`${year}-${month}-${day}`);
                setCalendarOpen(false);
              }}
            >
              오늘
            </button>
            <div className="calendar-weekdays">
              <div>일</div>
              <div>월</div>
              <div>화</div>
              <div>수</div>
              <div>목</div>
              <div>금</div>
              <div>토</div>
            </div>
            <div className="calendar-days">
              {Array.from({ length: new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay() }).map((_, i) => (
                <div key={`empty-${i}`} className="calendar-day empty"></div>
              ))}
              {Array.from({ length: new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate() }).map((_, i) => (
                <div
                  key={i}
                  className={`calendar-day ${
                    selectedDate.getDate() === i + 1 && selectedDate.getMonth() === new Date().getMonth()
                      ? 'selected'
                      : ''
                  }`}
                  onClick={() => {
                    const newDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i + 1);
                    setSelectedDate(newDate);
                    const year = newDate.getFullYear();
                    const month = String(newDate.getMonth() + 1).padStart(2, '0');
                    const day = String(newDate.getDate()).padStart(2, '0');
                    setDate(`${year}-${month}-${day}`);
                    setCalendarOpen(false);
                  }}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {startMenuOpen && (
        <div
          className="start-menu-overlay"
          onClick={() => setStartMenuOpen(false)}
        >
          <div className="start-menu" onClick={(e) => e.stopPropagation()}>
            <div className="start-menu-header">
              <h2>All apps</h2>
            </div>
            <div className="start-menu-content">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="start-menu-item"
                  onClick={() => {
                    openWindow({ id: project.id, title: project.label, icon: project.icon, maximized: ['about', 'telemon', '2fitreport', 'yolo', 'realestate', 'consulting'].includes(project.id) });
                    setStartMenuOpen(false);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  {project.icon.startsWith('/') ? (
                    <img src={project.icon} alt="" style={{ width: '40px', height: '40px', marginRight: '20px' }} />
                  ) : (
                    <span style={{ marginRight: '20px', fontSize: '32px' }}>{project.icon}</span>
                  )}
                  {project.label}
                </div>
              ))}
            </div>
            <div className="start-menu-footer">
              <button className="start-menu-btn">⏻️ 종료</button>
            </div>
          </div>
        </div>
      )}
      {weatherModalOpen && (
        <div
          className="weather-modal-overlay"
          onClick={() => setWeatherModalOpen(false)}
        >
          <div className="weather-modal" onClick={(e) => e.stopPropagation()}>
            <div className="weather-modal-header">
              <h2>현재 날씨</h2>
              <button onClick={() => setWeatherModalOpen(false)}>✕</button>
            </div>
            <div className="weather-modal-content">
              <div className="weather-date">
                {new Date().getFullYear()}년 {new Date().getMonth() + 1}월 {new Date().getDate()}일
              </div>
              <div className="weather-icon-large">{weatherInfo?.icon}</div>
              <div className="weather-status">{weatherInfo?.label}</div>
              <div className="weather-temp-main">{temperature}°C</div>
              <div className="weather-details-grid">
                <div className="weather-detail">
                  <span className="label">체감온도</span>
                  <span className="value">{weatherDetails?.apparentTemp}°C</span>
                </div>
                <div className="weather-detail">
                  <span className="label">습도</span>
                  <span className="value">{weatherDetails?.humidity}%</span>
                </div>
                <div className="weather-detail">
                  <span className="label">풍속</span>
                  <span className="value">{weatherDetails?.windSpeed} km/h</span>
                </div>
              </div>
              <div className="weather-description-detail">
                {weatherInfo?.label === '맑음' && '맑은 날씨가 계속되고 있습니다. 야외활동하기 좋은 날씨입니다. 자외선 차단제를 준비하세요.'}
                {weatherInfo?.label === '흐림' && '흐린 날씨입니다. 구름이 많이 덮여있지만 비는 오지 않을 것 같습니다. 외출 시 얇은 겹겹이가 좋습니다.'}
                {weatherInfo?.label === '안개' && '안개가 낀 날씨입니다. 시야가 제한될 수 있으니 운전 시 주의하세요.'}
                {weatherInfo?.label === '비' && '현재 비가 내리고 있습니다. 우산과 방수복을 준비하세요. 외출 시 미끄러운 길에 주의하세요.'}
                {weatherInfo?.label === '폭우' && '폭우가 내리고 있습니다. 외출을 자제해주세요. 산사태와 홍수에 주의하시기 바랍니다.'}
                {weatherInfo?.label === '이슬비' && '이슬비가 내리고 있습니다. 약한 비가 지속될 것 같습니다.'}
                {weatherInfo?.label === '눈' && '눈이 내리고 있습니다. 신발에 주의하고 외출 시 따뜻한 옷을 입으세요.'}
                {weatherInfo?.label === '번개' && '뇌우가 발생하고 있습니다. 안전한 장소로 이동하세요. 가급적 외출을 피하시기 바랍니다.'}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

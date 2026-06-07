'use client';

import { useState, useRef, useEffect } from 'react';
import AboutContent from './components/AboutContent';
import TelemonContent from './components/TelemonContent';
import FitReportContent from './components/FitReportContent';
import YoloContent from './components/YoloContent';
import RealEstateContent from './components/RealEstateContent';
import ConsultingContent from './components/ConsultingContent';
import { useWindows } from './contexts/WindowContext';

interface WindowPosition {
  [key: string]: { x: number; y: number };
}

// ===== 게임 설정 =====
const WORLD_W = 3200;
const PW = 44;
const PH = 52;
const GRAVITY = 1.1;
const MOVE = 5.5;
const JUMP = 19;
const MAX_FALL = 22;
const FLAG_X = 2980;

type Solid = { id: string; x: number; y: number; w: number; h: number; type: string; used?: boolean };
type Coin = { id: string; x: number; y: number; w: number; h: number; got: boolean };
type Goomba = { id: string; x: number; y: number; w: number; h: number; dir: number; dead: boolean };

const DECOR_CLOUDS = [
  { x: 180, top: 50 }, { x: 760, top: 90 }, { x: 1280, top: 45 },
  { x: 1850, top: 100 }, { x: 2450, top: 60 }, { x: 2900, top: 95 },
];
const DECOR_BUSHES = [
  { x: 480 }, { x: 1400 }, { x: 2350 }, { x: 2700 },
];

function buildLevel() {
  const solids: Solid[] = [
    { id: 'ground', x: 0, y: 0, w: WORLD_W, h: 60, type: 'ground' },
    { id: 'b1', x: 360, y: 210, w: 46, h: 46, type: 'brick' },
    { id: 'q1', x: 406, y: 210, w: 46, h: 46, type: 'question', used: false },
    { id: 'b2', x: 452, y: 210, w: 46, h: 46, type: 'brick' },
    { id: 'q2', x: 498, y: 210, w: 46, h: 46, type: 'question', used: false },
    { id: 'b3', x: 544, y: 210, w: 46, h: 46, type: 'brick' },
    { id: 'pipe1', x: 780, y: 60, w: 96, h: 84, type: 'pipe' },
    { id: 'pipe2', x: 1100, y: 60, w: 96, h: 124, type: 'pipe' },
    { id: 'p1', x: 1320, y: 250, w: 46, h: 46, type: 'brick' },
    { id: 'q3', x: 1366, y: 250, w: 46, h: 46, type: 'question', used: false },
    { id: 'p3', x: 1412, y: 250, w: 46, h: 46, type: 'brick' },
    { id: 's1', x: 1720, y: 60, w: 54, h: 60, type: 'brick' },
    { id: 's2', x: 1774, y: 60, w: 54, h: 120, type: 'brick' },
    { id: 's3', x: 1828, y: 60, w: 54, h: 180, type: 'brick' },
    { id: 's4', x: 1882, y: 60, w: 54, h: 240, type: 'brick' },
    { id: 'pl1', x: 2160, y: 220, w: 46, h: 46, type: 'brick' },
    { id: 'q4', x: 2206, y: 220, w: 46, h: 46, type: 'question', used: false },
    { id: 'pl3', x: 2252, y: 220, w: 46, h: 46, type: 'brick' },
  ];
  const coins: Coin[] = [
    { id: 'c1', x: 372, y: 300, w: 28, h: 28, got: false },
    { id: 'c2', x: 510, y: 300, w: 28, h: 28, got: false },
    { id: 'c3', x: 900, y: 210, w: 28, h: 28, got: false },
    { id: 'c4', x: 970, y: 210, w: 28, h: 28, got: false },
    { id: 'c5', x: 1379, y: 350, w: 28, h: 28, got: false },
    { id: 'c6', x: 1855, y: 360, w: 28, h: 28, got: false },
    { id: 'c7', x: 2219, y: 320, w: 28, h: 28, got: false },
    { id: 'c8', x: 2600, y: 130, w: 28, h: 28, got: false },
    { id: 'c9', x: 2660, y: 130, w: 28, h: 28, got: false },
  ];
  const goombas: Goomba[] = [
    { id: 'g1', x: 640, y: 60, w: 42, h: 42, dir: -1, dead: false },
    { id: 'g2', x: 1280, y: 60, w: 42, h: 42, dir: -1, dead: false },
    { id: 'g3', x: 2050, y: 60, w: 42, h: 42, dir: -1, dead: false },
  ];
  return { solids, coins, goombas };
}

function initGame() {
  return {
    px: 70, py: 60, vx: 0, vy: 0, onGround: false, facing: 1,
    cameraX: 0, score: 0, lives: 3, status: 'playing' as 'playing' | 'win' | 'over',
    ...buildLevel(),
  };
}

function overlap(ax: number, ay: number, aw: number, ah: number, b: { x: number; y: number; w: number; h: number }) {
  return ax < b.x + b.w && ax + aw > b.x && ay < b.y + b.h && ay + ah > b.y;
}

export default function Home() {
  const { windows, openWindow, closeWindow, minimizeWindow, toggleMaximize, focusWindow } = useWindows();
  const [windowPositions, setWindowPositions] = useState<WindowPosition>({});
  const [reloadCount, setReloadCount] = useState<Record<string, number>>({});

  const reloadWindow = (id: string) => {
    setReloadCount((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  };
  const [draggingWindow, setDraggingWindow] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [selectionBox, setSelectionBox] = useState<{ startX: number; startY: number; endX: number; endY: number } | null>(null);
  const [desktopDragging, setDesktopDragging] = useState(false);
  const desktopRef = useRef<HTMLDivElement>(null);
  const selectionStartRef = useRef({ x: 0, y: 0 });

  // 게임 상태
  const [, setTick] = useState(0);
  const gs = useRef(initGame());
  const keys = useRef({ left: false, right: false, jump: false });
  const gameAreaRef = useRef<HTMLDivElement>(null);

  const handleWindowHeaderMouseDown = (e: React.MouseEvent, windowId: string) => {
    const target = e.target as HTMLElement;
    if (target.closest('.window-controls') || target.closest('.browser-window-controls')) {
      focusWindow(windowId);
      return;
    }
    focusWindow(windowId);

    const headerEl = e.currentTarget as HTMLElement;
    const headerRect = headerEl.getBoundingClientRect();

    // 최대화 상태면 복원하면서 마우스 위치 기준으로 창을 재배치
    if (windows[windowId]?.maximized) {
      const ratio = (e.clientX - headerRect.left) / headerRect.width;
      const desktopRect = desktopRef.current?.getBoundingClientRect();
      const dW = desktopRect?.width ?? window.innerWidth;
      const restoredW =
        windowId === 'about' ? Math.min(1100, dW * 0.95) : Math.min(dW * 0.98, 1600);
      const offsetX = restoredW * ratio;
      const offsetY = e.clientY - headerRect.top;

      toggleMaximize(windowId);

      if (desktopRect) {
        const newX = Math.max(
          0,
          Math.min(e.clientX - desktopRect.left - offsetX, desktopRect.width - 200)
        );
        const newY = Math.max(0, e.clientY - desktopRect.top - offsetY);
        setWindowPositions((prev) => ({ ...prev, [windowId]: { x: newX, y: newY } }));
      }

      setDraggingWindow(windowId);
      setDragOffset({ x: offsetX, y: offsetY });
      return;
    }

    setDraggingWindow(windowId);
    setDragOffset({
      x: e.clientX - headerRect.left,
      y: e.clientY - headerRect.top,
    });
  };

  const handleHeaderDoubleClick = (windowId: string) => {
    toggleMaximize(windowId);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!draggingWindow || !desktopRef.current) return;

    const desktopRect = desktopRef.current.getBoundingClientRect();
    const newX = Math.max(0, Math.min(e.clientX - desktopRect.left - dragOffset.x, desktopRect.width - 400));
    const newY = Math.max(0, Math.min(e.clientY - desktopRect.top - dragOffset.y, desktopRect.height - 200));

    setWindowPositions({
      ...windowPositions,
      [draggingWindow]: { x: newX, y: newY },
    });
  };

  const handleMouseUp = () => {
    setDraggingWindow(null);
    if (desktopDragging) {
      setDesktopDragging(false);
      setSelectionBox(null);
    }
  };

  const handleDesktopMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.desktop-icon') ||
        (e.target as HTMLElement).closest('.window') ||
        (e.target as HTMLElement).closest('.browser-window') ||
        (e.target as HTMLElement).closest('.chrome-window')) {
      return;
    }

    setDesktopDragging(true);
    selectionStartRef.current = { x: e.clientX, y: e.clientY };
    setSelectionBox({
      startX: e.clientX,
      startY: e.clientY,
      endX: e.clientX,
      endY: e.clientY,
    });
  };

  const handleDesktopMouseMove = (e: React.MouseEvent) => {
    if (!desktopDragging || !selectionBox) return;

    setSelectionBox({
      ...selectionBox,
      endX: e.clientX,
      endY: e.clientY,
    });
  };

  const getWindowStyle = (windowId: string): React.CSSProperties => {
    const meta = windows[windowId];
    const z = meta?.zIndex ?? 100;
    if (meta?.maximized) {
      return {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        maxWidth: 'none',
        maxHeight: 'none',
        transform: 'none',
        zIndex: z,
        borderRadius: 0,
      };
    }
    const pos = windowPositions[windowId];
    if (!pos) {
      return {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: z,
      };
    }
    return {
      position: 'absolute',
      top: `${pos.y}px`,
      left: `${pos.x}px`,
      transform: 'none',
      zIndex: z,
    };
  };

  const handleGameKeyDown = (e: React.KeyboardEvent) => {
    const k = e.key;
    if (k === 'ArrowLeft' || k === 'a' || k === 'A') { e.preventDefault(); keys.current.left = true; }
    if (k === 'ArrowRight' || k === 'd' || k === 'D') { e.preventDefault(); keys.current.right = true; }
    if (k === ' ' || k === 'ArrowUp' || k === 'w' || k === 'W') { e.preventDefault(); keys.current.jump = true; }
  };

  const handleGameKeyUp = (e: React.KeyboardEvent) => {
    const k = e.key;
    if (k === 'ArrowLeft' || k === 'a' || k === 'A') keys.current.left = false;
    if (k === 'ArrowRight' || k === 'd' || k === 'D') keys.current.right = false;
    if (k === ' ' || k === 'ArrowUp' || k === 'w' || k === 'W') keys.current.jump = false;
  };

  const restartGame = () => {
    gs.current = initGame();
    keys.current = { left: false, right: false, jump: false };
    gameAreaRef.current?.focus();
    setTick((t) => t + 1);
  };

  const gameVisible = !!windows.game?.open && !windows.game?.minimized;

  useEffect(() => {
    if (!gameVisible) return;

    gs.current = initGame();
    keys.current = { left: false, right: false, jump: false };
    gameAreaRef.current?.focus();

    let raf = 0;

    const update = () => {
      const g = gs.current;
      if (g.status !== 'playing') return;
      const k = keys.current;

      // 좌우 이동
      g.vx = (k.right ? MOVE : 0) - (k.left ? MOVE : 0);
      if (g.vx > 0) g.facing = 1;
      else if (g.vx < 0) g.facing = -1;

      // 점프
      if (k.jump && g.onGround) {
        g.vy = JUMP;
        g.onGround = false;
      }

      // 중력
      g.vy -= GRAVITY;
      if (g.vy < -MAX_FALL) g.vy = -MAX_FALL;

      // X축 이동 + 충돌
      g.px += g.vx;
      for (const s of g.solids) {
        if (overlap(g.px, g.py, PW, PH, s)) {
          if (g.vx > 0) g.px = s.x - PW;
          else if (g.vx < 0) g.px = s.x + s.w;
        }
      }
      if (g.px < 0) g.px = 0;
      if (g.px > WORLD_W - PW) g.px = WORLD_W - PW;

      // Y축 이동 + 충돌
      g.py += g.vy;
      g.onGround = false;
      for (const s of g.solids) {
        if (overlap(g.px, g.py, PW, PH, s)) {
          if (g.vy <= 0) {
            g.py = s.y + s.h;
            g.vy = 0;
            g.onGround = true;
          } else {
            g.py = s.y - PH;
            g.vy = 0;
            if (s.type === 'question' && !s.used) {
              s.used = true;
              g.score += 1;
            }
          }
        }
      }
      if (g.py < 0) g.py = 0;
      const vh = gameAreaRef.current?.clientHeight || 500;
      if (g.py > vh - PH) {
        g.py = vh - PH;
        if (g.vy > 0) g.vy = 0;
      }

      // 코인 획득
      for (const c of g.coins) {
        if (!c.got && overlap(g.px, g.py, PW, PH, c)) {
          c.got = true;
          g.score += 1;
        }
      }

      // 굼바
      for (const gb of g.goombas) {
        if (gb.dead) continue;
        gb.x += gb.dir * 1.4;
        if (gb.x < 0 || gb.x > WORLD_W - gb.w) gb.dir *= -1;
        for (const s of g.solids) {
          if (s.type === 'ground') continue;
          if (overlap(gb.x, gb.y, gb.w, gb.h, s)) {
            if (gb.dir > 0) gb.x = s.x - gb.w;
            else gb.x = s.x + s.w;
            gb.dir *= -1;
          }
        }
        if (overlap(g.px, g.py, PW, PH, gb)) {
          const stomp = g.vy < 0 && g.py >= gb.y + gb.h - 18;
          if (stomp) {
            gb.dead = true;
            g.vy = 13;
            g.score += 2;
          } else {
            g.lives -= 1;
            if (g.lives <= 0) {
              g.status = 'over';
            } else {
              g.px = 70;
              g.py = 60;
              g.vx = 0;
              g.vy = 0;
              g.cameraX = 0;
            }
          }
        }
      }

      // 도착
      if (g.px + PW / 2 > FLAG_X) {
        g.status = 'win';
      }

      // 카메라
      const vw = gameAreaRef.current?.clientWidth || 800;
      let cam = g.px + PW / 2 - vw / 2;
      cam = Math.max(0, Math.min(cam, WORLD_W - vw));
      if (WORLD_W < vw) cam = 0;
      g.cameraX = cam;
    };

    const step = () => {
      update();
      setTick((t) => t + 1);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    return () => cancelAnimationFrame(raf);
  }, [gameVisible]);

  const desktopIcons = [
    { id: 'about', label: '소개', icon: '/me.png' },
    { id: 'telemon', label: '텔레몬', icon: '/telemon.svg' },
    { id: '2fitreport', label: '2FitReport', icon: '/2fitreport.png' },
    { id: 'yolo', label: 'YOLO AI', icon: '/ai.svg' },
    { id: 'realestate', label: '부동산 API', icon: '/logo.png' },
    { id: 'consulting', label: '컨설팅', icon: '/logo1.png' },
    { id: 'game', label: '슈퍼 점프', icon: '🎮' },
  ];

  const g = gs.current;

  return (
    <main
      className="desktop-main"
      ref={desktopRef}
      onMouseMove={(e) => {
        handleMouseMove(e);
        handleDesktopMouseMove(e);
      }}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseDown={handleDesktopMouseDown}
    >
      {/* Desktop Icons */}
      <div className="desktop-icons">
        {desktopIcons.map((icon) => (
          <div
            key={icon.id}
            className="desktop-icon"
            onDoubleClick={() => openWindow({ id: icon.id, title: icon.label, icon: icon.icon, maximized: icon.id === 'about' || icon.id === 'telemon' || icon.id === '2fitreport' || icon.id === 'yolo' || icon.id === 'realestate' || icon.id === 'consulting' })}
          >
            <div className="icon-image">
              {icon.icon.startsWith('/') ? (
                <img
                  src={icon.icon}
                  alt={icon.label}
                  className={`icon-img ${icon.id === 'telemon' ? 'no-bg' : ''}`}
                />
              ) : (
                icon.icon
              )}
            </div>
            <div className="icon-label">{icon.label}</div>
          </div>
        ))}
      </div>

      {/* About Window - Chrome style */}
      {windows.about?.open && !windows.about.minimized && (
        <div
          className={`chrome-window${windows.about.maximized ? ' maximized' : ''}`}
          style={getWindowStyle('about')}
          onMouseDown={() => focusWindow('about')}
        >
          <div
            className="chrome-tabbar"
            onMouseDown={(e) => handleWindowHeaderMouseDown(e, 'about')}
            onDoubleClick={() => handleHeaderDoubleClick('about')}
          >
            <div className="chrome-tabs">
              <div className="chrome-tab active">
                <span className="chrome-tab-favicon">
                  <img src="/me.png" alt="" />
                </span>
                <span className="chrome-tab-title">소개 - 양태현</span>
                <button
                  className="chrome-tab-close window-controls"
                  onClick={() => closeWindow('about')}
                  title="탭 닫기"
                >
                  ✕
                </button>
              </div>
              <button className="chrome-newtab window-controls" title="새 탭">+</button>
            </div>
            <div className="chrome-winctl window-controls">
              <button className="chrome-winbtn" title="최소화" onClick={() => minimizeWindow('about')}>─</button>
              <button className="chrome-winbtn" title={windows.about.maximized ? '복원' : '최대화'} onClick={() => toggleMaximize('about')}>
                {windows.about.maximized ? '❐' : '▢'}
              </button>
              <button
                className="chrome-winbtn chrome-close"
                onClick={() => closeWindow('about')}
                title="닫기"
              >
                ✕
              </button>
            </div>
          </div>
          <div className="chrome-toolbar">
            <button className="chrome-toolbtn" title="뒤로">←</button>
            <button className="chrome-toolbtn" title="앞으로">→</button>
            <button className="chrome-toolbtn" title="새로고침" onClick={() => reloadWindow('about')}>↻</button>
            <div className="chrome-omnibox">
              <span className="chrome-omnibox-icon">🔒</span>
              <span className="chrome-omnibox-url">portfolio.dev/about</span>
            </div>
            <button className="chrome-toolbtn" title="북마크">☆</button>
            <button className="chrome-toolbtn" title="확장 프로그램">🧩</button>
            <button className="chrome-toolbtn" title="더보기">⋮</button>
          </div>
          <div className="chrome-content">
            <AboutContent key={reloadCount['about'] ?? 0} />
          </div>
        </div>
      )}

      {/* Telemon Window - Chrome style */}
      {windows.telemon?.open && !windows.telemon.minimized && (
        <div
          className={`chrome-window${windows.telemon.maximized ? ' maximized' : ''}`}
          style={getWindowStyle('telemon')}
          onMouseDown={() => focusWindow('telemon')}
        >
          <div
            className="chrome-tabbar"
            onMouseDown={(e) => handleWindowHeaderMouseDown(e, 'telemon')}
            onDoubleClick={() => handleHeaderDoubleClick('telemon')}
          >
            <div className="chrome-tabs">
              <div className="chrome-tab active">
                <span className="chrome-tab-favicon">
                  <img src="/telemon.svg" alt="" />
                </span>
                <span className="chrome-tab-title">텔레몬 - 구인구직</span>
                <button
                  className="chrome-tab-close window-controls"
                  onClick={() => closeWindow('telemon')}
                  title="탭 닫기"
                >
                  ✕
                </button>
              </div>
              <button className="chrome-newtab window-controls" title="새 탭">+</button>
            </div>
            <div className="chrome-winctl window-controls">
              <button className="chrome-winbtn" title="최소화" onClick={() => minimizeWindow('telemon')}>─</button>
              <button className="chrome-winbtn" title={windows.telemon.maximized ? '복원' : '최대화'} onClick={() => toggleMaximize('telemon')}>
                {windows.telemon.maximized ? '❐' : '▢'}
              </button>
              <button
                className="chrome-winbtn chrome-close"
                onClick={() => closeWindow('telemon')}
                title="닫기"
              >
                ✕
              </button>
            </div>
          </div>
          <div className="chrome-toolbar">
            <button className="chrome-toolbtn" title="뒤로">←</button>
            <button className="chrome-toolbtn" title="앞으로">→</button>
            <button className="chrome-toolbtn" title="새로고침" onClick={() => reloadWindow('telemon')}>↻</button>
            <div className="chrome-omnibox">
              <span className="chrome-omnibox-icon">🔒</span>
              <span className="chrome-omnibox-url">telemon.co.kr</span>
            </div>
            <button className="chrome-toolbtn" title="북마크">☆</button>
            <button className="chrome-toolbtn" title="확장 프로그램">🧩</button>
            <button className="chrome-toolbtn" title="더보기">⋮</button>
          </div>
          <div className="chrome-content">
            <TelemonContent key={reloadCount['telemon'] ?? 0} />
          </div>
        </div>
      )}

      {/* 2FitReport Window - Chrome style */}
      {windows['2fitreport']?.open && !windows['2fitreport'].minimized && (
        <div
          className={`chrome-window${windows['2fitreport'].maximized ? ' maximized' : ''}`}
          style={getWindowStyle('2fitreport')}
          onMouseDown={() => focusWindow('2fitreport')}
        >
          <div
            className="chrome-tabbar"
            onMouseDown={(e) => handleWindowHeaderMouseDown(e, '2fitreport')}
            onDoubleClick={() => handleHeaderDoubleClick('2fitreport')}
          >
            <div className="chrome-tabs">
              <div className="chrome-tab active">
                <span className="chrome-tab-favicon">
                  <img src="/2fitreport.png" alt="" />
                </span>
                <span className="chrome-tab-title">2FitReport</span>
                <button
                  className="chrome-tab-close window-controls"
                  onClick={() => closeWindow('2fitreport')}
                  title="탭 닫기"
                >
                  ✕
                </button>
              </div>
              <button className="chrome-newtab window-controls" title="새 탭">+</button>
            </div>
            <div className="chrome-winctl window-controls">
              <button className="chrome-winbtn" title="최소화" onClick={() => minimizeWindow('2fitreport')}>─</button>
              <button className="chrome-winbtn" title={windows['2fitreport'].maximized ? '복원' : '최대화'} onClick={() => toggleMaximize('2fitreport')}>
                {windows['2fitreport'].maximized ? '❐' : '▢'}
              </button>
              <button
                className="chrome-winbtn chrome-close"
                onClick={() => closeWindow('2fitreport')}
                title="닫기"
              >
                ✕
              </button>
            </div>
          </div>
          <div className="chrome-toolbar">
            <button className="chrome-toolbtn" title="뒤로">←</button>
            <button className="chrome-toolbtn" title="앞으로">→</button>
            <button className="chrome-toolbtn" title="새로고침" onClick={() => reloadWindow('2fitreport')}>↻</button>
            <div className="chrome-omnibox">
              <span className="chrome-omnibox-icon">🔒</span>
              <span className="chrome-omnibox-url">2fitreport.com</span>
            </div>
            <button className="chrome-toolbtn" title="북마크">☆</button>
            <button className="chrome-toolbtn" title="확장 프로그램">🧩</button>
            <button className="chrome-toolbtn" title="더보기">⋮</button>
          </div>
          <div className="chrome-content">
            <FitReportContent key={reloadCount['2fitreport'] ?? 0} />
          </div>
        </div>
      )}

      {/* YOLO Window - Chrome style */}
      {windows.yolo?.open && !windows.yolo.minimized && (
        <div
          className={`chrome-window${windows.yolo.maximized ? ' maximized' : ''}`}
          style={getWindowStyle('yolo')}
          onMouseDown={() => focusWindow('yolo')}
        >
          <div
            className="chrome-tabbar"
            onMouseDown={(e) => handleWindowHeaderMouseDown(e, 'yolo')}
            onDoubleClick={() => handleHeaderDoubleClick('yolo')}
          >
            <div className="chrome-tabs">
              <div className="chrome-tab active">
                <span className="chrome-tab-favicon">
                  <img src="/ai.svg" alt="" />
                </span>
                <span className="chrome-tab-title">YOLO AI</span>
                <button
                  className="chrome-tab-close window-controls"
                  onClick={() => closeWindow('yolo')}
                  title="탭 닫기"
                >
                  ✕
                </button>
              </div>
              <button className="chrome-newtab window-controls" title="새 탭">+</button>
            </div>
            <div className="chrome-winctl window-controls">
              <button className="chrome-winbtn" title="최소화" onClick={() => minimizeWindow('yolo')}>─</button>
              <button className="chrome-winbtn" title={windows.yolo.maximized ? '복원' : '최대화'} onClick={() => toggleMaximize('yolo')}>
                {windows.yolo.maximized ? '❐' : '▢'}
              </button>
              <button
                className="chrome-winbtn chrome-close"
                onClick={() => closeWindow('yolo')}
                title="닫기"
              >
                ✕
              </button>
            </div>
          </div>
          <div className="chrome-toolbar">
            <button className="chrome-toolbtn" title="뒤로">←</button>
            <button className="chrome-toolbtn" title="앞으로">→</button>
            <button className="chrome-toolbtn" title="새로고침" onClick={() => reloadWindow('yolo')}>↻</button>
            <div className="chrome-omnibox">
              <span className="chrome-omnibox-icon">🔒</span>
              <span className="chrome-omnibox-url">ai.yangtae.site</span>
            </div>
            <button className="chrome-toolbtn" title="북마크">☆</button>
            <button className="chrome-toolbtn" title="확장 프로그램">🧩</button>
            <button className="chrome-toolbtn" title="더보기">⋮</button>
          </div>
          <div className="chrome-content">
            <YoloContent key={reloadCount['yolo'] ?? 0} />
          </div>
        </div>
      )}

      {/* Real Estate Window - Chrome style */}
      {windows.realestate?.open && !windows.realestate.minimized && (
        <div
          className={`chrome-window${windows.realestate.maximized ? ' maximized' : ''}`}
          style={getWindowStyle('realestate')}
          onMouseDown={() => focusWindow('realestate')}
        >
          <div
            className="chrome-tabbar"
            onMouseDown={(e) => handleWindowHeaderMouseDown(e, 'realestate')}
            onDoubleClick={() => handleHeaderDoubleClick('realestate')}
          >
            <div className="chrome-tabs">
              <div className="chrome-tab active">
                <span className="chrome-tab-favicon">
                  <img src="/logo.png" alt="" />
                </span>
                <span className="chrome-tab-title">부동산 API</span>
                <button
                  className="chrome-tab-close window-controls"
                  onClick={() => closeWindow('realestate')}
                  title="탭 닫기"
                >
                  ✕
                </button>
              </div>
              <button className="chrome-newtab window-controls" title="새 탭">+</button>
            </div>
            <div className="chrome-winctl window-controls">
              <button className="chrome-winbtn" title="최소화" onClick={() => minimizeWindow('realestate')}>─</button>
              <button className="chrome-winbtn" title={windows.realestate.maximized ? '복원' : '최대화'} onClick={() => toggleMaximize('realestate')}>
                {windows.realestate.maximized ? '❐' : '▢'}
              </button>
              <button
                className="chrome-winbtn chrome-close"
                onClick={() => closeWindow('realestate')}
                title="닫기"
              >
                ✕
              </button>
            </div>
          </div>
          <div className="chrome-toolbar">
            <button className="chrome-toolbtn" title="뒤로">←</button>
            <button className="chrome-toolbtn" title="앞으로">→</button>
            <button className="chrome-toolbtn" title="새로고침" onClick={() => reloadWindow('realestate')}>↻</button>
            <div className="chrome-omnibox">
              <span className="chrome-omnibox-icon">🔒</span>
              <span className="chrome-omnibox-url">yangti.shop</span>
            </div>
            <button className="chrome-toolbtn" title="북마크">☆</button>
            <button className="chrome-toolbtn" title="확장 프로그램">🧩</button>
            <button className="chrome-toolbtn" title="더보기">⋮</button>
          </div>
          <div className="chrome-content">
            <RealEstateContent key={reloadCount['realestate'] ?? 0} />
          </div>
        </div>
      )}

      {/* Consulting Window - Chrome style */}
      {windows.consulting?.open && !windows.consulting.minimized && (
        <div
          className={`chrome-window${windows.consulting.maximized ? ' maximized' : ''}`}
          style={getWindowStyle('consulting')}
          onMouseDown={() => focusWindow('consulting')}
        >
          <div
            className="chrome-tabbar"
            onMouseDown={(e) => handleWindowHeaderMouseDown(e, 'consulting')}
            onDoubleClick={() => handleHeaderDoubleClick('consulting')}
          >
            <div className="chrome-tabs">
              <div className="chrome-tab active">
                <span className="chrome-tab-favicon">
                  <img src="/logo1.png" alt="" />
                </span>
                <span className="chrome-tab-title">컨설팅</span>
                <button
                  className="chrome-tab-close window-controls"
                  onClick={() => closeWindow('consulting')}
                  title="탭 닫기"
                >
                  ✕
                </button>
              </div>
              <button className="chrome-newtab window-controls" title="새 탭">+</button>
            </div>
            <div className="chrome-winctl window-controls">
              <button className="chrome-winbtn" title="최소화" onClick={() => minimizeWindow('consulting')}>─</button>
              <button className="chrome-winbtn" title={windows.consulting.maximized ? '복원' : '최대화'} onClick={() => toggleMaximize('consulting')}>
                {windows.consulting.maximized ? '❐' : '▢'}
              </button>
              <button
                className="chrome-winbtn chrome-close"
                onClick={() => closeWindow('consulting')}
                title="닫기"
              >
                ✕
              </button>
            </div>
          </div>
          <div className="chrome-toolbar">
            <button className="chrome-toolbtn" title="뒤로">←</button>
            <button className="chrome-toolbtn" title="앞으로">→</button>
            <button className="chrome-toolbtn" title="새로고침" onClick={() => reloadWindow('consulting')}>↻</button>
            <div className="chrome-omnibox">
              <span className="chrome-omnibox-icon">🔒</span>
              <span className="chrome-omnibox-url">yangti.shop/consulting</span>
            </div>
            <button className="chrome-toolbtn" title="북마크">☆</button>
            <button className="chrome-toolbtn" title="확장 프로그램">🧩</button>
            <button className="chrome-toolbtn" title="더보기">⋮</button>
          </div>
          <div className="chrome-content">
            <ConsultingContent key={reloadCount['consulting'] ?? 0} />
          </div>
        </div>
      )}

      {/* Game Window */}
      {windows.game?.open && !windows.game.minimized && (
        <div
          className={`window game-window${windows.game.maximized ? ' maximized' : ''}`}
          style={getWindowStyle('game')}
          onMouseDown={() => focusWindow('game')}
        >
          <div
            className="window-header"
            onMouseDown={(e) => handleWindowHeaderMouseDown(e, 'game')}
            onDoubleClick={() => handleHeaderDoubleClick('game')}
          >
            <span className="window-title">🎮 슈퍼 점프 게임</span>
            <div className="window-controls">
              <button className="window-btn" onClick={() => minimizeWindow('game')}>_</button>
              <button className="window-btn" onClick={() => toggleMaximize('game')}>{windows.game.maximized ? '❐' : '□'}</button>
              <button className="window-btn window-close" onClick={() => closeWindow('game')}>✕</button>
            </div>
          </div>
          <div className="window-content">
            <div
              className="game-area"
              ref={gameAreaRef}
              tabIndex={0}
              onKeyDown={handleGameKeyDown}
              onKeyUp={handleGameKeyUp}
              onMouseDown={() => gameAreaRef.current?.focus()}
            >
              {/* HUD */}
              <div className="game-hud">
                <span>🪙 {g.score}</span>
                <span>{'❤️'.repeat(Math.max(0, g.lives))}</span>
              </div>

              {/* World */}
              <div
                className="game-world"
                style={{ width: `${WORLD_W}px`, transform: `translateX(${-g.cameraX}px)` }}
              >
                {/* 구름 */}
                {DECOR_CLOUDS.map((c, i) => (
                  <div key={`cloud-${i}`} className="game-cloud" style={{ left: `${c.x}px`, top: `${c.top}px` }} />
                ))}

                {/* 덤불 */}
                {DECOR_BUSHES.map((b, i) => (
                  <div key={`bush-${i}`} className="game-bush" style={{ left: `${b.x}px` }} />
                ))}

                {/* 블록 / 땅 / 파이프 */}
                {g.solids.map((s) => (
                  <div
                    key={s.id}
                    className={
                      s.type === 'ground' ? 'game-ground'
                      : s.type === 'pipe' ? 'game-pipe'
                      : s.type === 'question' ? `game-question${s.used ? ' used' : ''}`
                      : 'game-brick'
                    }
                    style={{ left: `${s.x}px`, bottom: `${s.y}px`, width: `${s.w}px`, height: `${s.h}px` }}
                  >
                    {s.type === 'question' && !s.used ? '?' : ''}
                  </div>
                ))}

                {/* 코인 */}
                {g.coins.filter((c) => !c.got).map((c) => (
                  <div
                    key={c.id}
                    className="game-coin"
                    style={{ left: `${c.x}px`, bottom: `${c.y}px`, width: `${c.w}px`, height: `${c.h}px` }}
                  />
                ))}

                {/* 굼바 */}
                {g.goombas.filter((gb) => !gb.dead).map((gb) => (
                  <div
                    key={gb.id}
                    className="game-goomba"
                    style={{ left: `${gb.x}px`, bottom: `${gb.y}px`, width: `${gb.w}px`, height: `${gb.h}px` }}
                  >
                    <span className="g-eye" />
                    <span className="g-eye" />
                  </div>
                ))}

                {/* 깃발 */}
                <div className="game-flagpole" style={{ left: `${FLAG_X}px` }}>
                  <div className="game-flag" />
                </div>
                <div className="game-castle" style={{ left: `${FLAG_X + 90}px` }}>🏰</div>

                {/* 플레이어 */}
                <div
                  className="game-player"
                  style={{ left: `${g.px}px`, bottom: `${g.py}px`, transform: `scaleX(${g.facing})` }}
                >
                  <div className="mario-hat" />
                  <div className="mario-face">
                    <span className="m-eye" />
                  </div>
                  <div className="mario-body" />
                </div>
              </div>

              {/* 조작 안내 */}
              <div className="game-controls">← → 이동 · Space 점프 · 굼바를 밟으세요!</div>

              {/* 결과 */}
              {g.status !== 'playing' && (
                <div className="game-result-overlay">
                  <div className="game-result">
                    <div className="game-result-emoji">{g.status === 'win' ? '🏁' : '💀'}</div>
                    <h2>{g.status === 'win' ? '클리어!' : '게임 오버'}</h2>
                    <p>최종 점수: <strong>{g.score}</strong></p>
                    <button onClick={restartGame}>다시 시작</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Selection Box */}
      {selectionBox && (
        <div
          className="selection-box"
          style={{
            left: `${Math.min(selectionBox.startX, selectionBox.endX)}px`,
            top: `${Math.min(selectionBox.startY, selectionBox.endY)}px`,
            width: `${Math.abs(selectionBox.endX - selectionBox.startX)}px`,
            height: `${Math.abs(selectionBox.endY - selectionBox.startY)}px`,
          }}
        />
      )}
    </main>
  );
}

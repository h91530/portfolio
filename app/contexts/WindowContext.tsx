'use client';

import React, { createContext, useCallback, useContext, useState } from 'react';

export type WindowMeta = {
  id: string;
  title: string;
  icon: string;
  open: boolean;
  minimized: boolean;
  maximized: boolean;
  zIndex: number;
};

type WindowsState = Record<string, WindowMeta>;

interface WindowContextType {
  windows: WindowsState;
  activeId: string | null;
  openWindow: (meta: { id: string; title: string; icon: string; maximized?: boolean }) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  toggleMaximize: (id: string) => void;
  focusWindow: (id: string) => void;
  taskbarClick: (id: string) => void;
}

const WindowContext = createContext<WindowContextType | null>(null);

let zCounter = 100;

export function WindowProvider({ children }: { children: React.ReactNode }) {
  const [windows, setWindows] = useState<WindowsState>({});
  const [activeId, setActiveId] = useState<string | null>(null);

  const bumpZ = () => ++zCounter;

  const openWindow = useCallback((meta: { id: string; title: string; icon: string; maximized?: boolean }) => {
    setWindows((prev) => {
      const existing = prev[meta.id];
      if (existing) {
        return {
          ...prev,
          [meta.id]: { ...existing, open: true, minimized: false, zIndex: bumpZ() },
        };
      }
      return {
        ...prev,
        [meta.id]: {
          id: meta.id,
          title: meta.title,
          icon: meta.icon,
          open: true,
          minimized: false,
          maximized: meta.maximized ?? false,
          zIndex: bumpZ(),
        },
      };
    });
    setActiveId(meta.id);
  }, []);

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
    setActiveId((cur) => (cur === id ? null : cur));
  }, []);

  const minimizeWindow = useCallback((id: string) => {
    setWindows((prev) => {
      const w = prev[id];
      if (!w) return prev;
      return { ...prev, [id]: { ...w, minimized: true } };
    });
    setActiveId((cur) => (cur === id ? null : cur));
  }, []);

  const toggleMaximize = useCallback((id: string) => {
    setWindows((prev) => {
      const w = prev[id];
      if (!w) return prev;
      return { ...prev, [id]: { ...w, maximized: !w.maximized, minimized: false, zIndex: bumpZ() } };
    });
    setActiveId(id);
  }, []);

  const focusWindow = useCallback((id: string) => {
    setWindows((prev) => {
      const w = prev[id];
      if (!w) return prev;
      return { ...prev, [id]: { ...w, minimized: false, zIndex: bumpZ() } };
    });
    setActiveId(id);
  }, []);

  const taskbarClick = useCallback((id: string) => {
    setWindows((prev) => {
      const w = prev[id];
      if (!w) return prev;
      if (!w.minimized && activeId === id) {
        setActiveId(null);
        return { ...prev, [id]: { ...w, minimized: true } };
      }
      return { ...prev, [id]: { ...w, minimized: false, zIndex: bumpZ() } };
    });
    setActiveId((cur) => {
      const w = windows[id];
      if (!w) return cur;
      if (!w.minimized && cur === id) return null;
      return id;
    });
  }, [activeId, windows]);

  return (
    <WindowContext.Provider
      value={{
        windows,
        activeId,
        openWindow,
        closeWindow,
        minimizeWindow,
        toggleMaximize,
        focusWindow,
        taskbarClick,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
}

export function useWindows() {
  const ctx = useContext(WindowContext);
  if (!ctx) throw new Error('useWindows must be used within WindowProvider');
  return ctx;
}

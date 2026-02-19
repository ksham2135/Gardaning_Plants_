import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type SunlightMode = 'morning' | 'noon' | 'night';

interface SunlightContextType {
  mode: SunlightMode;
  setMode: (mode: SunlightMode) => void;
}

const SunlightContext = createContext<SunlightContextType>({
  mode: 'morning',
  setMode: () => {},
});

export const useSunlight = () => useContext(SunlightContext);

export const SunlightProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<SunlightMode>(() => {
    return (localStorage.getItem('sunlight-mode') as SunlightMode) || 'morning';
  });

  useEffect(() => {
    localStorage.setItem('sunlight-mode', mode);
    const html = document.documentElement;
    html.classList.remove('sunlight-noon', 'sunlight-night');
    if (mode === 'noon') html.classList.add('sunlight-noon');
    if (mode === 'night') html.classList.add('sunlight-night');
  }, [mode]);

  return (
    <SunlightContext.Provider value={{ mode, setMode }}>
      {children}
    </SunlightContext.Provider>
  );
};

import { useState, useEffect } from 'react';

interface WaterLog {
  [plantId: string]: string;
}

export const useWaterReminder = () => {
  const [waterLog, setWaterLog] = useState<WaterLog>(() => {
    const stored = localStorage.getItem('water-log');
    return stored ? JSON.parse(stored) : {};
  });

  useEffect(() => {
    localStorage.setItem('water-log', JSON.stringify(waterLog));
  }, [waterLog]);

  const waterPlant = (plantId: string) => {
    setWaterLog(prev => ({ ...prev, [plantId]: new Date().toISOString() }));
  };

  const getWaterStatus = (plantId: string, waterDays: number) => {
    const lastWatered = waterLog[plantId];
    if (!lastWatered) return { status: 'water-today' as const, message: 'Water Today', daysUntil: 0 };

    const last = new Date(lastWatered);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - last.getTime()) / (1000 * 60 * 60 * 24));
    const daysUntil = waterDays - diffDays;

    if (daysUntil <= 0) return { status: 'water-today' as const, message: 'Water Today', daysUntil: 0 };
    if (diffDays <= 1) return { status: 'recently-watered' as const, message: 'Recently Watered', daysUntil };
    if (daysUntil <= 1) return { status: 'water-soon' as const, message: 'Water Tomorrow', daysUntil: 1 };
    return { status: 'ok' as const, message: `Water in ${daysUntil} days`, daysUntil };
  };

  return { waterPlant, getWaterStatus, waterLog };
};

import { Sun, CloudSun, Moon } from 'lucide-react';
import { useSunlight } from '@/context/SunlightContext';

const modes = [
  { key: 'morning' as const, icon: CloudSun, label: 'Morning' },
  { key: 'noon' as const, icon: Sun, label: 'Noon' },
  { key: 'night' as const, icon: Moon, label: 'Night' },
];

const SunlightToggle = () => {
  const { mode, setMode } = useSunlight();

  return (
    <div className="flex items-center bg-muted rounded-full p-1 gap-0.5">
      {modes.map(({ key, icon: Icon, label }) => (
        <button
          key={key}
          onClick={() => setMode(key)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
            mode === key
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
          title={label}
        >
          <Icon className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default SunlightToggle;

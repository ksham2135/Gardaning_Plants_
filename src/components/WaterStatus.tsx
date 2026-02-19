import { Droplets, Check, AlertCircle } from 'lucide-react';

interface WaterStatusProps {
  status: 'water-today' | 'water-soon' | 'recently-watered' | 'ok';
  message: string;
  onWater?: () => void;
}

const statusConfig = {
  'water-today': { icon: AlertCircle, className: 'bg-hard/10 text-hard border-hard/20' },
  'water-soon': { icon: Droplets, className: 'bg-medium/10 text-medium border-medium/20' },
  'recently-watered': { icon: Check, className: 'bg-easy/10 text-easy border-easy/20' },
  ok: { icon: Droplets, className: 'bg-primary/10 text-primary border-primary/20' },
};

const WaterStatus = ({ status, message, onWater }: WaterStatusProps) => {
  const { icon: Icon, className } = statusConfig[status];

  return (
    <div className={`flex items-center justify-between px-4 py-3 rounded-xl border ${className}`}>
      <div className="flex items-center gap-2">
        <Icon className="w-5 h-5" />
        <span className="text-sm font-medium">{message}</span>
      </div>
      {onWater && (
        <button
          onClick={onWater}
          className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Water Now
        </button>
      )}
    </div>
  );
};

export default WaterStatus;

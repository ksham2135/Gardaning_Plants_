import { useEffect, useState } from 'react';

interface DifficultyBarProps {
  difficulty: 'easy' | 'medium' | 'hard';
  showLabel?: boolean;
}

const config = {
  easy: { width: '33%', label: 'Easy', colorClass: 'bg-easy' },
  medium: { width: '66%', label: 'Medium', colorClass: 'bg-medium' },
  hard: { width: '100%', label: 'Hard', colorClass: 'bg-hard' },
};

const DifficultyBar = ({ difficulty, showLabel = true }: DifficultyBarProps) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const { width, label, colorClass } = config[difficulty];

  return (
    <div>
      {showLabel && (
        <div className="flex justify-between text-sm mb-1.5">
          <span className="text-muted-foreground">Care Difficulty</span>
          <span className="font-medium">{label}</span>
        </div>
      )}
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <div
          className={`h-full rounded-full ${colorClass} transition-all duration-1000 ease-out`}
          style={{ width: animated ? width : '0%' }}
        />
      </div>
    </div>
  );
};

export default DifficultyBar;

import { Link } from 'react-router-dom';
import { Heart, Sun, CloudSun, Cloud, Droplets } from 'lucide-react';
import { useState } from 'react';
import type { Plant } from '@/data/plants';

interface PlantCardProps {
  plant: Plant;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

const lightIcons: Record<Plant['light'], typeof Sun> = {
  low: Cloud,
  medium: CloudSun,
  'bright-indirect': Sun,
  'bright-direct': Sun,
};

const difficultyColors: Record<Plant['difficulty'], string> = {
  easy: 'bg-easy/15 text-easy',
  medium: 'bg-medium/15 text-medium',
  hard: 'bg-hard/15 text-hard',
};

const PlantCard = ({ plant, isFavorite, onToggleFavorite }: PlantCardProps) => {
  const [heartAnimating, setHeartAnimating] = useState(false);
  const LightIcon = lightIcons[plant.light];

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setHeartAnimating(true);
    onToggleFavorite(plant.id);
    setTimeout(() => setHeartAnimating(false), 400);
  };

  return (
    <Link to={`/plant/${plant.id}`} className="block">
      <div
        className="card-hover rounded-2xl bg-card border border-border overflow-hidden"
        style={{ boxShadow: 'var(--plant-shadow)' }}
      >
        <div className="relative aspect-square overflow-hidden">
          <img src={plant.image} alt={plant.name} className="plant-image w-full h-full object-cover" />
          <button
            onClick={handleFavorite}
            className="absolute top-3 right-3 p-2 rounded-full bg-card/70 backdrop-blur-sm transition-transform"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${heartAnimating ? 'heart-pop' : ''} ${
                isFavorite ? 'fill-heart text-heart' : 'text-muted-foreground'
              }`}
            />
          </button>
        </div>

        <div className="p-4 space-y-3">
          <h3 className="font-display text-lg font-semibold leading-tight">{plant.name}</h3>

          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <LightIcon className="w-4 h-4" />
              {plant.lightLabel}
            </span>
            <span className="flex items-center gap-1">
              <Droplets className="w-4 h-4" />
              {plant.waterDays}d
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${difficultyColors[plant.difficulty]}`}>
              {plant.difficulty.charAt(0).toUpperCase() + plant.difficulty.slice(1)}
            </span>
            <span className="text-xs font-medium text-primary">View Details →</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlantCard;

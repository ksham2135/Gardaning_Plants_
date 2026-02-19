import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Sun, CloudSun, Cloud, Droplets, Thermometer, Leaf, PawPrint, Heart } from 'lucide-react';
import { useState } from 'react';
import { plants, Plant } from '@/data/plants';
import { useFavorites } from '@/hooks/useFavorites';
import { useWaterReminder } from '@/hooks/useWaterReminder';
import AppNavbar from '@/components/AppNavbar';
import DifficultyBar from '@/components/DifficultyBar';
import WaterStatus from '@/components/WaterStatus';
import PlacementCard from '@/components/PlacementCard';

const lightIcons: Record<Plant['light'], typeof Sun> = {
  low: Cloud,
  medium: CloudSun,
  'bright-indirect': Sun,
  'bright-direct': Sun,
};

const PlantDetails = () => {
  const { id } = useParams();
  const plant = plants.find(p => p.id === id);
  const { isFavorite, toggleFavorite } = useFavorites();
  const { waterPlant, getWaterStatus } = useWaterReminder();
  const [heartAnimating, setHeartAnimating] = useState(false);

  if (!plant) {
    return (
      <div className="min-h-screen">
        <AppNavbar />
        <div className="flex items-center justify-center h-[60vh]">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Plant not found</h2>
            <Link to="/" className="text-primary hover:underline">Go back home</Link>
          </div>
        </div>
      </div>
    );
  }

  const LightIcon = lightIcons[plant.light];
  const waterStatus = getWaterStatus(plant.id, plant.waterDays);

  const handleFavorite = () => {
    setHeartAnimating(true);
    toggleFavorite(plant.id);
    setTimeout(() => setHeartAnimating(false), 400);
  };

  return (
    <div className="min-h-screen">
      <AppNavbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 page-fade-in">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to plants
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden aspect-square" style={{ boxShadow: 'var(--plant-shadow)' }}>
            <img src={plant.image} alt={plant.name} className="plant-image w-full h-full object-cover" />
          </div>

          {/* Info Panel */}
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">{plant.name}</h1>
                {plant.petFriendly && (
                  <span className="inline-flex items-center gap-1 text-xs text-easy bg-easy/10 px-2 py-1 rounded-full">
                    <PawPrint className="w-3 h-3" /> Pet Friendly
                  </span>
                )}
              </div>
              <button onClick={handleFavorite} className="p-2">
                <Heart
                  className={`w-6 h-6 transition-colors ${heartAnimating ? 'heart-pop' : ''} ${
                    isFavorite(plant.id) ? 'fill-heart text-heart' : 'text-muted-foreground'
                  }`}
                />
              </button>
            </div>

            <WaterStatus status={waterStatus.status} message={waterStatus.message} onWater={() => waterPlant(plant.id)} />

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: LightIcon, label: 'Light', value: plant.lightLabel },
                { icon: Droplets, label: 'Water', value: plant.waterFrequency },
                { icon: Leaf, label: 'Soil', value: plant.soilType },
                { icon: Thermometer, label: 'Temperature', value: plant.temperature },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Icon className="w-4 h-4" />
                    <span className="text-xs">{label}</span>
                  </div>
                  <p className="font-medium text-sm">{value}</p>
                </div>
              ))}
            </div>

            <DifficultyBar difficulty={plant.difficulty} />

            <PlacementCard window={plant.placement.window} avoidDirectSunlight={plant.placement.avoidDirectSunlight} />

            <div className="rounded-xl bg-primary/5 border border-primary/10 p-4">
              <h4 className="font-medium text-sm mb-1 text-primary">🌱 Fun Fact</h4>
              <p className="text-sm text-muted-foreground">{plant.funFact}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PlantDetails;

import { useState, useMemo } from 'react';
import { useSunlight } from '@/context/SunlightContext';
import { plants } from '@/data/plants';
import { useFavorites } from '@/hooks/useFavorites';
import AppNavbar from '@/components/AppNavbar';
import SearchBar from '@/components/SearchBar';
import PlantCard from '@/components/PlantCard';

const greetings = {
  morning: { text: 'Good Morning, Plant Parent', emoji: '🌤' },
  noon: { text: 'Plants Are Thriving', emoji: '☀️' },
  night: { text: 'Rest & Grow', emoji: '🌙' },
};

const Index = () => {
  const { mode } = useSunlight();
  const [search, setSearch] = useState('');
  const { toggleFavorite, isFavorite } = useFavorites();
  const greeting = greetings[mode];

  const filtered = useMemo(
    () => plants.filter(p => p.name.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  return (
    <div className="min-h-screen">
      <AppNavbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 page-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">
            {greeting.text} {greeting.emoji}
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Your living plant encyclopedia for urban gardening
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <SearchBar value={search} onChange={setSearch} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(plant => (
            <PlantCard
              key={plant.id}
              plant={plant}
              isFavorite={isFavorite(plant.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg">No plants found matching &ldquo;{search}&rdquo;</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;

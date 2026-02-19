import { plants } from '@/data/plants';
import { useFavorites } from '@/hooks/useFavorites';
import AppNavbar from '@/components/AppNavbar';
import PlantCard from '@/components/PlantCard';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const favoritePlants = plants.filter(p => favorites.includes(p.id));

  return (
    <div className="min-h-screen">
      <AppNavbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 page-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">Your Favorites ❤️</h1>
          <p className="text-muted-foreground text-lg">Plants you love, all in one place</p>
        </div>

        {favoritePlants.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoritePlants.map(plant => (
              <PlantCard
                key={plant.id}
                plant={plant}
                isFavorite={isFavorite(plant.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Heart className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-muted-foreground">No favorites yet</h2>
            <p className="text-muted-foreground mb-6">Start adding plants to your collection</p>
            <Link
              to="/"
              className="inline-flex px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Browse Plants
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default Favorites;

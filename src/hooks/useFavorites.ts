import { useState, useEffect } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const stored = localStorage.getItem('plant-favorites');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('plant-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (plantId: string) => {
    setFavorites(prev =>
      prev.includes(plantId)
        ? prev.filter(id => id !== plantId)
        : [...prev, plantId]
    );
  };

  const isFavorite = (plantId: string) => favorites.includes(plantId);

  return { favorites, toggleFavorite, isFavorite };
};

import monstera from '@/assets/plants/monstera.jpg';
import snakePlant from '@/assets/plants/snake-plant.jpg';
import fiddleLeafFig from '@/assets/plants/fiddle-leaf-fig.jpg';
import pothos from '@/assets/plants/pothos.jpg';
import peaceLily from '@/assets/plants/peace-lily.jpg';
import zzPlant from '@/assets/plants/zz-plant.jpg';
import rubberPlant from '@/assets/plants/rubber-plant.jpg';
import stringOfPearls from '@/assets/plants/string-of-pearls.jpg';

export interface Plant {
  id: string;
  name: string;
  image: string;
  light: 'low' | 'medium' | 'bright-indirect' | 'bright-direct';
  lightLabel: string;
  waterDays: number;
  waterFrequency: string;
  soilType: string;
  temperature: string;
  difficulty: 'easy' | 'medium' | 'hard';
  petFriendly: boolean;
  placement: {
    window: string;
    avoidDirectSunlight: boolean;
  };
  funFact: string;
}

export const plants: Plant[] = [
  {
    id: 'monstera',
    name: 'Monstera Deliciosa',
    image: monstera,
    light: 'bright-indirect',
    lightLabel: 'Bright Indirect',
    waterDays: 9,
    waterFrequency: 'Every 7–10 days',
    soilType: 'Well-draining potting mix',
    temperature: '18–30°C',
    difficulty: 'easy',
    petFriendly: false,
    placement: { window: 'East or West', avoidDirectSunlight: true },
    funFact: 'In the wild, Monstera can grow up to 20 meters tall and produces edible fruit!',
  },
  {
    id: 'snake-plant',
    name: 'Snake Plant',
    image: snakePlant,
    light: 'low',
    lightLabel: 'Low to Bright',
    waterDays: 14,
    waterFrequency: 'Every 2–3 weeks',
    soilType: 'Sandy, well-draining',
    temperature: '15–27°C',
    difficulty: 'easy',
    petFriendly: false,
    placement: { window: 'Any', avoidDirectSunlight: false },
    funFact: 'NASA found snake plants are one of the best air-purifying houseplants.',
  },
  {
    id: 'fiddle-leaf-fig',
    name: 'Fiddle Leaf Fig',
    image: fiddleLeafFig,
    light: 'bright-indirect',
    lightLabel: 'Bright Indirect',
    waterDays: 10,
    waterFrequency: 'Every 7–14 days',
    soilType: 'Rich, well-draining',
    temperature: '16–24°C',
    difficulty: 'hard',
    petFriendly: false,
    placement: { window: 'South or East', avoidDirectSunlight: true },
    funFact: 'Fiddle Leaf Figs can grow up to 15 meters tall in their native West African habitat.',
  },
  {
    id: 'pothos',
    name: 'Golden Pothos',
    image: pothos,
    light: 'low',
    lightLabel: 'Low to Medium',
    waterDays: 10,
    waterFrequency: 'Every 7–14 days',
    soilType: 'Standard potting mix',
    temperature: '18–30°C',
    difficulty: 'easy',
    petFriendly: false,
    placement: { window: 'North or East', avoidDirectSunlight: true },
    funFact: 'Pothos is nicknamed "Devil\'s Ivy" because it\'s nearly impossible to kill.',
  },
  {
    id: 'peace-lily',
    name: 'Peace Lily',
    image: peaceLily,
    light: 'low',
    lightLabel: 'Low to Medium',
    waterDays: 7,
    waterFrequency: 'Every 5–7 days',
    soilType: 'Peat-based, moist',
    temperature: '18–26°C',
    difficulty: 'medium',
    petFriendly: false,
    placement: { window: 'North or East', avoidDirectSunlight: true },
    funFact: 'Peace Lilies can "tell" you when they need water — their leaves droop dramatically.',
  },
  {
    id: 'zz-plant',
    name: 'ZZ Plant',
    image: zzPlant,
    light: 'low',
    lightLabel: 'Low Light',
    waterDays: 21,
    waterFrequency: 'Every 2–3 weeks',
    soilType: 'Well-draining, sandy',
    temperature: '15–26°C',
    difficulty: 'easy',
    petFriendly: false,
    placement: { window: 'Any', avoidDirectSunlight: false },
    funFact: 'ZZ Plants store water in their thick rhizomes, making them drought champions.',
  },
  {
    id: 'rubber-plant',
    name: 'Rubber Plant',
    image: rubberPlant,
    light: 'medium',
    lightLabel: 'Medium Indirect',
    waterDays: 10,
    waterFrequency: 'Every 7–14 days',
    soilType: 'Well-draining potting mix',
    temperature: '16–27°C',
    difficulty: 'medium',
    petFriendly: false,
    placement: { window: 'East or West', avoidDirectSunlight: true },
    funFact: 'Rubber plants were once used to make natural rubber from their milky latex sap.',
  },
  {
    id: 'string-of-pearls',
    name: 'String of Pearls',
    image: stringOfPearls,
    light: 'bright-indirect',
    lightLabel: 'Bright Indirect',
    waterDays: 14,
    waterFrequency: 'Every 1–2 weeks',
    soilType: 'Cactus/succulent mix',
    temperature: '18–27°C',
    difficulty: 'hard',
    petFriendly: false,
    placement: { window: 'South or West', avoidDirectSunlight: true },
    funFact: 'Each "pearl" is a modified leaf designed to store water in arid conditions.',
  },
];

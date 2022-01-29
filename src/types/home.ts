export type HomePhoto = {
  listOrder: number;
  url: string;
};

export type PriceRange = {
  minPrice: number;
  maxPrice: number;
};

export type HomeSeasonPricing = {
  highSeason: PriceRange;
  lowSeason: PriceRange;
};

export type Home = {
  id: string;
  title: string;
  description: string;
  photos: HomePhoto[];
  roomsCount: number;
  bathroomsCount: number;
  bedsCount: number;
  maxOccupancy: number;
  hasPool: boolean;
  amenities: string[];
  seasonPricing: HomeSeasonPricing;
  regionName: string;
  cityName: string;
  stateName: string;
  stateCode: string;
};

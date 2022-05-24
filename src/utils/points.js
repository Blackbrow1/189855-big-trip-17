import { getRandomArrayValue } from './utils';

export const getIdListFromOffers = (offers, count) => {
  if (offers.length < count) {
    throw new Error('Количество элементов в массиве меньше количества элементов в выборке');
  }

  const chosenIds = new Set();
  while (chosenIds.size < count) {
    chosenIds.add(getRandomArrayValue(offers).id);
  }

  return Array.from(chosenIds);
};

export const getPointOffers = (offers, set) => offers.filter((offer) => set.includes(offer.id));

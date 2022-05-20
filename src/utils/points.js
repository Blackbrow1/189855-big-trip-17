import { getRandomArrayValue } from './utils.js';

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

export const getPointOffers = (offers, set) => {
  return offer.filter((offer) => set.includes(offer.id));
};

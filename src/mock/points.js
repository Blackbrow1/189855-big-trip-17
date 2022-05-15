import {getRandomInteger, getRandomArrayValue} from '../utils.js';

const CITIES = ['Amsterdam', 'London', 'Paris', 'New York', 'Osaka', 'Moscow', 'Saint-Petersburg', 'Madrid'];
const OFFER_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const MIN_PRICE = 10;
const MAX_PRICE = 120;

const generateCiti = () => getRandomArrayValue(CITIES);

const generateDestination = () => ({
  description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
  name: generateCiti(),
  pictures: [
    {
      src: 'http://picsum.photos/300/200?r=0.0762563005163317',
      description: 'Chamonix parliament building'
    }
  ]
});

const generateOfferType = () => getRandomArrayValue(OFFER_TYPES);

const generateOffers = () => {
  const totalOffers = [
    {
      id: 1,
      title: 'Upgrade to a business class',
      price: getRandomInteger(MIN_PRICE, MAX_PRICE)
    },

    {
      id: 2,
      title: 'Choose the radio station',
      price: getRandomInteger(MIN_PRICE, MAX_PRICE)
    },

    {
      id: 3,
      title: 'Upgrade to a business class',
      price: getRandomInteger(MIN_PRICE, MAX_PRICE)
    },

    {
      id: 4,
      title: 'Upgrade to a business class',
      price: getRandomInteger(MIN_PRICE, MAX_PRICE)
    },

    {
      id: 5,
      title: 'Upgrade to a business class',
      price: getRandomInteger(MIN_PRICE, MAX_PRICE)
    },

    {
      id: 6,
      title: 'Upgrade to a business class',
      price: getRandomInteger(MIN_PRICE, MAX_PRICE)
    },
  ];

  return getRandomArrayValue(totalOffers);
};

export const generateOfferConstruction = () => ({
  type: generateOfferType(),
  offers: generateOffers()
});

const generatePointType = () => getRandomArrayValue(TYPES);

export const generatePoint = () => ({
  basePrice: getRandomInteger(MIN_PRICE, MAX_PRICE),
  dateFrom: '2019-07-10T22:55:56.845Z',
  dateTo: '2019-07-11T11:22:13.375Z',
  destination: generateDestination(),
  id: '0',
  isFavorite: false,
  offers: Array.from(generateOfferConstruction().offers),
  type: generatePointType()
});


// const generateLocalPoint = () => ({
//   basePrice: 222,
//   dateFrom: '2019-07-10T22:55:56.845Z',
//   dateTo: '2019-07-11T11:22:13.375Z',
//   destination: generateDestination(),
//   isFavorite: false,
//   offers: Array.from(generateOfferConstruction),
//   type: 'taxi'
// });


// const generateAuthorizationError = () => ({
//   error: 401,
//   message: 'Header Authorization is not correct'
// });

// const generateNotFoundError = () => ({
//   error: 404,
//   message: 'Not found'
// });

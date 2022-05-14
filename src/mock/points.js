import {getRandomInteger} from '../utils.js';

const generateCiti = () => {
  const cities = ['Amsterdam', 'London', 'Paris', 'New York', 'Osaka', 'Moscow', 'Saint-Petersburg', 'Madrid'];
  const randomIndex = getRandomInteger(0, cities.length - 1);

  return cities[randomIndex];
};

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

const generateOfferType = () => {
  const offerTypes = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

  const randomIndex = getRandomInteger(0, offerTypes.length - 1);

  return offerTypes[randomIndex];
};

export const generateOfferConstruction = () => ({
  type: generateOfferType(),
  offers: [
    {
      id: 1,
      title: 'Upgrade to a business class',
      price: 120
    },

    {
      id: 2,
      title: 'Choose the radio station',
      price: 60
    },
  ]
});

const generatePointType = () => {
  const pointTypes = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

  const randomIndex = getRandomInteger(0, pointTypes.length - 1);

  return pointTypes[randomIndex];
};

export const generatePoint = () => ({
  basePrice: getRandomInteger(10, 50),
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

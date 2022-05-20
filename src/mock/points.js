import {getRandomInteger, getRandomArrayValue} from '../utils/utils.js';
import { IdGenerator } from './idGenerator.js';
import { StringGenerator } from './stringGenerator.js';
import { getIdListFromOffers } from '../utils/points.js';

const CITIES = ['Amsterdam', 'London', 'Paris', 'New York', 'Osaka', 'Moscow', 'Saint-Petersburg', 'Madrid'];
const OFFER_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const OFFER_TITLES = ['Upgrade to a business class', 'Choose the radio station', 'Upgrade to a business class'];
const TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const MIN_PRICE = 10;
const MAX_PRICE = 120;
const DEFAULT_OFFERS_COUNT = 6;
const POINT_OFFERS_MIN_COUNT = 1;
const POINT_OFFERS_MAX_COUNT = 3;

const generateCiti = () => getRandomArrayValue(CITIES);

const generateDestinationPicture = () => ({
  src: `http://picsum.photos/300/200?r=${Math.random().toString()}`,
  description: 'Chamonix parliament building'
});

const generateDestination = () => ({
  description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
  name: generateCiti(),
  pictures: Array.from({length: 5}, generateDestinationPicture)
});

const offersIdGenerator = new IdGenerator();
const offersTitleGenerator = new StringGenerator(OFFER_TITLES);

export const generateOffer = () => ({
  id: offersIdGenerator.getNext(),
  title: offersTitleGenerator.getNext(),
  price: getRandomInteger(MIN_PRICE, MAX_PRICE)
});

const generateOffers = (length) => Array.from({length}, generateOffer);

export const offers = generateOffers(DEFAULT_OFFERS_COUNT);

const pointIdGenerator = new IdGenerator();

export const generatePoint = () => ({
  id: pointIdGenerator.getNext(),
  basePrice: getRandomInteger(MIN_PRICE, MAX_PRICE),
  dateFrom: '2019-07-10T22:55:56.845Z',
  dateTo: '2019-07-11T11:22:13.375Z',
  destination: generateDestination(),
  isFavorite: false,
  offers: getIdListFromOffers(offers, getRandomInteger(POINT_OFFERS_MIN_COUNT, POINT_OFFERS_MAX_COUNT)),
  type: getRandomArrayValue(TYPES)
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

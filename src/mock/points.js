import {getRandomInteger} from '../utils.js';

// export const generateDestination = () => ({
//   description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
//   name: 'Chamonix',
//   pictures: [
//     {
//       'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
//       'description': 'Chamonix parliament building'
//     }
//   ]
// });

const generateOffer = () => {
  const offerTypes = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

  const randomIndex = getRandomInteger(0, offerTypes.length - 1);

  return offerTypes[randomIndex];
};

export const generateOfferConstruction = () => ({
  type: generateOffer(),
  offers: [
    {
      id: 1,
      title: 'Upgrade to a business class',
      price: 120
    }, {
      id: 2,
      title: 'Choose the radio station',
      price: 60
    }
  ]
});


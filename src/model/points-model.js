import {generateOfferConstruction} from '../mock/points.js';

export default class PointsModel {
  points = Array.from({length: 3}, generateOfferConstruction);

  getPoinst = () => this.points;
}

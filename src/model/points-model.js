import {generateOfferConstruction} from '../mock/task.js';

export default class PointsModel {
  points = Array.from({length: 3}, generateOfferConstruction);

  getPoinst = () => this.points;
}

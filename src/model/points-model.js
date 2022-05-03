import {generatePoints} from '../mock/points.js';

export default class PointsModel {
  points = Array.from({length: 10}, generatePoints);

  getPoints = () => this.points;
}

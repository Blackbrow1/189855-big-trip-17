import {generatePoint} from '../mock/points.js';

export default class PointsModel {
  points = Array.from({length: 10}, generatePoint);

  getPoints = () => this.points;
}

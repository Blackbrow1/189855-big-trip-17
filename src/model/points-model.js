import {generatePoint, offers} from '../mock/points.js';

export default class PointsModel {
  points = Array.from({length: 10}, generatePoint);
  offers = offers;

  getPoints = () => this.points;
  getOffers = () => this.offers;
}

import TripEventsListView from '../view/trip-events-list-view..js';
import TripEventsItemView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view';
import {render} from '../render.js';

export default class BoardPresenter {
  boardComponent = new TripEventsListView();

  init = (boardContainer, pointsModel) => {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
    this.boardPoints = [...this.pointsModel.getPoints()];

    render(this.boardComponent, this.boardContainer);
    render(new PointEditView(), this.boardComponent.getElement());

    for (let i = 0; i < this.boardPoints.length; i++) {
      render(new TripEventsItemView(this.boardPoints[i]), this.boardComponent.getElement());
    }
  };
}

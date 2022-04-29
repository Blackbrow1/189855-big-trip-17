import TripEventsListView from '../view/trip-events-list-view..js';
import TripEventsItemView from '../view/trip-events-item-view.js';
import PointEditView from '../view/point-edit-view';
import {render} from '../render.js';

export default class BoardPresenter {
  boardComponent = new TripEventsListView();
  taskListComponent = new TripEventsItemView();

  init = (boardContainer) => {
    this.boardContainer = boardContainer;

    render(this.boardComponent, this.boardContainer);
    render(new PointEditView(), this.boardComponent.getElement());
    render(new TripEventsListView(), this.boardComponent.getElement());
    // for (let i = 0; i < 3; i++) {
    //   render(new TaskView(), this.taskListComponent.getElement());
    // }

    // render(new LoadMoreButtonView(), this.boardComponent.getElement());
  };
}

import {render, replace} from '../framework/render.js';
import TripEventsListView from '../view/trip-events-list-view.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view';
import NoListView from '../view/list-empty-view.js';
import SortView from '../view/sort-view.js';

export default class BoardPresenter {
  boardComponent = new TripEventsListView();

  init = (boardContainer, pointsModel) => {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
    this.pointsOffers = pointsModel.getOffers();
    this.boardPoints = [...this.pointsModel.getPoints()];

    //render(this.boardComponent, this.boardContainer);
    // render(new PointEditView(this.boardPoints[0], this.pointsOffers), this.boardComponent.getElement());

    // for (let i = 0; i < this.boardPoints.length; i++) {
    //   render(new PointView(this.boardPoints[i], this.pointsOffers), this.boardComponent.getElement());
    // }

    // for (let i = 0; i < this.boardPoints.length; i++) {
    //   this.#renderPoint(this.boardPoints[i], this.pointsOffers);
    // }

    if (this.boardPoints.every((point) => point.isArchive)) {
      render(new NoListView(), this.boardContainer);
    } else {
      render(new SortView(), this.boardContainer);
      render(this.boardComponent, this.boardContainer);

      for (let i = 0; i < this.boardPoints.length; i++) {
        this.#renderPoint(this.boardPoints[i], this.pointsOffers);
      }
    }
  };

  #renderPoint = (point, offers) => {
    const pointComponent = new PointView(point, offers);

    const pointEditComponent = new PointEditView(point, offers);

    const replaceCardToForm = () => {
      replace(pointEditComponent, pointComponent);
    };

    const replaceFormToCard = () => {
      replace(pointComponent, pointEditComponent);
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceFormToCard();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    pointComponent.setEditClickHandler(() => {
      replaceCardToForm();
      document.addEventListener('keydown', onEscKeyDown);
    });

    pointEditComponent.setFormSubmitHandler(() => {
      replaceFormToCard();
      document.removeEventListener('keydown', onEscKeyDown);
    });

    render(pointComponent, this.boardComponent.element);
  };
}

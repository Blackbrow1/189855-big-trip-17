import FilterView from './view/filter-view.js';
import {render} from './render.js';
import BoardPresenter from './presenter/board-presenter.js';
import PointsModel from './model/points-model.js';

const tripMainElement = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');

const pointsModel = new PointsModel();
const boardPresenter = new BoardPresenter();

render(new FilterView(), tripMainElement);

boardPresenter.init(tripEvents, pointsModel);


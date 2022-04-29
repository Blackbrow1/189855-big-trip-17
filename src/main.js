import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import {render} from './render.js';
import BoardPresenter from './presenter/board-presenter.js';

const tripMainElement = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const boardPresenter = new BoardPresenter();

render(new FilterView(), tripMainElement);
render(new SortView(), tripEvents);

boardPresenter.init(tripEvents);


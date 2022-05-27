import {createElement} from '../render.js';

const createListEmptyTemplate = () => (
  `<p class="trip-events__msg">
    Click New Event to create your first point
  </p>`
);

export default class NoListView {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return createListEmptyTemplate();
  }

  getElement() {
    return this.element;
  }

  removeElement() {
    this.#element = null;
  }
}

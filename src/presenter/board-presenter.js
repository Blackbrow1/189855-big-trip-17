import BoardView from '../view/board-view.js';
import TaskListView from '../view/task-list-view.js';
import EditFormView from '../view/edit-form-view';
import {render} from '../render.js';

export default class BoardPresenter {
  boardComponent = new BoardView();
  taskListComponent = new TaskListView();

  init = (boardContainer) => {
    this.boardContainer = boardContainer;

    render(this.boardComponent, this.boardContainer);
    render(new EditFormView(), this.taskListComponent.getElement());
    render(this.taskListComponent, this.boardComponent.getElement());
    // for (let i = 0; i < 3; i++) {
    //   render(new TaskView(), this.taskListComponent.getElement());
    // }

    // render(new LoadMoreButtonView(), this.boardComponent.getElement());
  };
}

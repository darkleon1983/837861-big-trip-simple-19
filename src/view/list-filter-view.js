// import { createElement } from '../render.js';
//Импортируем родительский абстрактный класс, от которого будем наследоваться
import AbstractView from '../framework/view/abstract-view.js';
// Функция для создания шаблона
// Шаблон скопирован из разметки файла list-filter.html, заголовок Filter events
function createListFilterTemplate() {
  return (
    `<form class="trip-filters" action="#" method="get">
      <div class="trip-filters__filter">
        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">
        <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
      </div>
    <div class="trip-filters__filter">
      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
      <label class="trip-filters__filter-label" for="filter-future">Future</label>
    </div>
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`
  );
}

// Экспортируем класс
export default class ListEmptyView extends AbstractView {
  // Возвращаем разметку шаблона
  get template() {
    return createListFilterTemplate();
  }
}

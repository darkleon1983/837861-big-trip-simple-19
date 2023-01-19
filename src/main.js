import TripPresenter from './presenter/trip-presenter.js';
import PointsModel from './model/points-model.js';
// import PointView from './view/trip-point-view.js';
// Контейнер для фильтров
const headerElement = document.querySelector('.trip-controls');
// Контейнер для отрисовки
const tripEventsElement = document.querySelector('.trip-events');
// const tripEventsElementContent = tripEventsElement.querySelector('.trip-events__list');


// Модель
const pointsModel = new PointsModel();
// Новый презентер с параметрами
const tripPresenter = new TripPresenter({
  boardContainer: tripEventsElement,
  filterContainer: headerElement,
  pointsModel
});

// console.log(tripEventsElement.firstElementChild === tripEventsElement.lastElementChild);
tripPresenter.init();

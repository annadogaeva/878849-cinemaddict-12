import {render} from "./utils";

import {createUserRankTemplate} from './view/user-rank.js';
import {createMenuTemplate} from './view/menu.js';
import {createSortingTemplate} from './view/sorting.js';
import {createFilmCardTemplate} from './view/film-card.js';
import {createShowMoreButtonTemplate} from './view/show-more-button.js';
import {createFilmsTemplate} from './view/films.js';
import {createFilmsListTemplate} from './view/films-list.js';
import {createTopRatedFilmsListTemplate} from './view/top-rated-films-list.js';
import {createMostCommentedFilmsListTemplate} from './view/most-commented-films-list.js';
import {createFilmDetailsTemplate} from './view/film-details.js';
import {createCommentSectionTemplate} from './view/comment-section.js';
import {createCommentTemplate} from './view/comment.js';
import {createCommentFormTemplate} from './view/comment-form.js';
import {createEmojiTemplate} from './view/emoji.js';
import {createFooterStatisticsTemplate} from './view/footer-statistics.js';

import {generateFilms} from "./mock/film-card";
import {EMOJI} from "./mock/film-card";
import {getRandomNumber} from "./utils";

import {generateUserRank} from "./mock/user-rank";
import {generateMenu} from "./mock/menu";
import {generateSorting} from "./mock/sorting";

const ALL_FILMS_QUANTITY = 15;
const FILMS_QUANTITY = 5;
const FILMS_EXTRA_QUANTITY = 2;

const siteHeader = document.querySelector(`.header`);
const siteMainArea = document.querySelector(`.main`);
const siteBody = document.body;

render(siteHeader, createUserRankTemplate(generateUserRank()));
render(siteMainArea, createMenuTemplate(generateMenu()), `afterBegin`);
render(siteMainArea, createSortingTemplate(generateSorting()));
render(siteMainArea, createFilmsTemplate());

/* render films */
const films = siteMainArea.querySelector(`.films`);

render(films, createFilmsListTemplate());
const filmsListContainer = films.querySelector(`.films-list__container`);

render(filmsListContainer, createShowMoreButtonTemplate(), `afterEnd`);
const showMoreBtn = document.querySelector(`.films-list__show-more`);

let filmsData = [];
for (let i = 0; i < ALL_FILMS_QUANTITY; i++) { // films data generation
  filmsData.push(generateFilms());
}

let filmsCounter = 0; // init rendered films counter

for (let i = 0; i < FILMS_QUANTITY; i++) {
  if (filmsData[i]) {
    render(filmsListContainer, createFilmCardTemplate(filmsData[i]));

    filmsCounter++;

    if (filmsCounter >= ALL_FILMS_QUANTITY) {
      showMoreBtn.classList.add(`visually-hidden`);
    }
  }
}

// show more button
showMoreBtn.addEventListener(`click`, () => {
  for (let i = 0; i < FILMS_QUANTITY; i++) {
    if (filmsData[filmsCounter]) {
      render(filmsListContainer, createFilmCardTemplate(filmsData[filmsCounter]));
      filmsCounter++;

      if (filmsCounter >= ALL_FILMS_QUANTITY) {
        showMoreBtn.classList.add(`visually-hidden`);
      }
    }
  }
});

/* end render films */

render(films, createTopRatedFilmsListTemplate(`Top rated`));
render(films, createMostCommentedFilmsListTemplate(`Most commented`));

const filmsListExtraContainers = films.querySelectorAll(`.films-list--extra .films-list__container`);

for (let i = 0; i < filmsListExtraContainers.length; i++) {
  for (let j = 0; j < FILMS_EXTRA_QUANTITY; j++) {
    render(filmsListExtraContainers[i], createFilmCardTemplate(filmsData[j]));
  }
}

/* renderPopup */
const filmLinks = films.querySelectorAll(`.film-card__comments`);

for (let filmLink of filmLinks) {
  filmLink.addEventListener(`click`, (e) => {
    e.preventDefault();
    render(siteBody, createFilmDetailsTemplate(filmsData[0]));

    const filmsDetails = document.querySelector(`.film-details`);

    render(filmsDetails, createCommentSectionTemplate(filmsData[0].comments.length));

    const commentsList = filmsDetails.querySelector(`.film-details__comments-list`);
    const filmDetailsBottom = filmsDetails.querySelector(`.form-details__bottom-container`);

    for (let i = 0; i < filmsData[0].comments.length; i++) {
      render(commentsList, createCommentTemplate(filmsData[0].comments[i]));
    }

    render(filmDetailsBottom, createCommentFormTemplate());

    const emojiList = filmsDetails.querySelector(`.film-details__emoji-list`);

    for (let i = 0; i < EMOJI.length; i++) {
      render(emojiList, createEmojiTemplate(EMOJI[i]));
    }
  });
}


/* end render popup */

const footerStatistics = document.querySelector(`.footer__statistics`);
render(footerStatistics, createFooterStatisticsTemplate(getRandomNumber(100, 1000)));

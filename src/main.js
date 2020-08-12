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
// import {createFilmDetailsTemplate} from './view/film-details.js';
// import {createCommentSectionTemplate} from './view/comment-section.js';
// import {createCommentTemplate} from './view/comment.js';
// import {createCommentFormTemplate} from './view/comment-form.js';
// import {createEmojiTemplate} from './view/emoji.js';

import {generateFilms} from "./mock/film-card";
// import {EMOJI} from "./mock/film-card";
// import {getRandomNumber} from "./utils";

const ALL_FILMS_QUANTITY = 20;
const FILMS_QUANTITY = 5;
const FILMS_EXTRA_QUANTITY = 2;

const siteHeader = document.querySelector(`.header`);
const siteMainArea = document.querySelector(`.main`);
// const siteBody = document.body;

render(siteHeader, createUserRankTemplate());
render(siteMainArea, createMenuTemplate(), `afterBegin`);
render(siteMainArea, createSortingTemplate());
render(siteMainArea, createFilmsTemplate());

/* render films */
const films = siteMainArea.querySelector(`.films`);

render(films, createFilmsListTemplate());
const filmsListContainer = films.querySelector(`.films-list__container`);

let filmsData = [];
for (let i = 0; i < ALL_FILMS_QUANTITY; i++) {
  filmsData.push(generateFilms());
}

for (let i = 0; i < FILMS_QUANTITY; i++) {
  render(filmsListContainer, createFilmCardTemplate(
      filmsData[i].title,
      filmsData[i].poster,
      filmsData[i].rating,
      filmsData[i].date.year,
      filmsData[i].duration,
      filmsData[i].genres,
      filmsData[i].description,
      filmsData[i].comments.length
  )
  );
}

let filmsCounter = FILMS_QUANTITY; // we've rendered first n elements


/* end render films */

render(filmsListContainer, createShowMoreButtonTemplate(), `afterEnd`);

render(films, createTopRatedFilmsListTemplate());
render(films, createMostCommentedFilmsListTemplate());

const filmsListExtraContainers = films.querySelectorAll(`.films-list--extra .films-list__container`);

for (let i = 0; i < filmsListExtraContainers.length; i++) {
  for (let j = 0; j < FILMS_EXTRA_QUANTITY; j++) {
    render(filmsListExtraContainers[i], createFilmCardTemplate(
        filmsData[j].title,
        filmsData[j].poster,
        filmsData[j].rating,
        filmsData[j].date.year,
        filmsData[j].duration,
        filmsData[j].genres,
        filmsData[j].description,
        filmsData[j].comments.length
    ), `beforeEnd`);
  }
}

/* renderPopup */

// render(siteBody, createFilmDetailsTemplate
//   (
//     filmsData[0].title,
//     filmsData[0].poster,
//     filmsData[0].originalTitle,
//     filmsData[0].rating,
//     filmsData[0].director,
//     filmsData[0].writers,
//     filmsData[0].actors,
//     filmsData[0].date,
//     filmsData[0].duration,
//     filmsData[0].country,
//     filmsData[0].genres,
//     filmsData[0].ageRating,
//     filmsData[0].description,
//     filmsData[0].props.isFavourite,
//     filmsData[0].props.isInWatchList,
//     filmsData[0].props.isWatched
//   )
// );
//
// const filmsDetails = document.querySelector(`.film-details`);
//
// render(filmsDetails, createCommentSectionTemplate(filmsData.comments.length));
//
// const commentsList = filmsDetails.querySelector(`.film-details__comments-list`);
// const filmDetailsBottom = filmsDetails.querySelector(`.form-details__bottom-container`)
//
// for(let i = 0; i < filmsData[0].comments.length; i++) {
//   render(commentsList, createCommentTemplate
//     (
//       filmsData.comments[i].text,
//       filmsData.comments[i].author,
//       filmsData.comments[i].emoji,
//       filmsData.comments[i].date.year,
//       filmsData.comments[i].date.month,
//       filmsData.comments[i].date.day
//     )
//   );
// }
//
// render(filmDetailsBottom, createCommentFormTemplate());
//
// const emojiList = filmsDetails.querySelector(`.film-details__emoji-list`);
//
// for(let i = 0; i < EMOJI.length; i++) {
//   render(emojiList, createEmojiTemplate(EMOJI[i]));
// }

/* end render popup */


// show more button
const showMoreBtn = document.querySelector(`.films-list__show-more`);

showMoreBtn.addEventListener(`click`, () => {

  if (filmsCounter !== ALL_FILMS_QUANTITY) {

    for (let i = 0; i < FILMS_QUANTITY; i++) {
      render(filmsListContainer, createFilmCardTemplate(
          filmsData[filmsCounter].title,
          filmsData[filmsCounter].poster,
          filmsData[filmsCounter].rating,
          filmsData[filmsCounter].date.year,
          filmsData[filmsCounter].duration,
          filmsData[filmsCounter].genres,
          filmsData[filmsCounter].description,
          filmsData[filmsCounter].comments.length
      )
      );
      filmsCounter++;
    }

  } else {
    showMoreBtn.setAttribute(`disabled`, `true`);
  }

});

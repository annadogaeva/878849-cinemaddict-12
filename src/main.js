import {createUserRankTemplate} from './components/user-rank.js';
import {createMenuTemplate} from './components/menu.js';
import {createSortingTemplate} from './components/sorting.js';
import {createFilmCardTemplate} from './components/film-card.js';
import {createShowMoreButtonTemplate} from './components/show-more-button.js';
import {createFilmsTemplate} from './components/films.js';
import {createFilmsListTemplate} from './components/films-list.js';
import {createTopRatedFilmsListTemplate} from './components/top-rated-films-list.js';
import {createMostCommentedFilmsListTemplate} from './components/most-commented-films-list.js';
import {createFilmDetailsTemplate} from './components/film-details.js';
import {createCommentSectionTemplate} from './components/comment-section.js';
import {createCommentTemplate} from './components/comment.js';
import {createCommentFormTemplate} from './components/comment-form.js';
import {createEmojiTemplate} from './components/emoji.js';

import {generateFilms} from "./mock/film-card";
import {EMOJI} from "./mock/film-card";
import {getRandomNumber} from "./functions";

const FILMS_QUANTITY = 5;
const FILMS_EXTRA_QUANTITY = 2;

const render = (container, template, place = `beforeEnd`) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeader = document.querySelector(`.header`);
const siteMainArea = document.querySelector(`.main`);
const siteBody = document.body;

render(siteHeader, createUserRankTemplate());
render(siteMainArea, createMenuTemplate(), `afterBegin`);
render(siteMainArea, createSortingTemplate());
render(siteMainArea, createFilmsTemplate());

/*render films*/
const films = siteMainArea.querySelector(`.films`);

render(films, createFilmsListTemplate());
const filmsListContainer = films.querySelector(`.films-list__container`);

const ALL_FILMS_QUANTITY = 20;
let filmsData = [];
for(let i = 0; i < ALL_FILMS_QUANTITY; i++) {
  filmsData.push(generateFilms());
}

console.log(filmsData);


for (let i = 0; i < FILMS_QUANTITY; i++) {
  render(filmsListContainer, createFilmCardTemplate
    (
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
};

let filmsCounter = FILMS_QUANTITY;
console.log(filmsCounter);


/*end render films*/

render(filmsListContainer, createShowMoreButtonTemplate(), `afterEnd`);

render(films, createTopRatedFilmsListTemplate());
render(films, createMostCommentedFilmsListTemplate());

const filmsListExtraContainers = films.querySelectorAll(`.films-list--extra .films-list__container`);

for (let i = 0; i < filmsListExtraContainers.length; i++) {
  for (let j = 0; j < FILMS_EXTRA_QUANTITY; j++) {
    render(filmsListExtraContainers[i], createFilmCardTemplate(), `beforeEnd`);
  }
}

/*renderPopup*/
//
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

/*end render popup*/

const showMoreBtn = document.querySelector(`.films-list__show-more`);

showMoreBtn.addEventListener(`click`, () => {
  for (let j = 0; j < ALL_FILMS_QUANTITY; j++) {
    for (let i = filmsCounter; i < FILMS_QUANTITY; i++) {
      render(filmsListContainer, createFilmCardTemplate
        (
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

      filmsCounter++;
    }
  }

  });

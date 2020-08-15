export const createFilmCardTemplate = (filmData) => {
  return (
    `<article class="film-card">
      <h3 class="film-card__title">${filmData.title}</h3>
      <p class="film-card__rating">${filmData.ageRating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${filmData.date.year}</span>
        <span class="film-card__duration">${filmData.duration}</span>
        <span class="film-card__genre">${filmData.genres}</span>
      </p>
      <img src="./images/posters/${filmData.poster}" alt="${filmData.title}" class="film-card__poster">
      <p class="film-card__description">${filmData.description}</p>
      <a class="film-card__comments">${filmData.comments.length} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>`
  );
};

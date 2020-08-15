export const createCommentTemplate = (commentData) => {
  return (
    `<li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="./images/emoji/${commentData.emoji}.png" width="55" height="55" alt="emoji-${commentData.emoji}">
      </span>
      <div>
        <p class="film-details__comment-text">${commentData.text}</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">${commentData.author}</span>
          <span class="film-details__comment-day">${commentData.date.year} / ${commentData.date.month} / ${commentData.date.day} 00:00</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>`
  );
};



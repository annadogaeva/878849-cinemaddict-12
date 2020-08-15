export const createUserRankTemplate = (userRankData) => {
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">${userRankData.rank}</p>
      <img class="profile__avatar" src="${userRankData.avatar}" alt="Avatar" width="35" height="35">
    </section>`
  );
};

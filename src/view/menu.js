export const createMenuTemplate = (menuData) => {
  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item main-navigation__item--active">${menuData.all.title}</a>
        <a href="#watchlist" class="main-navigation__item">${menuData.watchlist.title} <span class="main-navigation__item-count">${menuData.watchlist.count}</span></a>
        <a href="#history" class="main-navigation__item">${menuData.history.title} <span class="main-navigation__item-count">${menuData.history.count}</span></a>
        <a href="#favorites" class="main-navigation__item">${menuData.favourites.title} <span class="main-navigation__item-count">${menuData.favourites.count}</span></a>
      </div>
      <a href="#stats" class="main-navigation__additional">${menuData.stats.title}</a>
    </nav>`
  );
};

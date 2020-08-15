export const createSortingTemplate = (sortingData) => {
  return (
    `<ul class="sort">
      <li><a href="#" class="sort__button sort__button--active">Sort by ${sortingData[0]}</a></li>
      <li><a href="#" class="sort__button">Sort by ${sortingData[1]}</a></li>
      <li><a href="#" class="sort__button">Sort by ${sortingData[2]}</a></li>
    </ul>`
  );
};

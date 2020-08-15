import {getRandomNumber} from "../utils";

const generateMenu = () => {
  return {
    all : {
      title: `All movies`,
      isActive: true,
    },
    watchlist : {
      title: `Watchlist`,
      count: getRandomNumber(1, 100),
    },
    history : {
      title: `History`,
      count: getRandomNumber(1, 100),
    },
    favourites : {
      title: `Favourites`,
      count: getRandomNumber(1, 100),
    },
    stats : {
      title: `Stats`,
    },
  }
};

export {generateMenu};

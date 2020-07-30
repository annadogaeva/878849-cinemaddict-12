import {getRandomNumber, randomBoolean} from "../functions";
import {shuffle} from "../functions";
import {getRandomArrayElements} from "../functions";
import {MONTHES} from "../const";

const generateDescriptions = (quantity, text, minSentences, maxSentences) => {
  let sentences = text.split('. ');
  let descriptions = [];

  for (let i = 0; i < quantity; i++) {
    for (let j = 0; j < getRandomNumber(minSentences, maxSentences); j++) {
      sentences = shuffle(sentences);
      descriptions[i] ? descriptions[i] = descriptions[i].toString() + sentences[j].toString() + '. ' : descriptions[i] = sentences[j].toString() + '. ';
    }
  }
  return descriptions;
};

const generateDuration = () => {
  const hours = getRandomNumber(1, 3);
  const minutes = getRandomNumber(0, 60);
  return hours + 'h ' + minutes + 'm ';
};

const generateComments = (quantity) => {
  let comments = [];

  for(let i = 0; i < quantity; i++) {
    let comment = {
      text: getRandomArrayElements(COMMENTS_TEXTS),
      author: getRandomArrayElements(COMMENTS_AUTHORS),
      emoji: getRandomArrayElements(EMOJI),
      date: {
        year: getRandomNumber(2010, 2020),
        month: getRandomArrayElements(MONTHES),
        day: getRandomNumber(1, 31)
      }
    };
    comments.push(comment);
  }

  return comments;
};

const TITLES = [
  `The Dance of Life`,
  `Sagebrush Trail`,
  `The Man with the Golden Arm`,
  `Santa Claus Conquers the Martians`,
  `Popeye the Sailor Meets Sindbad the Sailor`
];

const POSTERS = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`
];

const GENRES = [`Musical`, `Comedy`, `Drama`, `Western`, `Cartoon`, `Mystery`];

const DESCRIPTIONS_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus. `;

const DESCRIPTIONS = generateDescriptions(TITLES.length, DESCRIPTIONS_TEXT, 1, 5);

const AGE_RATINGS = [`12+`, `16+`, `18+`];

const EMOJI = [
  `smile`,
  `sleeping`,
  `puke`,
  `angry`
];

const COMMENTS_TEXTS = [
  `Interesting setting and a good cast`,
  `Booooooooooring`,
  `Very very old. Meh`,
  `Almost two hours? Seriously?`
];

const COMMENTS_AUTHORS = [
  `Tim Macoveev`,
  `John Doe`,
  `Jane Doe`,
  `Selena Clark`
];

const generateFilms = () => {
  return {
    title: getRandomArrayElements(TITLES),
    originalTitle: getRandomArrayElements(TITLES),
    poster: getRandomArrayElements(POSTERS),
    rating: getRandomNumber(0, 9, 1),
    date: {
      year: getRandomNumber(1920, 2020),
      month: getRandomArrayElements(MONTHES),
      day: getRandomNumber(1, 31),
    },
    duration: generateDuration(),
    genres: getRandomArrayElements(GENRES, 1),
    description: getRandomArrayElements(DESCRIPTIONS),
    ageRating: getRandomArrayElements(AGE_RATINGS),
    director: `Anthony Mann`,
    writers: `Anne Wigton, Heinz Herald, Richard Weil`,
    actors: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
    country: `USA`,
    comments: generateComments(getRandomNumber(1, 7)),
    props: {
      isInWatchList: randomBoolean(),
      isWatched: randomBoolean(),
      isFavourite: randomBoolean(),
    }
  }
};

export {generateFilms};
export {EMOJI};

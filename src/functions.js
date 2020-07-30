const getRandomNumber = (min, max, fractionDigits = 0) => {
  let random = min - 0.5 + Math.random() * (max - min + 1);
  return Math.abs(random.toFixed(fractionDigits));
};

const shuffle = (array) => {
  var j, x, i;
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = array[i];
    array[i] = array[j];
    array[j] = x;
  }
  return array;
};

const getRandomArrayElements = (array, quantity = 1) => {
  let result = [];

  for (let i=0; i < quantity; i++) {
    let randomEl = array[Math.floor(Math.random()*array.length)];
    result.push(randomEl);
  }

  return result;
};

const randomBoolean = () => {
  return Math.random() < 0.5;
}

export {getRandomNumber};
export {shuffle};
export {getRandomArrayElements};
export {randomBoolean};

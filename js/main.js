const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = [
  'Олег',
  'Егор',
  'Ирина',
  'Мария',
  'Андрей',
  'Василий',
  'Полина',
  'Сабрина'
];

const getRandomNumber = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomElementArray = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const createComment = () => ({
  id: getRandomNumber(0, 999),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: `${getRandomElementArray(MESSAGES)}`,
  name: `${getRandomElementArray(NAMES)}`
});

const createObject = () => ({
  id: getRandomNumber(1, 25),
  url: `photos/${getRandomNumber(1, 25)}.jpg`,
  description: `Описание фотографии №${getRandomNumber(1, 25)}`,
  likes: getRandomNumber(15, 200),
  comments: Array.from({length: getRandomNumber(0, 30)}, createComment)
});

const objectArray = Array.from({length: 25}, createObject);

console.log(objectArray);

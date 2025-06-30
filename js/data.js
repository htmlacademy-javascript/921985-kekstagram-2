import { getRandomNumber, getRandomElementArray } from './util.js';

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

const MINID = 0;
const MAXID = 999;

const MINAVATAR = 1;
const MAXAVATAR = 6;

const MINPHOTO = 1;
const MAXPHOTO = 25;

const MINDESCRIPTION = 1;
const MAXDESCRIPTION = 25;

const MINLIKE = 15;
const MAXLIKE = 300;

const MINCOMMENT = 0;
const MAXCOMMENT = 30;

const createCommentPhoto = () => ({
  id: getRandomNumber(MINID, MAXID),
  avatar: `img/avatar-${getRandomNumber(MINAVATAR, MAXAVATAR)}.svg`,
  message: `${getRandomElementArray(MESSAGES)}`,
  name: `${getRandomElementArray(NAMES)}`
});

const createDescriptionPhoto = (element, index) => ({
  id: index + 1,
  url: `photos/${getRandomNumber(MINPHOTO, MAXPHOTO)}.jpg`,
  description: `Описание фотографии №${getRandomNumber(MINDESCRIPTION, MAXDESCRIPTION)}`,
  likes: getRandomNumber(MINLIKE, MAXLIKE),
  comments: Array.from({length: getRandomNumber(MINCOMMENT, MAXCOMMENT)}, createCommentPhoto)
});

export {MESSAGES, NAMES, createDescriptionPhoto};

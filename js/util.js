
import {minId, maxId, minAvatar, maxAvatar, MESSAGES, NAMES} from './data.js';

const getRandomNumber = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomElementArray = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const createCommentPhoto = () => ({
  id: getRandomNumber(minId, maxId),
  avatar: `img/avatar-${getRandomNumber(minAvatar, maxAvatar)}.svg`,
  message: `${getRandomElementArray(MESSAGES)}`,
  name: `${getRandomElementArray(NAMES)}`
});

export {getRandomNumber, createCommentPhoto};

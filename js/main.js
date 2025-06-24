import { minPhoto, maxPhoto, minDescription, maxDescription, minLike, maxLike, minComment, maxComment } from './data.js';
import { getRandomNumber, createCommentPhoto } from './util.js';

const createDescriptionPhoto = (element, index) => ({
  id: index + 1,
  url: `photos/${getRandomNumber(minPhoto, maxPhoto)}.jpg`,
  description: `Описание фотографии №${getRandomNumber(minDescription, maxDescription)}`,
  likes: getRandomNumber(minLike, maxLike),
  comments: Array.from({length: getRandomNumber(minComment, maxComment)}, createCommentPhoto)
});

const arrayPhotos = Array.from({length: 25}, createDescriptionPhoto);

console.log(arrayPhotos);

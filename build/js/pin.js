import {NEWS_LIST} from './data.js';

export const getPin = () => {
  const pinTemplate = document.querySelector('#pin').content.querySelector('.pin');
  const pin = pinTemplate.cloneNode(true);
  pin.textContent = `${NEWS_LIST.length}`;
  return pin;
};


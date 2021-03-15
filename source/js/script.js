import {getPin} from './pin.js';
import {getNewsFeed} from './newsFeed.js';


const start = () => {
  const main = document.querySelector('main');
  const pin = getPin();
  main.firstElementChild.appendChild(pin);
  pin.addEventListener('click', getNewsFeed);
};

setTimeout(start, 1000);

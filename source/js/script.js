import {getPin} from './pin.js';
import {getNewsFeed} from './newsFeed.js';


const start = () => {
  const container = document.querySelector('.news');
  const pin = getPin();
  container.appendChild(pin);
  pin.addEventListener('click', getNewsFeed);
};

setTimeout(start, 1000);

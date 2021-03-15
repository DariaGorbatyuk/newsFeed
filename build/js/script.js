import {getPin} from './pin.js';
import {getNewsFeed} from './newsFeed.js';


const start = () => {
  const pin = getPin();
  document.querySelector('body').appendChild(pin);
  pin.addEventListener('click', getNewsFeed);
};

setTimeout(start, 1000);

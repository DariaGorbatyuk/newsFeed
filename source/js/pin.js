const MAX_LENGTH = 9999;
const get = () => {
  const pinTemplate = document.querySelector('#pin').content.querySelector('.pin');
  const pin = pinTemplate.cloneNode(true);
  if (window.data.NEWS_LIST.length < MAX_LENGTH) {
    pin.textContent = `${window.data.NEWS_LIST.length}`;
  } else {
    pin.textContent = `all`;
  }
  return pin;
};

window.pin = {
  get,
};


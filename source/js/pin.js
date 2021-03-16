(() => {
  const get = () => {
    const pinTemplate = document.querySelector('#pin').content.querySelector('.pin');
    const pin = pinTemplate.cloneNode(true);
    pin.textContent = `${window.data.NEWS_LIST.length}`;
    return pin;
  };

  window.pin = {
    get
  }
})();



(()=>{
  const start = () => {
    const pin = window.pin.get();
    document.querySelector('body').appendChild(pin);
    pin.addEventListener('click', window.newsFeed.get);
  };

  setTimeout(start, 1000);
})()


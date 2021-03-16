  const getNewsItem = (newsTemplate, i) => {
    const news = newsTemplate.cloneNode(true);
    news.querySelector('h2').textContent = window.data.NEWS_LIST[i].title;
    news.querySelector('.news-card__author').textContent = window.data.NEWS_LIST[i].author;
    news.querySelector('time').datetime = window.data.NEWS_LIST[i].datatime;
    const [day, time] = window.data.NEWS_LIST[i].datatime.split(' ');
    news.querySelector('time').textContent = `${day} в ${time}`;
    news.querySelector('a').href = window.data.NEWS_LIST[i].link;
    return news;
  };

  const showNewsList = () => {
    const newsList = document.querySelector('.news__list');
    if (!newsList.classList.contains('news__list--open')) {
      newsList.classList.add('news__list--open');
    }
    return newsList;
  };

  const get = () => {
    const newsTemplate = document.querySelector('#news-element').content.querySelector('.news-card');
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < window.data.NEWS_LIST.length; i++) {
      const news = getNewsItem(newsTemplate, i);
      fragment.appendChild(news);
    }
    const newsList = showNewsList();
    newsList.appendChild(fragment);
    newsList.addEventListener('click', window.visited.onLinkVisited);
    document.querySelector('.pin').removeEventListener('click', get);
  };

  window.newsFeed = {
    get,
  };


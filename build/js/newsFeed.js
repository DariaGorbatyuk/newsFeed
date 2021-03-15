import {NEWS_LIST} from './data.js';

export const getNewsFeed = () => {
  const newsTemplate = document.querySelector('#news-element').content.querySelector('.news-card');
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < NEWS_LIST.length; i++) {
    const news = newsTemplate.cloneNode(true);
    news.querySelector('h2').textContent = NEWS_LIST[i].title;
    news.querySelector('span').textContent = NEWS_LIST[i].author;
    const date = NEWS_LIST[i].data.split(' ');
    news.querySelector('time').datetime = date[0];
    news.querySelector('time').textContent = date[1];
    news.querySelector('a').href = NEWS_LIST[i].link;
    news.dataset.status = NEWS_LIST[i].status;
    fragment.appendChild(news);
  }
  const newsList = document.querySelector('.news__list');
  newsList.setAttribute('style', 'display: flex');
  newsList.appendChild(fragment);
};

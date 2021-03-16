const onLinkVisited = (evt) => {
  if (!evt.target.matches('.news-card__excerpt')) {
    return;
  }
  evt.target.nextElementSibling.textContent = 'Прочитано';
  evt.target.nextElementSibling.classList.add('news-card__status--done');
};

window.visited = {
  onLinkVisited,
};


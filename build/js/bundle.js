window.data={NEWS_LIST:[{title:"Щенята и фронтенд, прорыв в IT",author:"Василий Пупкин",datatime:"2011-03-15 19:00",link:"https://www.akc.org/expert-advice/lifestyle/cute-puppies/"},{title:"Новости в сайтостроении! Сайт создается сам, пока вы отдыхаете",author:"Генадий Шишковидзе",datatime:"2011-02-10 20:07",link:"https://htmlacademy.ru/study"},{title:"Хотите стать гением фронтенда? Просто пейте три ложки в день...",author:"Елизавета Хвостонога",datatime:"2011-02-23 15:00",link:"https://bipbap.ru/krasivye-kartinki/kartinki-smeshnye-krasivye-i-milye-pro-kotyat.html"},{title:"Лучшая среда разработки, мнение специалистов",author:"Света Могучая",datatime:"2011-03-03 10:00",link:"https://ru.depositphotos.com/stock-photos/%D1%85%D0%BE%D0%BC%D1%8F%D0%BA.html"},{title:"Как заработать на frontend 100 миллионов за 30 минут",author:"Георгий Разведяйкин",datatime:"2022-05-3 21:15",link:"https://htmlacademy.ru/blog/boost/tools/time-trackers"},{title:"Новый тренд - котики в тапочках за компьютером",author:"Марина Романова",datatime:"2010-02-10 14:09",link:"https://htmlacademy.ru/blog/boost/tools/time-trackers"},{title:"Новое расследование - куда исчезают престарелые программисты",author:"Елизавета Хвостонога",datatime:"2011-02-23 15:00",link:"https://htmlacademy.ru/blog/boost/tools/time-trackers"},{title:"Лучшая книга по программированию по мнению критиков",author:"Света Могучая",datatime:"2011-03-03 10:00",link:"https://htmlacademy.ru/blog/boost/tools/time-trackers"}]},window.pin={get:()=>{const t=document.querySelector("#pin").content.querySelector(".pin").cloneNode(!0);return window.data.NEWS_LIST.length<9999?t.textContent=`${window.data.NEWS_LIST.length}`:t.textContent="all",t}},window.visited={onLinkVisited:t=>{t.target.matches(".news-card__excerpt")&&(t.target.nextElementSibling.textContent="Прочитано",t.target.nextElementSibling.classList.add("news-card__status--done"))}},function(){const t=(t,e)=>{const n=t.cloneNode(!0);n.querySelector("h2").textContent=window.data.NEWS_LIST[e].title,n.querySelector(".news-card__author").textContent=window.data.NEWS_LIST[e].author,n.querySelector("time").datetime=window.data.NEWS_LIST[e].datatime;const[o,i]=window.data.NEWS_LIST[e].datatime.split(" ");return n.querySelector("time").textContent=`${o} в ${i}`,n.querySelector("a").href=window.data.NEWS_LIST[e].link,n},e=()=>{const n=document.querySelector("#news-element").content.querySelector(".news-card");let o=document.createDocumentFragment();for(let e=0;e<window.data.NEWS_LIST.length;e++){const i=t(n,e);o.appendChild(i)}const i=(()=>{const t=document.querySelector(".news__list");return t.classList.contains("news__list--open")||t.classList.add("news__list--open"),t})();i.appendChild(o),i.addEventListener("click",window.visited.onLinkVisited),document.querySelector(".pin").removeEventListener("click",e)};window.newsFeed={get:e}}(),setTimeout((()=>{const t=window.pin.get();document.querySelector("body").appendChild(t),t.addEventListener("click",window.newsFeed.get)}),1e3);
let header = document.querySelector('.header');
let logo = document.querySelector('.logo__img');

//##  Change the header when scrolling
window.onscroll = function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 40) {
    header.classList.add('header--active');
    logo.src = 'images/icons/logotype-v2.png';
  } else {
    logo.src = 'images/icons/logotype.png';
    header.classList.remove('header--active');
  }
};

// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]');

// Цикл по всем ссылкам
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href')
      ? anchor.getAttribute('href')
      : 'body';
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

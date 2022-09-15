const target = document.querySelector('footer');
const scrollUpBtn = document.querySelector('.scrollUpBtn');
const rootEl = document.documentElement;

// When scrolling on the website calling a function that calculates scrolled pixels
onScrollFunction();
window.onscroll = function () {
  onScrollFunction();
};

// When scrolling more than 2500px class .showBtn either add or removed, which either reveal button or removes it
function onScrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    scrollUpBtn.classList.add('showBtn');
  } else {
    scrollUpBtn.classList.remove('showBtn');
  }
}

scrollUpBtn.addEventListener('click', scrollUpTop);

// Function that scrolls the page up when clicked on the button
function scrollUpTop() {
  rootEl.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

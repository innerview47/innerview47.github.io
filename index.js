const text = 'Hello! Welcome to my canvas.';
const typingTextEl = document.querySelector('.js-typing-text');
const popupContentWrapEl = document.querySelector('.js-popup-content-wrap');
const popupContentsEl = document.getElementsByClassName('js-popup-content');
const popupToggler = document.getElementsByClassName('js-popup-toggler');
const popupClose = document.querySelector('.js-popup-close');
let i = 0;
let cursorVisible = true;

function typeWriter() {
  if (i < text.length) {
    typingTextEl.innerHTML += text.charAt(i);
    i++;
    cursorVisible = true;
  } else {
    cursorVisible = !cursorVisible;
  }

  if (cursorVisible) {
    typingTextEl.classList.add('cursor-visible');
    typingTextEl.classList.remove('cursor-hidden');
  } else {
    typingTextEl.classList.add('cursor-hidden');
    typingTextEl.classList.remove('cursor-visible');
  }

  if (i < text.length) {
    setTimeout(typeWriter, 80);
  }
}

for (let i = 0; i < popupToggler.length; i++) {
  popupToggler[i].addEventListener('click', (e) => {
    popupContentWrapEl.style.right = 0;
    const popupContent = e.target.parentElement.getAttribute('popup-content');
    document.querySelector(`.js-popup-content[popup-content="${popupContent}"]`).classList.add('show');
  });
}

popupClose.addEventListener('click', (e) => {
  popupContentWrapEl.style.right = '-100%';
  setTimeout(() => {
    for (let i = 0; i < popupContentsEl.length; i++) {
      popupContentsEl[i].classList.remove('show');
    }
  }, 450);
});
// Call the function to start the typing effect
typeWriter();
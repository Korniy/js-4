function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnStrartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
let timerId = null;

btnStrartEl.addEventListener('click', onButtonStart);
btnStopEl.addEventListener('click', onButtonStop);

function onButtonStart() {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  if (timerId) {
    btnStrartEl.setAttribute('disabled', 'disabled');
    btnStopEl.removeAttribute('disabled', 'disabled');
  }
}

function onButtonStop() {
  clearInterval(timerId);
  if (timerId) {
    btnStopEl.setAttribute('disabled', 'disabled');
    btnStrartEl.removeAttribute('disabled', 'disabled');
  }
}

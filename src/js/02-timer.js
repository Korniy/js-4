// Бібліотека
import flatpickr from 'flatpickr';
// імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const buttonEl = document.querySelector('[data-start]');
const secondsEl = document.querySelector('[data-seconds]');
const minutesEl = document.querySelector('[data-minutes]');
const hoursEl = document.querySelector('[data-hours]');
const daysEl = document.querySelector('[data-days]');

let timerId = null;

buttonEl.setAttribute('disabled', true);

// готова функція для підрахунку значень
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// опції з бібліотеки
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    // мій код
    if (selectedDates[0] < new Date()) {
      alert('Please choose a date in the future');
    }
    if (selectedDates[0] > new Date()) {
      buttonEl.removeAttribute('disabled', true);
    }
  },
};

// бібліотека
flatpickr('#datetime-picker', options);

buttonEl.addEventListener('click', onBtnClick);

function onBtnClick() {
  timerId = setInterval(() => {}, 1000);
}

function addLeadingZero(value) {}

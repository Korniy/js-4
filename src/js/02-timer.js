// Бібліотека
import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
// імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.querySelector('#datetime-picker');
const buttonEl = document.querySelector('[data-start]');
const secondsEl = document.querySelector('[data-seconds]');
const minutesEl = document.querySelector('[data-minutes]');
const hoursEl = document.querySelector('[data-hours]');
const daysEl = document.querySelector('[data-days]');

//Кнопка «Start» повинна бути неактивною доти, доки користувач не вибрав дату в майбутньому.
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

let arrayOfSelectedDates = null;

// опції з бібліотеки
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    // мій код
    // це масив обраних дат, тому ми беремо перший елемент
    arrayOfSelectedDates = selectedDates[0];

    if (arrayOfSelectedDates < new Date()) {
      // alert('Please choose a date in the future');
      Notiflix.Notify.failure('Please choose a date in the future');
    }
    if (arrayOfSelectedDates > new Date()) {
      buttonEl.removeAttribute('disabled', true);
      Notiflix.Notify.success('Success');
    }
  },
};

// бібліотека
flatpickr(inputEl, options);

buttonEl.addEventListener('click', onBtnClick);

function onBtnClick() {
  setInterval(() => {
    const time = arrayOfSelectedDates - new Date();

    if (time >= 0) {
      onTimerUpdate(convertMs(time));
    }
  }, 1000);
}

// оновлення таймера
function onTimerUpdate({ days, hours, minutes, seconds }) {
  secondsEl.textContent = addLeadingZero(seconds);
  minutesEl.textContent = addLeadingZero(minutes);
  hoursEl.textContent = addLeadingZero(hours);
  daysEl.textContent = addLeadingZero(days);
}

// функція добавляє 0 на початок
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

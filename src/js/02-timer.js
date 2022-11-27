import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { convertMs } from './convertMs';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Notiflix from 'notiflix';

const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('[data-start]'),
  timerEl: document.querySelector('.timer'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};

refs.btnStart.setAttribute('disabled', 'true');

let intervalId = null;
let userDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDates[0] <= options.defaultDate
      ? (Notiflix.Notify.failure('Please choose a date in the future'),
        (refs.btnStart.disabled = true))
      : (refs.btnStart.disabled = false);
    userDate = selectedDates[0];
  },
};

flatpickr('#datetime-picker', options);

refs.btnStart.addEventListener('click', () => {
  intervalId = setInterval(() => {
    const deltaTime = userDate - new Date();
    refs.btnStart.disabled = true;
    if (deltaTime >= 0) {
      const time = convertMs(deltaTime);
      updateClockFace(time);
      refs.inputEl.disabled = true;
    }
    if (userDate <= Date.now()) {
      Notiflix.Notify.success('Countdown finished');
      clearInterval(intervalId);
      refs.inputEl.disabled = false;
    }
  }, 1000);
});

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateClockFace({ days, hours, minutes, seconds }) {
  refs.secondsEl.textContent = addLeadingZero(seconds);
  refs.minutesEl.textContent = addLeadingZero(minutes);
  refs.hoursEl.textContent = addLeadingZero(hours);
  refs.daysEl.textContent = addLeadingZero(days);
}

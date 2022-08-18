const daysText = document.querySelector(".days-text");
const hoursText = document.querySelector(".hours-text");
const minutesText = document.querySelector(".minutes-text");
const secondsText = document.querySelector(".seconds-text");



setInterval(() => {
  let days = new Date().getDay();
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  daysText.innerText = days;
  hoursText.innerText = hours;
  minutesText.innerText = minutes;
  secondsText.innerText = seconds;
}, 1000);

let dayElements = document.getElementsByClassName('days');
let hourElements = document.getElementsByClassName('hours');
let minuteElements = document.getElementsByClassName('minutes');
let secondElements = document.getElementsByClassName('seconds');

function updateCountdown() {
  var currentDate = new Date();

  const specificDate = new Date(2025, 11, 4);

  const timeDifference = specificDate - currentDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  dayElements[0].textContent = days;
  hourElements[0].textContent = hours;
  minuteElements[0].textContent = minutes;
  secondElements[0].textContent = seconds;
}

setInterval(updateCountdown, 1000);

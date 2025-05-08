document.addEventListener('DOMContentLoaded', () => {
  const daysHundredsElement = document.getElementById('days-hundreds');
  const daysTensElement = document.getElementById('days-tens');
  const daysUnitsElement = document.getElementById('days-units');
  const hoursTensElement = document.getElementById('hours-tens');
  const hoursUnitsElement = document.getElementById('hours-units');
  const minutesTensElement = document.getElementById('minutes-tens');
  const minutesUnitsElement = document.getElementById('minutes-units');
  const secondsTensElement = document.getElementById('seconds-tens');
  const secondsUnitsElement = document.getElementById('seconds-units');

  // Set the date we're counting down to: May 26, 2026, 00:00:00
  const countDownDate = new Date("May 26, 2026 00:00:00").getTime();

  let intervalId;

  // Function to update the countdown status message
  function updateCountdownStatus() {
    const countdownStatus = document.getElementById('countdown-status');
    const releaseMessage = document.getElementById('release-message');
    const now = new Date().getTime();

    // Show the message container
    releaseMessage.classList.remove('opacity-0');

    if (now >= countDownDate) {
      countdownStatus.textContent = "The day has arrived!";
      countdownStatus.classList.add('text-green-500');
    } else {
      countdownStatus.textContent = "Not released yet, but getting closer every day :(";
      countdownStatus.classList.remove('text-green-500');
    }
  }

  function updateCountdown() {
    const now = new Date().getTime();
    const difference = countDownDate - now;

    if (difference < 0) {
      clearInterval(intervalId);
      // Display 000 Days, 00 Hours, 00 Minutes, 00 Seconds when countdown is over
      daysHundredsElement.textContent = '0';
      daysTensElement.textContent = '0';
      daysUnitsElement.textContent = '0';
      hoursTensElement.textContent = '0';
      hoursUnitsElement.textContent = '0';
      minutesTensElement.textContent = '0';
      minutesUnitsElement.textContent = '0';
      secondsTensElement.textContent = '0';
      secondsUnitsElement.textContent = '0';
      updateCountdownStatus();
      return;
    }

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update days
    daysHundredsElement.textContent = String(Math.floor(days / 100));
    daysTensElement.textContent = String(Math.floor((days % 100) / 10));
    daysUnitsElement.textContent = String(days % 10);

    // Update hours
    hoursTensElement.textContent = String(Math.floor(hours / 10));
    hoursUnitsElement.textContent = String(hours % 10);

    // Update minutes
    minutesTensElement.textContent = String(Math.floor(minutes / 10));
    minutesUnitsElement.textContent = String(minutes % 10);

    // Update seconds
    secondsTensElement.textContent = String(Math.floor(seconds / 10));
    secondsUnitsElement.textContent = String(seconds % 10);

    // Update status message
    updateCountdownStatus();
  }

  // Call it once to display immediately
  updateCountdown();

  // Update the count down every 1 second
  intervalId = setInterval(updateCountdown, 1000);
});

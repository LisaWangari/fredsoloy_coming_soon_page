const countdown = document.querySelector('.countdown');

// Set Launch Date (ms)
const launchDate = new Date('Oct 1, 2019 13:00:00').getTime();

// Update every second
const intvl = setInterval(() => {
  // Get todays date and time (ms)
  const now = new Date().getTime();

  // Distance from now to the launch date
  const distance = launchDate - now;

  // Time calculation
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display result
  countdown.innerHTML = `
<div>${days}<span>Js</span></div>
<div>${hours}<span>Hs</span></div>
<div>${mins}<span>Mns</span></div>
<div>${seconds}<span>Sec</span></div>
`;

  // If launch date passed
  if (distance < 0) {
    // Stop countdown
    clearInterval(intvl);
    // Style and output
    countdown.getElementsByClassName.color = '#17a2b8';
    countdown.innerHTML = 'Launched!';
  }
}, 1000);

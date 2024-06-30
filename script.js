const audio = document.getElementById('myAudio');
const playPauseButton = document.getElementById('playPauseButton');
const playIcon = playPauseButton.querySelector('img');
const pauseIcon = new Image(); // Create a new image for pause

pauseIcon.src = "notestop.gif"; // Replace with your pause icon path

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playIcon.src = pauseIcon.src; // Switch to pause icon
  } else {
    audio.pause();
    playIcon.src = playIcon.dataset.originalSrc; // Switch back to play icon
  }
}

playPauseButton.addEventListener('click', togglePlayPause);

// Store the original play icon source for switching back later
playIcon.dataset.originalSrc = playIcon.src;


const video = document.querySelector("video");
const playerButton = document.querySelector(".player__button");
const progressFilled = document.querySelector(".progress__filled");
const volume = document.querySelector(".volume");
const playbackSpeed = document.querySelector(".playbackSpeed");
const rewind = document.querySelector(".rewind");
const skip = document.querySelector(".skip");

// Play / Pause
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Change play button icon
function updateButton() {
    playerButton.textContent = video.paused ? "►" : "Ⅱ";
}

// Update progress bar
function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.flexBasis = `${percent}%`;
}

// Change volume
function handleVolume() {
    video.volume = this.value;
}

// Change playback speed
function handleSpeed() {
    video.playbackRate = this.value;
}

// Rewind 10 seconds
function rewindVideo() {
    video.currentTime -= 10;
}

// Forward 25 seconds
function skipVideo() {
    video.currentTime += 25;
}

// Play / pause button
playerButton.addEventListener("click", togglePlay);

// Update button when video plays
video.addEventListener("play", updateButton);

// Update button when video pauses
video.addEventListener("pause", updateButton);

// Update progress bar while playing
video.addEventListener("timeupdate", updateProgress);

// Volume control
volume.addEventListener("input", handleVolume);

// Playback speed control
playbackSpeed.addEventListener("input", handleSpeed);

// Rewind
rewind.addEventListener("click", rewindVideo);

// Forward
skip.addEventListener("click", skipVideo);
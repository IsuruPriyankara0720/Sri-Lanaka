const video = document.getElementById('video');
const playPauseBtn = document.getElementById('play-pause');

function togglePlayPause() {
    if (video.paused) {
        video.play();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        video.pause();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
}
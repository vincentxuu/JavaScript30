const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");


function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

// function togglePlay(){
//     if (video.paused){
//         video.play();
//     }else {
//         video.pause();
//     }
// }

function updateButton(e) {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

// function updateButton(e){
//     if (this.paused){
//         toggle.textContent = '►'
//     }else{
//         toggle.textContent = '❚ ❚'
//     }
// }

function skip() {
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  console.log(this.value);
  console.log(this.name);
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

let mousedown = false;

let keydown = false;

video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);    
video.addEventListener("timeupdate", handleProgress);
skipButtons.forEach((button) => button.addEventListener("click", skip));
ranges.forEach((input) => input.addEventListener("change", handleRangeUpdate));
ranges.forEach((input) =>
  input.addEventListener("mousemove", handleRangeUpdate)
);
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

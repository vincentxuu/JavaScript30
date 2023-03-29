# JS30-Day11-Custom HTML5 Video Player

### 今日重點：
#### 操作影片播放器的按鈕，達到快轉、倒退、播放速率高低、音量大小的效果。

--- 

### 學習筆記：

關鍵
1. 取得元素的控制權
2. 監聽元素
3. 放入判斷改變畫面

*取得元素的控制權*
``` 
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
```


*監聽元素*
```
let mousedown = false;

video.addEventListener('click',togglePlay)
toggle.addEventListener('click',togglePlay)
video.addEventListener('play',updateButton)
video.addEventListener('pause',updateButton)
video.addEventListener('timeupdate',handleProgress)
skipButtons.forEach(button => button.addEventListener('click',skip))
ranges.forEach(input => input.addEventListener('change',handleRangeUpdate))
ranges.forEach(input => input.addEventListener('mousemove',handleRangeUpdate))
progress.addEventListener('click',scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown',()=> mosuedown = true);
progress.addEventListener('mouseup',()=> mousedown = false);
```

*放入判斷改變影片*
```
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
```
---

`一種判斷兩種寫法，補充在下方`
```
//一般if判斷
function togglePlay(){
    if (video.paused){
        video.play();
    }else {
        video.pause();
    }
}

function updateButton(e){
    if (this.paused){
        toggle.textContent = '►'
    }else{
        toggle.textContent = '❚ ❚'
    }
}

//三元運算子
function togglePlay(){
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton(e){
    const icon = this.paused ? '►' : '❚ ❚'
    toggle.textContent = icon
}
```
--- 

## 參考資料
github:
- [11 - Custom Video Player](https://github.com/guahsu/JavaScript30/tree/master/11_Custom-Video-Player)
- [11 自定义视频播放器](https://github.com/soyaine/JavaScript30/tree/master/11%20-%20Custom%20Video%20Player)

hackmd筆記：[JS30 - Custom HTML5 Video Player](https://hackmd.io/@dadidi910/r1tZbV2pu)

鐵人賽文章：[JS30-Day11-Custom Video Player](https://ithelp.ithome.com.tw/articles/10194816)

YT影片：[深入淺出 Javascript30 快速導覽：Day 11：Custom Video Player](https://www.youtube.com/watch?v=gS4RJkcEyPo&list=PLEfh-m_KG4dYbxVoYDyT_fmXZHnuKg2Fq&index=13&t=1499s)




# JS30-Day1-JavaScript Drum Kit
### 今日重點：
#### 透過鍵盤按鍵改變畫面按鈕的狀態以及產生對應的聲音

--- 

### 學習筆記：

關鍵
1. 監聽鍵盤動作
2. 取得音效元素控制、播放音效
3. 取得按鈕元素控制、改變元素樣式
4. 取得按鈕元素控制並監聽、移除元素樣式



*監聽鍵盤動作*
``` 
window.addEventListener("keydown", playHandler);
```
*取得音效元素、播放音效*
```
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
if (audio) {
            audio.currentTime = 0;
            audio.play();
          }
```

*取得按鈕元素控制、改變元素樣式*
```
const dom = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (dom) dom.classList.add("playing"); 
```

*取得按鈕元素控制並監聽、移除元素樣式*
```
document.querySelectorAll(".key").forEach(function (key) {
          key.addEventListener("transitionend", transitionendHandler);
        });
        function transitionendHandler(e) {
          if (e.propertyName === "transform") {
            e.currentTarget.classList.remove("playing");
          }
        }
```
---

`不同表述方式法，結果一樣，補充在下方`

    正面表述

    if (e.propertyName === "transform") {
            e.currentTarget.classList.remove("playing");
          }
---      
    負面表述
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
    
--- 

## 參考資料
github:
- [01 - JavaScript Drum Kit](https://github.com/guahsu/JavaScript30/tree/master/01_Java-Script-Drum-Kit)
- [01 JavaScript Drum Kit 中文指南](https://github.com/soyaine/JavaScript30/tree/master/01%20-%20JavaScript%20Drum%20Kit)

hackmd筆記：[JS30 - Drum kit](https://hackmd.io/YeMmUjUmSl-Yqf6dN9XhGA)

鐵人賽文章：[JS30-Day1-Javascript Drum Kit](https://ithelp.ithome.com.tw/articles/10192471)

YT影片：[深入淺出 Javascript30 快速導覽：Day 1：JavaScript Drum Kit](https://www.youtube.com/watch?v=f2ttaeDHzwE&list=PLEfh-m_KG4dYbxVoYDyT_fmXZHnuKg2Fq&index=2&t=3693s&ab_channel=Alex%E5%AE%85%E5%B9%B9%E5%98%9B)




# JS30-Day2-CSS + JS Clock
### 今日重點：
#### 製作時鐘，讓時針分針秒針可以順利進行轉動

--- 

### 學習筆記：

關鍵
1. 取得元素的控制權
2. 取得時間
3. 計算元素轉動的角度
4. 控制三個元素可以轉動



*取得元素的控制權*
``` 
const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
```
*取得時間*
```
const now = new Date();
const seconds = now.getSeconds();
const mins = now.getMinutes();
const hours = now.getHours();
```

*計算元素轉動的角度*
```
const secondsDegrees = (seconds / 60) * 360 + 90;
const minsDegrees =(mins / 60) * 360 + ((seconds / 60) * 360) / 60 + 90;
const hoursDegrees = (hours / 12) * 360 + ((mins / 60) * 360) / 12 + 90; 
```

*控制三個元素可以轉動*
```
function setDate() {
        const now = new Date();
        const seconds = now.getSeconds();
        const mins = now.getMinutes();
        const hours = now.getHours();

        const secondsDegrees = (seconds / 60) * 360 + 90;
        const minsDegrees = (mins / 60) * 360 + ((seconds / 60) * 360) / 60 + 90;
        const hoursDegrees = (hours / 12) * 360 + ((mins / 60) * 360) / 12 + 90;
        
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        minHand.style.transform = `rotate(${minsDegrees}deg)`;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
      }
setInterval(setDate, 1000);
setDate();
```
---

`不同思維解法差異蠻多的，蠻有趣的，學習到很多，補充在下方`

    時針分針秒針起始位置從0度開始

    這樣就不需要再加90度回來，也可以避免秒針到60的時候角度會重新計算的問題

    時間計時器常見有三種用法，也有跟著練習使用
    - setInterval 設定間隔，持續執行（原本作者的用法，請見檔名index-SetInterval，針需要加90度）
    - setTimeOut 設定延遲，執行一次（請見檔名index-setTimeOut，針從0度開始）
    - requestAnimationFrame，處理畫面的setTimeout（請見檔名index-requestAnimationFrame，針從0度開始）
--- 

## 參考資料
github:
- [JS30-Day2-CSS + JS Clock](https://github.com/a90100/JavaScript30/tree/master/02%20-%20JS%20and%20CSS%20Clock)
- [02 - JS and CSS Clock](https://github.com/guahsu/JavaScript30/tree/master/02_JS-and-CSS-Clock)
- [02 纯 JS、CSS 时钟 中文指南](https://github.com/soyaine/JavaScript30/tree/master/02%20-%20JS%20%2B%20CSS%20Clock)

hackmd筆記：[JS30 Day2 - JS and CSS Clock](https://hackmd.io/JjCz6HE_Sla6UTO7XdQBuQ?view)

鐵人賽文章：[JS30-Day2-JS and CSS Clock](https://ithelp.ithome.com.tw/articles/10192719)

YT影片：[深入淺出 Javascript30 快速導覽：Day 2：CSS + JS Clock](https://www.youtube.com/watch?v=O1YsB3qxO4g&list=PLEfh-m_KG4dYbxVoYDyT_fmXZHnuKg2Fq&index=3&t=1006s&ab_channel=Alex%E5%AE%85%E5%B9%B9%E5%98%9B)




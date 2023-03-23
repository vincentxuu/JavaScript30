# JS30-Day8-Fun with HTML5 Canvas

### 今日重點：
#### 透過持續點擊畫面可以畫出彩色的線條，並且會隨著長度改變畫筆的粗細。

--- 

### 學習筆記：

關鍵
1. canas設定
2. 取得元素的控制權
3. 監聽滑鼠
4. 控制滑鼠來改變畫面

*canas設定*
```
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
```

*取得元素的控制權*
``` 
const canvas = document.querySelector('#draw');
```


*監聽元素*
```
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
```

*控制滑鼠來改變畫面*
```
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if(direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }

}
```
---

`同樣都是判斷看到不同思維，都覺得很有收穫，補充在下方`
```
//顏色變化
hue++;
  if (hue >= 360) {
    hue = 0;
  }

colorDeg = colorDeg < 360 ? colorDeg + 1  : 0 ;

//線條變化
if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if(direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }


if (lineWidth < 1 || lineWidth >50){
  direction *= -1;
}
lineWidth += direction;
ctx.lineWidth = lineWidth;
```
--- 

## 參考資料
github:
- [JS30-Day8-Fun with HTML5 Canvas](https://github.com/a90100/JavaScript30/tree/master/08%20-%20Fun%20with%20HTML5%20Canvas)
- [08 - Fun with HTML5 Canvas](https://github.com/guahsu/JavaScript30/tree/master/08_Fun-with-HTML5-Canvas)
- [08 HTML5 Canvas 实现彩虹画笔绘画板指南](https://github.com/soyaine/JavaScript30/tree/master/08%20-%20Fun%20with%20HTML5%20Canvas)

hackmd筆記：[JS30 - Fun with HTML5 Canvas](https://hackmd.io/@six/r1iTUTraO#/)

鐵人賽文章：[JS30-Day8-Fun with HTML5 Canvas](https://ithelp.ithome.com.tw/articles/10193989)

YT影片：[深入淺出 Javascript30 快速導覽：Day 8：Fun with HTML5 Canvas](https://www.youtube.com/watch?v=3862i0RdKLU&list=PLEfh-m_KG4dYbxVoYDyT_fmXZHnuKg2Fq&index=8&ab_channel=Alex%E5%AE%85%E5%B9%B9%E5%98%9B)




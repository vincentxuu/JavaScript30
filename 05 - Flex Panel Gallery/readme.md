# JS30-Day5-Flex Panels Image Gallery

### 今日重點：
#### 透過點擊圖片可以打開照片，並帶有動畫移動文字。

--- 

### 學習筆記：

關鍵
1. 設定CSS
2. 取得元素的控制權
3. 監聽按鈕
4. 控制按鈕來改變CSS

*設定CSS變數*
```
//最外圈的css要橫排
.panels {
      min-height: 100vh;
      overflow: hidden;
      display:flex;
    }

//每一格的css要置中,等分
.panel {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
//設定文字的排列,等分
.panel > * {
      margin: 0;
      width: 100%;
      transition: transform 0.5s;
      flex: 1 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
//設定css動畫
.panel > *:first-child { transform: translateY(-100%); } 
.panel.open-active > *:first-child { transform: translateY(0%); } 
.panel > *:last-child { transform: translateY(100%); } 
.panel.open-active > *:last-child { transform: translateY(0); }  
```

*取得元素的控制權*
``` 
const panels = document.querySelectorAll('.panel');
```


*監聽元素*
```
panels.forEach(panel => panel.addEventListener('click',toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend',toggleActive));
```

*控制按鈕來改變CSS*
```
function toggleOpen(){
  this.classList.toggle('open');
}
function toggleActive(e){
  if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
  }
}
```
---

`每次看到不同思維，都覺得很有收穫，補充在下方`
```
 //一樣都是選擇判斷，不同做法

function toggleActive(e){
  if(e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
    }
}

function toggleActive(e){
  if(e.propertyName.indexOf('flex')!== -1) {
    this.classList.toggle('open-active');
    }
}
    
```
--- 

## 參考資料
github:
- [05 - Flex Panel Gallery](https://github.com/guahsu/JavaScript30/tree/master/05_Flex-Panel-Gallery)
- [05 Flex 实现可伸缩的图片墙 中文指南](https://github.com/soyaine/JavaScript30/tree/master/05%20-%20Flex%20Panel%20Gallery)

hackmd筆記：[JS30 - Flex Panels Image Gallery](https://hackmd.io/lQGMdiIJTeKPJD7QJVMjuw)

鐵人賽文章：[JS30-Day5-Flex Panels](https://ithelp.ithome.com.tw/articles/10193306)

YT影片：[深入淺出 Javascript30 快速導覽：Day 5：Flex Panel Gallery](https://www.youtube.com/watch?v=7hGFTNGommU&list=PLEfh-m_KG4dYbxVoYDyT_fmXZHnuKg2Fq&index=5&t=1749s&ab_channel=Alex%E5%AE%85%E5%B9%B9%E5%98%9B)




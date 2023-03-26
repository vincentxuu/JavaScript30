# JS30-Day3-Playing with CSS Variables and JS
### 今日重點：
#### 透過移動橫桿可以變換照片的外框、模糊度，選取顏色變化可以改變外框顏色。

--- 

### 學習筆記：

關鍵
1. 設定CSS變數
2. 取得元素的控制權
3. 監聽按鈕
4. 控制按鈕來改變CSS

*設定CSS變數*
```
:root {
      --base: #ffc600;
      --spacing: 10px;
      --blur: 10px;
    }

    img {
      padding: var(--spacing);
      background: var(--base);
      filter: blur(var(--blur));
    }

    .hl {
      color: var(--base);
    }
```

*取得元素的控制權*
``` 
const inputs = document.querySelectorAll('.controls input');
```


*監聽元素*
```
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
```

*控制按鈕來改變CSS*
```
function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }
```
---

`看到不同思維解法，學習到很多，補充在下方`
```

    針對每一個元素監控，然後改變元素內容

    對新手（我）來說比較直覺，也不會有this的困擾，不過程式碼就會比較長。

      //監聽每一個input
      document.getElementById("spacing").addEventListener("input", widthChange);
      document.getElementById("blur").addEventListener("input", imgBlur);
      document.getElementById("color").addEventListener("input", colorChange);

      //改變對應的元素
      function widthChange(event) {
        let newWidth = event.target.value;
        document.documentElement.style.setProperty("--spacing",`${newWidth}px`);
      }
      function imgBlur(event) {
        let newBlur = event.target.value;
        document.documentElement.style.setProperty("--blur", `${newBlur}px`);
      }
      function colorChange(event) {
        let newColor = event.target.value;
        document.documentElement.style.setProperty("--color", `${newColor}`);
      }
```
--- 

## 參考資料
github:
- [03 - CSS Variables](https://github.com/guahsu/JavaScript30/tree/master/03_CSS-Variables)
- [03 CSS Variable](https://github.com/soyaine/JavaScript30/tree/master/03%20-%20CSS%20Variables)

hackmd筆記：[JS30 - laying with CSS Variables and JS](https://hackmd.io/JY6jXBqqRT-VV3XhPH6YkA?view)

鐵人賽文章：[JS30-Day3-CSS Variables](https://ithelp.ithome.com.tw/articles/10192836)

YT影片：[深入淺出 Javascript30 快速導覽：Day 3：Playing with CSS Variables and JS](https://www.youtube.com/watch?v=fIE2Lmfbo4k&ab_channel=Alex%E5%AE%85%E5%B9%B9%E5%98%9B)




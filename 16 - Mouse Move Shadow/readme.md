# JS30-Day16-LocalStorage and Event Delegation


### 今日重點：
#### 讓網頁上的文字陰影可以跟著滑鼠移動。

--- 

### 學習筆記：

關鍵
1. 取得元素的控制權
2. 監聽元素
3. 改變畫面內容

*取得元素的控制權*
``` 
      const hero = document.querySelector(".hero");
      const text = hero.querySelector("h1");
```

*監聽元素*
```
      hero.addEventListener("mousemove", shadow);

```

*改變畫面內容*
```
       function shadow(e) {
        const width = hero.offsetWidth;
        const height = hero.offsetHeight;
        let x = e.offsetX;
        let y = e.offsetY;

        console.log(width, height, x, y);

        if (this !== e.target) {
          x = x + e.target.offsetLeft;
          y = y + e.target.offsetTop;
        }
        console.log(this);
        console.log(width, height, x, y);
        const walk = 200; // 500px

        const xWalk = Math.round((x / width) * walk - walk / 2);
        const yWalk = Math.round((y / width) * walk - walk / 2);

        console.log(xWalk, yWalk);

        text.style.textShadow = `
        ${xWalk}px ${yWalk}px 1px rgba(255,0,255,0.3),
        ${xWalk * -1}px ${yWalk * -1}px 1px rgba(255,0,0,0.3), 
        ${xWalk * -0.3}px ${yWalk * -0.3}px 1px rgba(0,0,255,0.3)`;
      }
```
不同寫法：

```
//No.1
        let x = e.offsetX ;
        let y = e.offsetY ;
//No.2
        let { offsetX , offsetY } = e ;
//No.3
        let { offsetX : x , offsetY : y } = e ;
```

--- 

## 參考資料
github:
- [16 - Mouse Move Shadow](https://github.com/guahsu/JavaScript30/tree/master/16_Mouse-Move-Shadow)
- [16 文字阴影的鼠标随动效果](https://github.com/soyaine/JavaScript30/tree/master/16%20-%20Mouse%20Move%20Shadow)

hackmd筆記：[JS30 - CSS Text Shadow Mouse Move Effect](https://hackmd.io/QPM7T3t5TQmJIUBJAT4AqA?view)

鐵人賽文章：[JS30-Day16-Mouse Move Shadow](https://ithelp.ithome.com.tw/articles/10195564)

YT影片：[深入淺出 Javascript30 快速導覽：Day Day 16：Mouse Move Shadow](https://www.youtube.com/watch?v=fa9Lk2KnARY&list=PLEfh-m_KG4dYbxVoYDyT_fmXZHnuKg2Fq&index=18&t=1455s)




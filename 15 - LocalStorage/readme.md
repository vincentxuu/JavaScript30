# JS30-Day15-LocalStorage and Event Delegation


### 今日重點：
#### 讓網頁的菜單選項可以儲存在瀏覽器上。

--- 

### 學習筆記：

關鍵
1. 取得元素的控制權
2. 監聽元素
3. 改變畫面內容

*取得元素的控制權*
``` 
      const addItems = document.querySelector(".add-items");
      const itemsList = document.querySelector(".plates");
      const items = JSON.parse(localStorage.getItem("items")) || [];
```

*監聽元素*
```
      addItems.addEventListener("submit", addItem);
      itemsList.addEventListener("click", toggleDown);
```

*改變畫面內容*
```
      function addItem(e) {//增加菜單選項
        e.preventDefault();
        const text = this.querySelector("[name=item]").value;
        const item = {
          text,
          Done: false,
        };
        items.push(item);//更新JS資料
        localStorage.setItem("items", JSON.stringify(items));//更新LocalStorage資料
        this.reset();//清除畫面輸入框的資料
        createList(items, itemsList);//更新畫面
      }

      function createList(plates = [], platesList) {//把選項加到畫面裡
        platesList.innerHTML = plates
          .map((plate, i) => {
            return `
             <li>
              <input type="checkbox" data-index=${i} id="item${i}" ${
              plate.done ? "checked" : ""
            } /> 
               <label for="item${i}">${plate.text}</label>
             </li>
            `;
          })
          .join("");//去除陣列的,
      }

      function toggleDown(e) {//控制方框的狀態
        if (!e.target.matches("input")) return;//避免重複觸發，判斷是input才處理
        const el = e.target;
        const index = el.dataset.index;
        items[index].done = !items[index].done;//改變done的true/false
        localStorage.setItem("items", JSON.stringify(items));//更新LocalStorage資料
        createList(items, itemsList);//更新畫面
      }

      createList(items, itemsList);//更新畫面
```
小秘訣：
1. 陣列轉換成內容時，要加入join("")，把原本陣列分隔的取代掉。
2. LocalDtorage裡面要放字串，不能直接放物件，要用JSON.stringify()將物件轉成字串
--- 

## 參考資料
github:
- [15 - LocalStorage](https://github.com/guahsu/JavaScript30/tree/master/15_LocalStorage)
- [15 LocalStorage](https://github.com/soyaine/JavaScript30/tree/master/15%20-%20LocalStorage)

hackmd筆記：[JS30 - LocalStorage](https://hackmd.io/79MLfaOSQLKoopICdhk66g)

鐵人賽文章：[JS30-Day15-LocalStorage](https://ithelp.ithome.com.tw/articles/10195522)

YT影片：[深入淺出 Javascript30 快速導覽：Day 15：LocalStorage](https://www.youtube.com/watch?v=gWpBTV7ihE4&list=PLEfh-m_KG4dYbxVoYDyT_fmXZHnuKg2Fq&index=16&t=1395s)




# JS30-Day6-Ajax Type Ahead

### 今日重點：
#### 輸入特定的城市名片段後會出現 json 檔中符合該名字的城市

--- 

### 學習筆記：

關鍵
1. 透過ajax取得城市資料
2. 取得元素的控制權
3. 監聽元素
4. 改變顯示內容

*透過Ajax取得城市資料*
```
const cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));
```

*取得元素的控制權*
``` 
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
```


*監聽元素*
```
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
```

*改變顯示內容*
```
//找到符合的內容
function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
      return place.city.match(regex) || place.state.match(regex);
  });
}

//顯示符合的內容

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
        .map((place) => {
            const regex = new RegExp(this.value, "gi");
            const cityName = place.city.replace(
              regex,
              `<span class="hl">${this.value}</span>`
            );
            const stateName = place.state.replace(
              regex,
              `<span class="hl">${this.value}</span>`
            );
            return `
              <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
              </li>
              `;
          })
          .join("");
        suggestions.innerHTML = html;
      }

```
`看到不同的做法提供大家參考`

```
const cities = [];
  fetch(endpoint)
    .then((blob) => blob.json())
    .then((data) => cities.push(...data));

let cities = [];
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities = data);

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
// 原先的population是字串，*1之後就是數字，再轉換加逗號
function numberWithCommas(x) {
  return (x * 1) .toLocalString();
}
```
關於正規表達式

又稱正規表示式/正則表達式/正則運算...超多種用法），英文是Regular Expression，實在是太艱澀難懂，找了一個影片跟練習網站之後要安排時間來鑽研。

練習網站：[RegexOne](https://regexone.com/)

練習網站：[ihateregex](https://ihateregex.io/)

練習網站：[regexr](https://regexr.com/)

YT影片：[深入淺出正則表達式](https://www.youtube.com/watch?v=Ex6cCWDwNJU&ab_channel=Will%E4%BF%9D%E5%93%A5)

--- 


## 參考資料
github:
- [JS30-Day6-Ajax Type Ahead](https://github.com/a90100/JavaScript30/tree/master/06%20-%20Type%20Ahead)
- [06 - Type Ahead](https://github.com/guahsu/JavaScript30/tree/master/06_Type-Ahead)
- [06 Fetch 结合 filter 实现快速匹配古诗](https://github.com/soyaine/JavaScript30/tree/master/06%20-%20Type%20Ahead)

hackmd筆記：[JS30 - Ajax Type Ahead](https://hackmd.io/uqMoFG93Rr224PMcxNYbRw)

鐵人賽文章：[JS30-Day6-Type Ahead](https://ithelp.ithome.com.tw/articles/10193500)

YT影片：[深入淺出 Javascript30 快速導覽：Day 6：Type Ahead](https://www.youtube.com/watch?v=_TbG2iuN9kM&list=PLEfh-m_KG4dYbxVoYDyT_fmXZHnuKg2Fq&index=7&t=2600s&ab_channel=Alex%E5%AE%85%E5%B9%B9%E5%98%9B)



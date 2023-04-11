# JS30-Day17-Sorting Band Names without articles


### 今日重點：
#### 將陣列中的資料做排序，顯示在網頁上。

--- 

### 學習筆記：

關鍵
1. 取得元素的控制權
2. 修正資料
3. 改變畫面內容

*取得元素的控制權*
``` 
const band = document.getElementById('bands');

```

*修正資料*
```
function strip (bandName){
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort((a,b)=> strip(a) > strip(b) ? 1 : -1);

```

*改變畫面內容*
```
band.innerHTML = sortedBands.map(a => `<li>${a}</li>`).join('');

```
不同寫法：

```
const sortedBands = bands.sort(function (a,b) {
        if  (strip(a) > strip(b) ){
                return 1;
        }else{
                return -1;
        }
});

const sortedBands = bands.sort((a,b) => 
        strip(a) > strip(b) ? 1 : -1);


```

--- 

## 參考資料
github:
- [17 - Sort Without Articles](https://github.com/guahsu/JavaScript30/tree/master/17_Sort-Without-Articles)
- [17 数组的去前缀排序](https://github.com/soyaine/JavaScript30/tree/master/17%20-%20Sort%20Without%20Articles)

hackmd筆記：[JS30 - Sorting Band Name without articles](https://hackmd.io/@dadidi910/ryIh0LLC_)

鐵人賽文章：[JS30-Day17-Sort Without Articles](https://ithelp.ithome.com.tw/articles/10195945)

YT影片：[深入淺出 Javascript30 快速導覽：Day 17：Sort Without Articles](https://www.youtube.com/watch?v=_fG7bQTSQ6M&list=PLEfh-m_KG4dYbxVoYDyT_fmXZHnuKg2Fq&index=17)




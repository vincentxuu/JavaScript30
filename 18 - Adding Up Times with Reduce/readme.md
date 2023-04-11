# JS30-Day18-Sorting Band Names without articles


### 今日重點：
#### 將每一個video時間加總，以時分秒表示

--- 

### 學習筆記：

關鍵
1. 取得元素的控制權
2. 調整字串為數字並加總
3. 計算數字

*取得元素的控制權*
``` 
  const li = document.querySelectorAll('li')

```

*調整字串為數字並加總*
```
let seconds = [...li]
            .map(item => item.dataset.time)
            .map(time => {
              let [min ,sec] = time.split(':');
              return min * 60 + sec * 1;
            })
            .reduce((prev,next) => prev + next ,0);

```

*計算數字*
```
let sec = seconds % 60 ;
  console.log(sec)
  let min = ((seconds - sec) / 60) % 60 ;
  console.log(min);
  let hour =  (seconds - min * 60 - sec) / (60 * 60);
  console.log(hour);

  console.log(`${hour}:${min}:${sec}`)
```
不同寫法：

```
//Nodelist轉成Array
  let a = Array.from(li).map(item => item.dataset.time) ;
  let b = [...li].map(item => item.dataset.time) ;
  let c = [].map.call(li,item => item.dataset.time) ;
  let d = [].map.apply(li,[item => item.dataset.time]) ;


//字串轉成數字

const [mins, secs] = timeCode.split(':').map(parseFloat);
return (mins * 60) + secs;

const [mins, secs] = timeCode.split(':');
return (mins * 60) + secs * 1;

//數字計算
No1
let sec = seconds % 60 ;
let min = (seconds - sec) / 60 ;
let hour =  (seconds - min * 60 - sec) / (60 * 60);
min = min % 60;

console.log(`${hour}:${min}:${sec}`)

No2
let sec = seconds % 60 ;
let min = ((seconds - sec) / 60) % 60 ;
let hour =  (seconds - min * 60 - sec) / (60 * 60);

console.log(`${hour}:${min}:${sec}`)

No3
const hour = Math.floor(seconds / 3600);
seconds = seconds % 3600;

const min = Math.floor(seconds / 60);
seconds = seconds % 60;

console.log(hour, min, seconds);

```

--- 

## 參考資料
github:
- [17 - Sort Without Articles](https://github.com/guahsu/JavaScript30/tree/master/17_Sort-Without-Articles)
- [17 数组的去前缀排序](https://github.com/soyaine/JavaScript30/tree/master/17%20-%20Sort%20Without%20Articles)

hackmd筆記：[JS30 - Sorting Band Name without articles](https://hackmd.io/@dadidi910/ryIh0LLC_)

鐵人賽文章：[JS30-Day17-Sort Without Articles](https://ithelp.ithome.com.tw/articles/10195945)

YT影片：[深入淺出 Javascript30 快速導覽：Day 17：Sort Without Articles](https://www.youtube.com/watch?v=_fG7bQTSQ6M&list=PLEfh-m_KG4dYbxVoYDyT_fmXZHnuKg2Fq&index=17)




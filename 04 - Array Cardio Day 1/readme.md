# JS30-Day4-Array Cardio Day 1

### 今日重點：
#### 認識陣列的處理方法

--- 

### 學習筆記：

方法
1. filter()
2. map()
3. sort()
4. reduce()

*filter()應用*

第1題
```
let ans = inventors.filter(function(person){
  if(person.year >= 1500 && person.year < 1600){
      return person;
  }
});
console.table(ans);

//簡化 箭頭函式
let ansss = inventors.filter(person => (person.year >= 1500 && person.year < 1600));
   
console.table(ansss);

```
第6題
```
const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));
const de = links.map(link => link.textContent).filter(streetName => streetName.includes('de'));
```
*map()應用*

第2題
``` 
//常見的比較forEach && map，差別是有沒有產生新陣列，forEach 沒有 / map 有

// 用map寫
const ans = inventors.map(function(person){
  return person.first+''+person.last
})
console.table(ans)

//簡化 箭頭函式＋樣板字串
const ans = inventors.map(person =>$person.first+" "+person.last)
console.table(ans)


//用 forEach寫
let anss = []
inventors.forEach(function(person){
  return anss.push(person.first + " " +person.last )
})

console.table(anss)

//簡化 箭頭函式＋樣板字串
let anss = []
inventors.forEach(person =>anss.push(`${person.first} ${person.last}`))

console.table(anss)
```
第6題
```
const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));
const de = links.map(link => link.textContent).filter(streetName => streetName.includes('de'));
```
*sort()應用*

第3題
```
const person = inventors.sort(function(a,b){
  if(a.year > b.year ){
    return 1;
  }else{
    return -1;
  }
});
console.table(person)

//簡化 箭頭函式 條件運算子
const person = inventors.sort((a,b) => a.year > b.year ? 1 : -1 ) 
console.table(person)
```
第5題
```
inventors.forEach(function(inventor){
  inventor.years = inventor.passed-inventor.year
});
const yearsList = inventors.sort(function(a,b){
  if ((a.passed - a.year) > (b.passed - b.year)){
    return 1;
  }else {
    return -1;
  }
}) 
console.table(yearsList);

//簡化 箭頭函式
inventors.forEach(inventor => inventor.years = inventor.passed-inventor.year);
const yearsList = inventors.sort((a,b) =>
  (a.passed - a.year) > (b.passed - b.year) ? 1: -1 )
console.table(yearsList);
```
第7題
```
let list = people.sort((a,b)=>{
let [aFirst,aLast] = a.split(',');
let [bFirst,bLast] = b.split(',');
  return aLast > bLast ? 1 : bLast > aLast ? -1 : 0; 
})
console.table(list);
```

*reduce()應用*

第4題
```
const totalYears = inventors.reduce(function(total,person){
  return total+(person.passed-person.year);
},0);
console.log(totalYears)

// 簡化 箭頭函式
const totalYears = inventors.reduce((total,person) => {
  return total+(person.passed-person.year);
},0);
console.log(totalYears)
```

第8題
```
let sumList = data.reduce((object,item)=>{
  if(!object[item]) object[item] = 1
  else object[item]+=1
    return object
},{})
console.table(sumList)
```
---

`一樣是做比較有看到不同用法，提供大家參考`

第3題
```
const person = inventors.sort((a,b) => a.year > b.year ? 1 : -1 ) 

const person = inventors.sort((a,b) => a.year - b.year ) 
```
第5題
```
const yearsList = inventors.sort((a,b) => (a.passed - a.year) > (b.passed - b.year) ? 1: -1 )
    
const yearsList = inventors.sort((a,b) => (a.passed - a.year) - (b.passed - b.year) )
```
--- 

## 參考資料
github:
- [04 - Array Cardio Day 1](https://github.com/guahsu/JavaScript30/tree/master/04_Array-Cardio-Day-1)
- [04 Array Cardio 💪 指南一](https://github.com/soyaine/JavaScript30/tree/master/04%20-%20Array%20Cardio%20Day%201)

hackmd筆記：[JS30 - Array Cardio Day](https://hackmd.io/Z9rZgNC6RhKm0zubfHDiPg?view)

鐵人賽文章：[JS30-Day4-Array Cardio](https://ithelp.ithome.com.tw/articles/10192991)

YT影片：[深入淺出 Javascript30 快速導覽：Day 4：Array Cardio Day 1](https://www.youtube.com/watch?v=8JzVwrzkUrM&list=PLEfh-m_KG4dYbxVoYDyT_fmXZHnuKg2Fq&index=4&ab_channel=Alex%E5%AE%85%E5%B9%B9%E5%98%9B)




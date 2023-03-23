# JS30-Day7-Array Cardio Day 2

### 今日重點：
#### 認識陣列的處理方法

--- 

### 學習筆記：

方法
1. some()
2. every()
3. find()
4. findIndex()
5. splice()

*some()應用*

第1題
```
const Adult = people.some(person => new Date().getFullYear() - person.year >= 19)
console.log(Adult)
```
*every()應用*

第2題
``` 
const Adult = people.every(person => new Date().getFullYear() - person.year >= 19)
console.log(Adult)
```
*find()應用*

第3題
```
const comment = comments.find(coments => coments.id === 823423)
console.log(comment)
```
*findIndex()應用*

第4題
```
const comment = comments.findIndex(coments => coments.id === 823423)
console.log(comment)
```

第5題
```
const comment = comments.findIndex(coments => coments.id === 823423)
const delComment = comments.splice(comment, 1)
console.log(comments)
```
---

`第5題一樣是刪除不同用法，提供大家參考`

```
//splice 直接在陣列中刪除，就不會恢復
const comment = comments.findIndex(coments => coments.id === 823423)
const delComment = comments.splice(comment, 1)
console.log(comments)

//slice 複製一個新陣列，拼接出刪除項目的前後，不影響原陣列
const newComment = [
  ...comments.slice(0, comment),
  ...comments.slice(comment+1)
]
console.log(newComment)
```
--- 

## 參考資料
github:
- [JS30-Day7-Array Cardio 2](https://github.com/a90100/JavaScript30/tree/master/07%20-%20Array%20Cardio%20Day%202)
- [07 - Array Cardio Day 2](https://github.com/guahsu/JavaScript30/tree/master/07_Array-Cardio-Day-2)
- [07 Array Cardio 💪 指南二](https://github.com/soyaine/JavaScript30/tree/master/07%20-%20Array%20Cardio%20Day%202)

hackmd筆記：[JS30 - Array Cardio Day2](https://hackmd.io/5BjGYM3SSg-o7FTOKqUQsg?view)

鐵人賽文章：[JS30-Day7-Array Cardio 2](https://ithelp.ithome.com.tw/articles/10193848)

YT影片：[深入淺出 Javascript30 快速導覽：Day 7：Array Cardio Day 2](https://www.youtube.com/watch?v=OdNA37WSwzc&list=PLEfh-m_KG4dYbxVoYDyT_fmXZHnuKg2Fq&index=9&t=1748s&ab_channel=Alex%E5%AE%85%E5%B9%B9%E5%98%9B)




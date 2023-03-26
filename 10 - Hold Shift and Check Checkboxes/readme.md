# JS30-Day10-Hold Shift to Check Multiple Checkboxes

### 今日重點：
#### 點擊代辦清單時，可以使用shift鍵連續選取兩個清單之間的清單。

--- 

### 學習筆記：

關鍵
1. 取得元素的控制權
2. 監聽滑鼠
3. 監聽滑鼠，放入狀態判斷
4. 放入判斷改變畫面

*取得元素的控制權*
``` 
const check = document.querySelectorAll('.item input')
```


*監聽元素*
```
check.forEach(checkbox => checkbox.addEventListener('click',handleCheck))

```

*放入判斷改變畫面*
```
let lastChecked

function handleCheck(e){
  console.log(e)
  console.log(this.checked)
  let isBetween = false ;
  if(e.shiftKey&&this.checked){
    check.forEach(checkbox => {
      console.log(checkbox);
      if(checkbox===this || checkbox===lastChecked){
        isBetween=!isBetween;
        console.log('Starting to check them in between!')
        console.log(e)
      }
      if(isBetween){
        checkbox.checked = true;
      }
    })
  }
  lastChecked = this;
}
```
---

`不同思維完成同一功能，補充在下方`
```
//用slice來做區間判斷
const checkboxes = Array.from(document.querySelectorAll('.inbox input[type="checkbox"]'))
checkboxes.forEach(input => input.addEventListener('click',clickHandler))
  
let lastCheck = null ;

function clickHandler(e){
   console.log(e);
   if(this.checked){
     if(e.shiftKey && lastCheck !== null){
       let nowCheck = checkboxes.indexOf(this);
       checkboxes
         .slice(
           Math.min(nowCheck, lastCheck),
           Math.max(nowCheck, lastCheck))
         .forEach(input => (input.checked = true));
     }
     lastCheck = checkboxes.indexOf(this);
   }else {
     lastCheck = null;
   }
}
```
--- 

## 參考資料
github:
- [10 - Hold Shift and Check Checkboxes](https://github.com/guahsu/JavaScript30/tree/master/10_Hold-Shift-and-Check-Checkboxes)
- [10 JS 实现 Checkbox 中按住 Shift 的多选功能](https://github.com/soyaine/JavaScript30/tree/master/10%20-%20Hold%20Shift%20and%20Check%20Checkboxes)

hackmd筆記：[JS30 - Hold Shift to Check Multiple Checkboxes](https://hackmd.io/mIBGH45WQhSTCwU0OjMSiQ)

鐵人賽文章：[JS30-Day10-Hold Shift to Check Multiple Checkboxes](https://ithelp.ithome.com.tw/articles/10194245)

YT影片：[深入淺出 Javascript30 快速導覽：Day 10：Hold Shift and Check Checkboxes](https://www.youtube.com/watch?v=tYBwiyjC_6A&list=PLEfh-m_KG4dYbxVoYDyT_fmXZHnuKg2Fq&index=11&t=2212s)




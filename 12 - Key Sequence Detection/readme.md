# JS30-Day12-Key Sequence Detection (KONAMI CODE)


### 今日重點：
#### 操作影片播放器的按鈕，達到快轉、倒退、播放速率高低、音量大小的效果。

--- 

### 學習筆記：

關鍵
1. 監聽鍵盤事件
2. 累加數值並分割
3. 放入判斷比對

*監聽鍵盤事件*
```
window.addEventListener('keyup',(e) => {
    console.log(e.key);
})
```

*累加數值並限制數量*
```
const pressed = []
const secretCode = 'wesbos'

window.addEventListener('keyup',(e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.lenth - 1 , pressed.length - secretCode.length);
  console.log(pressed);
})
```
*放入判斷比對*
```
if(pressed.join('').includes(secretCode)){
    console.log('DING DING!')
    cornify_add();
}
```
--- 

## 參考資料
github:
- [12 - Key Sequence Detection](https://github.com/guahsu/JavaScript30/tree/master/12_Key-Sequence-Detection)
- [12 键盘输入序列的验证指南](https://github.com/soyaine/JavaScript30/tree/master/12%20-%20Key%20Sequence%20Detection)

hackmd筆記：[JS30 - Key Sequence Detection](https://hackmd.io/7mhMEqn0TqOjCHGHPLzzuQ)

鐵人賽文章：[JS30-Day12-Key Sequence Detection](https://ithelp.ithome.com.tw/articles/10195070)

YT影片：[深入淺出 Javascript30 快速導覽：Day 12：Key Sequence Detection](https://www.youtube.com/watch?v=hY5JxUquoXM&list=PLEfh-m_KG4dYbxVoYDyT_fmXZHnuKg2Fq&index=15)




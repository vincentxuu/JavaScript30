# JS30-Day9-14 Must Know Dev Tools Tricks

### 今日重點：
#### 認識除錯的方法

--- 

### 學習筆記：

方法
1. Regular
2. Interpolated
3. Styled
4. warning!
5. Error :|
6. Info
7. Testing
8. clearing
9. Viewing DOM Elements
10. Grouping together
11. counting
12. timing
13. table
14. network

```
// Regular
console.log(123,456)

// Interpolated
console.log("Hello I am a %s string!", "💩");

// Styled
console.log(
  "%c I am some great text",
  "font-size:50px; background:red; text-shadow: 10px 10px 0 blue"
);

// warning!
console.warn(123, 456);

// Error :|
console.error(123, 456);

// Info
console.info(123, 456);

// Testing
console.assert(false, "錯誤");
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "That is wrong!");

// clearing
console.clear()

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(function (dog) {
  console.group(dog["name"]);
  console.log(`${dog["name"]} is ${dog["age"]} years old!`);
  console.groupEnd(dog["name"]);
});

// counting
console.count("Wes");
console.count("Wes");
console.count("Steve");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Steve");
console.count("Steve");
console.count("Steve");
console.count("Steve");

// timing
console.time("fetching data");
  fetch("https://github.com/xu75/JavaScript30")
    .then((data) => data.json())
    .then((data) => {
      console.timeEnd("fetching data");
      console.log(data);
    });
     
// table
console.table(dogs);
```
#### 除了console的運用外，也可以去network這個分類去查看，讀取哪些檔案，哪邊有異狀。
---

`console.log除錯的控制使用，提供大家參考，用在測試時不用註解或是手動刪console.log`

```
// isDev: true ; console.log會出現
// isDev: fslae; console.log會消失
let console = {
  isDev: true;
  log(...args) {
    if(!this.isDev) return;
    window.console.log(...args);
  }
}
console.log(123,456)
```
--- 

## 參考資料
github:
- [09 - Dev Tools Domination](https://github.com/guahsu/JavaScript30/tree/master/09_Dev-Tools-Domination)
- [09 Console 调试技巧指南](https://github.com/soyaine/JavaScript30/tree/master/09%20-%20Dev%20Tools%20Domination)

hackmd筆記：[JS30 - Dev Tools Domination](https://hackmd.io/HlnpufX6Rn-vI-7BCwkiLQ)

鐵人賽文章：[JS30-Day9-Dev Tools Domination](https://ithelp.ithome.com.tw/articles/10194211)

YT影片：[深入淺出 Javascript30 快速導覽：Day 9：Dev Tools Domination](https://www.youtube.com/watch?v=sWBSxMVMbjc&list=PLEfh-m_KG4dYbxVoYDyT_fmXZHnuKg2Fq&index=9&ab_channel=Alex%E5%AE%85%E5%B9%B9%E5%98%9B)




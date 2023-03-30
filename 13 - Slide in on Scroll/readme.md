# JS30-Day13-Slide In on Scroll

### 今日重點：
#### 滾動視窗，讓圖片產生飛進飛出的動態效果。

--- 

### 學習筆記：

關鍵
1. 取得元素的控制權
2. 監聽元素
3. 放入判斷改變圖片CSS

*取得元素的控制權*
``` 
const sliderImages = document.querySelectorAll('.slide-in');
```

*監聽元素*
```
window.addEventListener('scroll', debounce(checkSlide));
```

*放入判斷改變圖片CSS*
```
function checkSlide() {
      sliderImages.forEach(sliderImage => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
          sliderImage.classList.add('active');
        } else {
          sliderImage.classList.remove('active');
        }
      });
    }
```
--- 

## 參考資料
github:
- [13 - Slide in on Scroll](https://github.com/guahsu/JavaScript30/tree/master/13_Slide-in-on-Scroll)
- [13 图片随屏幕滚动而滑入滑出的效果指南](https://github.com/soyaine/JavaScript30/tree/master/13%20-%20Slide%20in%20on%20Scroll)

hackmd筆記：[JS30 - Slide in on Scroll](https://hackmd.io/t5LFL4FYTCOzYK4CdMzCqw?view)

鐵人賽文章：[JS30-Day13-Slide in on Scroll](https://ithelp.ithome.com.tw/articles/10195246)

YT影片：[深入淺出 Javascript30 快速導覽：Day 13：Slide in on Scroll](https://www.youtube.com/watch?v=PRRZlAVvJ7A&list=PLEfh-m_KG4dYbxVoYDyT_fmXZHnuKg2Fq&index=15&t=1751s)




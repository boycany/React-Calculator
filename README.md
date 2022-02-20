# React Calculator 計算機 

## 使用連結

[Demo](https://boycany.github.io/React-Calculator/) 
## 操作說明

1. 按下數字及運算子區塊的按鍵來輸入算式，會顯示在算式列

![1-輸入算式](https://github.com/boycany/React-Calculator/blob/main/documents/calc-1.png)

2. 運算後的結果會同時顯示於結果列及算式列

![2-得到結果](https://github.com/boycany/React-Calculator/blob/main/documents/calc-2.png)

3. 接著可以再繼續輸入算式，即時顯示於算式列。結果列仍保留上次的結果。

![3-可以再繼續輸入算式](https://github.com/boycany/React-Calculator/blob/main/documents/calc-3.png)

4. 若運算的結果超過2的32次方時，會顯示提示文字於結果列。

![4-超過數字上限時會顯示](https://github.com/boycany/React-Calculator/blob/main/documents/calc-4.png)

5. 按下Back鍵則可刪除最新輸入的一個數字或運算子。

![5-Back鍵回復到上一個動作](https://github.com/boycany/React-Calculator/blob/main/documents/calc-4-2.png)

6. 按下Clear鍵可以清空結果列和算式列。

![6-Clear鍵清除結果](https://github.com/boycany/React-Calculator/blob/main/documents/calc-5.png)


7. 電腦版使用者可將計算機拖拉至瀏覽器畫面內任一位置操作。

![7-電腦版使用者可拖拉計算機](https://github.com/boycany/React-Calculator/blob/main/documents/calc-7.gif)

8. 手機版使用者可以上下捲動畫面操作。

![8-手機版使用者可以上下捲動畫面](https://github.com/boycany/React-Calculator/blob/main/documents/calc-8.GIF)

## 系統說明
### 設計框架

使用 React `v17.0.2`

### 安裝套件

* mathjs `計算輸入的算式`
>https://www.npmjs.com/package/mathjs
* react-draggable `拖拉功能`
>https://github.com/react-grid-layout/react-draggable

### 原始碼資料夾說明

* public
    - index.html `首頁`
* src
    - index.js
    - App.js `主要的function及useState原始碼`
    - AppContainer.js `import拖拉功能套件，且為了區分電腦版和手機版顯示，製作的App.js容器`
    - components
        + Button `按鈕組件`
        + Input `結果列以及算式列`
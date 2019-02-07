#### Youtube影片快速下載

使用方式:
1. 安裝套件
```
npm install // npm i
yarn install
```

2. 打開伺服器
```
node server.js
```

3. 輕鬆使用 <br />
打開/src/index.html，在輸入框貼上Youtube影片網址，選擇mp4/mp3格式，按下Convert按鈕下載檔案至瀏覽器預設下載位置

- 影片網址可為短網址，ex: `https://youtu.be/xxxxx`，也可以是長網址，ex: `https://www.youtube.com/watch?v=xxxxx&index=4&t=0s&list=WL`，除v以外的參數貼上也會自動無視
- 上一項的補充，因除v以外的參數都會無視，所以也不會看t參數設定影片的時間區間
- 畫質不可調整，預設為YT未將影片與音檔拆分的最高畫質

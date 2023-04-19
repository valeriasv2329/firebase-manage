# firebase-manage

一個透過 firebase-admin 庫將資料從 firestore 保存到本地的範例項目。

# 使用說明

請先配置私密金鑰:

1. 登入 Firebase 控制台打開目標專案，並選擇專案設定
2. 在頂部菜單中，選擇"服務帳戶"
3. 選擇"Firebase Admin SDK"選項
4. 在底部點擊產生新的私密金鑰
5. 將下載的 json 檔案重命名為 serviceAccountKey.json 並放置於項目根目錄下

接著參考 example.js

```javascript
import {db} from './firebase.js';
import {writeTxt} from './writeTxt.js';

const data = {};

const collection = await db.collection('collection').get();
collection.forEach(doc => data[doc.id] = doc.data());

await writeTxt('collection', data);
```

從 firebase.js 引入的 db 為 firestore 實例對象，可透過 db 訪問目標集合或文件。  
writeTxt 函數可以將對象轉換成文字並寫入寫到 ./out 目錄下。
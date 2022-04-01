# API_Auth

##簡介項目內容
模仿電商平台如蝦皮和博客萊， 使用者分別有消費者，商家和管理者。 該項目為後端測試 利用Postman 測試後端部署是否成功，

後端：nodejs express.js
資料庫： mongodb

1. 消費者只可以購買商品，不可以增加商品
2. 商家可以增加商品用作銷售
3. 管理者(admin) 可以管理消費者和商家行為如果出現不當行為


##成功
如用戶成功註冊，帳號為經過加密，資料會儲存在mongodb，並且有jwt和passport 處理認證項目
<img width="744" alt="螢幕截圖 2022-04-01 下午1 34 03" src="https://user-images.githubusercontent.com/85872659/161201189-6c5c75e7-93ba-4c35-b432-0914fe2afe31.png">
<img width="583" alt="螢幕截圖 2022-04-01 下午1 27 07" src="https://user-images.githubusercontent.com/85872659/161202715-a67e11bc-2d4a-4280-868e-f65dcacc775c.png">


## 系統可以拒絕重覆註冊
<img width="464" alt="螢幕截圖 2022-04-01 下午1 16 51" src="https://user-images.githubusercontent.com/85872659/161202944-80eee912-6ca3-4a29-96b5-c7de0e9fb3b8.png">

## 確認密碼失敗
<img width="495" alt="螢幕截圖 2022-04-01 下午1 17 19" src="https://user-images.githubusercontent.com/85872659/161203024-44c3c201-a6a9-4883-884e-71f4138aaa3e.png">

## 角色錯誤
<img width="622" alt="螢幕截圖 2022-04-01 下午1 19 44" src="https://user-images.githubusercontent.com/85872659/161203102-c7a6e942-61f4-47dc-b858-4fb1066e80de.png">

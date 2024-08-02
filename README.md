# CopyTitleAndUrl
`CopyTitleAndUrl`はfirefox用のアドオンです。  
アクティブなタブのタイトルとURLをmarkdown、pukiwiki、html形式でクリップボードにコピーします。

## 使い方
![README_image_01](https://github.com/user-attachments/assets/79783552-26e2-4425-9e25-f8e818f4d8a9)  
以下のようにクリップボードにコピーされます。  
normalの場合  
```
初めての拡張機能 - Mozilla | MDN
https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
```

markdownの場合  
```
[初めての拡張機能 - Mozilla | MDN](https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
```

pukiwikiの場合  
```
[[初めての拡張機能 - Mozilla | MDN:https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension]]
```

htmlの場合
```
<a href="https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension">初めての拡張機能 - Mozilla | MDN</a>
```

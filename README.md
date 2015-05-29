## About

解决了我在写 markdown 的时候,需要手动上传图片到七牛的麻烦。

运行之后，将需要转换的 md 文件的图片全部替换成七牛的图片地址。例如原始 md 文件为

```
![test](./test.png)

## 图片为本地图片地址

```

替换之后为

```
![test](http://qiniu/pic/test.png)

## 图片为本地图片地址

```
## How to

     
```
git clone https://github.com/zwhu/upMacDownPic.git
```

```
npm install 
```

填写 config.js

```js
module.exports = {
	ACCESS_KEY: '****',
	SECRET_KEY: '****',
	BUCKET: '****',
	LINK_HREF: '****' （七牛给的图片的链接）
};

```

```
/index.js -f test.md 

test.md 为需要替换的 md 文件

```
 



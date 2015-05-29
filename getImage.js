var fs = require('fs');
var path = require('path');
var config = require('./config');

var linkHref = config.LINK_HREF;

module.exports = function (fileName) {
	fs.readFile(fileName, function (err, data) {
		if (err) throw err;

		var str = data.toString().replace(/!\[.+?\]\((.+?)\)/g, function (a, imgPath) {
			var imgName = path.basename(imgPath);
			
			if(/^https?:\/\//.test(imgPath)) {
				return a;
			} else if(!fs.existsSync(imgPath)) {
				console.log(imgPath + ': 图片的路径错误') ;
				return a;
			} else {
				require('./qiniu.js')(imgName, imgPath);
				return a.replace(imgPath, linkHref + imgName);
			}
			
		});
					
		fs.writeFile(fileName, str, function (err) {
			if (err) throw err;
		});

	});
};





var qiniu = require('qiniu');
var config = require('./config');

module.exports = function (filename, path) {
  qiniu.conf.ACCESS_KEY = config.ACCESS_KEY;
  qiniu.conf.SECRET_KEY = config.SECRET_KEY;
  
  function uploadFile(localFile, key, uptoken) {
    var extra = new qiniu.io.PutExtra();
    
    qiniu.io.putFile(uptoken, key, localFile, extra, function (err, ret) {
      if (!err) {
        // 上传成功， 处理返回值
        console.log(ret.key, ret.hash);
        // ret.key & ret.hash
      } else {
        // 上传失败， 处理返回代码
        console.log(err);
        // http://developer.qiniu.com/docs/v6/api/reference/codes.html
      }
    });
  }

  var putPolicy = new qiniu.rs.PutPolicy(config.BUCKET);
  
  uploadFile(path, filename, putPolicy.token());
};

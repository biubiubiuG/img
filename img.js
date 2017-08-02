
var fs = require('fs');
var http = require('http');
var url = require('url');
var path = require('path');


var server = http.createServer(function (requset,response) {
    var urlObj = url.parse(requset.url);
    // console.log(urlObj);
    var pathname = urlObj.pathname;
    // console.log(pathname);
    if (pathname === '/1.jpg') {
        var finalPath = path.join(__dirname,pathname);
        fs.readFile(finalPath,'binary',function (err,data) {
            var img = response.write(data,"binary");
            console.log(img);
            response.end();
        })

    }else {
        response.statusCode = 404;
        response.end('文件未找到');
    }

})
server.listen(3000,function () {
    console.log('服务运行在http://localhost:3000');
});
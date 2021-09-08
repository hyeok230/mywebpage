let express = require('express');
let app = express(); // 웹서버를 동작시키는 프로그램
let router = require('./router/main')(app);
let port = process.env.PORT || 3000;
// html 파일이 views 폴더 하위에 존재함을 알림
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
// html 제외 파일은 public 하위에 존재함을 알림
app.use(express.static('public'));

let server = app.listen(port, function(){
    console.log("Express server has started on port "+ port)
});

const express = require('express')
const app = express()
const path = require('path')

app.use("/html2", express.static(path.join(__dirname, "html")))

// // 미들웨어 함수
// const middle1 = (req, res, next) => {
//     console.log("미들웨어 실행");
//     //다음 미들웨어 또는 라우트 핸들러로 제어를 전달
//     next();
// };
const middle1 = require("./my_modules/middle1")
//미들웨어 등록
app.use(middle1);



app.get('/', function (req, res, next){
    console.log("경로 : ", path.join(__dirname, "html"));
    // res.send('Hello World');
    next();
});

app.get('/', function (req, res){
    console.log("두번째입니다.");
    res.send('Hello World');
});

app.get('/apple', function (req, res){
    res.send('사과')
})

app.get('/home', function (req, res, next){
    res.app.locals.message = 'Hello World';
    // res.sendFile(__dirname+'/home.html')
    next();
}, (req, res)=>{
    //응답 수준의 상태 저장
    res.locals.additionalMessage = 'swag';
    //지정된 상태 값 사용
    const message = `${req.app.locals.mesaage} ${res.locals.additionalMessage}`;
    console.log(message);
    res.sendFile(__dirname+'/home.html');
});
app.get('/grape/:name', function (req, res){
    console.log('path', req.path)
    console.log('params', req.params)
    console.log('query', req.query)
    res.send("포도페이지입니다.")
})


app.listen(3000);
const express = require('express')
const cookieParser = require('cookie-parser');
const app = express()

app.use(cookieParser());

app.get('/',(req,res) => {
    // ("키","값",{속성})
    res.cookie("cookie","chickchok", {
        maxAge:5000 // maxAge : 유효기한
    });
    res.send("<h1>홈입니다.</h1>");
})

app.get("/cookie", (req,res)=>{
    const c1 = req.cookies.cookie;
    console.log(c1);
    res.send("<h1>쿠키 페이지입니다.</h1>");
})

app.get("/clear", (req,res)=>{
    res.clearCookie("cookie");
    res.send("<h1>쿠키가 삭제되었습니다.</h1>");
})

app.get('/login', (req,res) => {
    if("양지아" != undefined){
        res.send("<h5>"+ "양지아" + "입니다.</h5>");
    }else{
        res.send("<h1>로그인되지 않았습니다</h1>");
    }
});

app.get("logout", (req,res)=> {
    res.clearCookie("cookie");
    res.send("<h1>쿠키가 삭제되었습니다.</h1>");
})

app.listen(3000);

// npm i cookie-parser
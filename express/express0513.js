const express = require('express');
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser()); // res, req 요소에서 쿠기 사용 가능

app.get("/",(res, req)=>{
    if(req.cookies.user){
        res.send("쿠키 데이터가 있음. /getUser를 이용하여 쿠키 확인바람");
    }else{
        res.send("쿠키 데이터 없음 /setUser를 이용하여 쿠키 설정바람");
    }
});

app.get("/deleteCookie",(req, res)=>{
    if(req.cookies.user){
        res.clearCookie("user");
        res.redirect("/");
    }else{
        res.send("제거할 쿠키 없음");
    }
})

app.get ("/setUser", (req, res)=>{
    //쿠키 생성
    res.cookie("user", {
        name:"kim",
        age:5
    });
    res.redirect("/getUser");
});

app.get("/getUser", (req, res)=>{
    res.send(req.cookies);
})

app.get("/setUser/:nameId", (req, res)=>{
     //쿠키 생성
     res.cookie("user", {
        name: req.params.nameId,
        age:5
    });
    res.redirect("/getUser");
})

app.listen(8889, function(){
    console.log("8889 포트입니다");
});
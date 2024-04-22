const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.get('/', (req, res)=>{
   //("키", "값", {속성})
    res.cookie("cookie", "chickchock", {
        maxAge:50000
    });
    res.send("<h1>홈입니다</h1>");
});

app.listen(3000);
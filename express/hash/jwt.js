// jwt 발급

const jwt = require("jsonwebtoken");

//jwt 발급 비밀키 
const secret =  "mySecretKey";

const payload = {
    "id": "1",
    "username": "john",
    "roles": "admin"
};

const token = jwt.sign(payload, secret, {expiresIn: '1h', algorithm: "HS256"});

//토근 검증
jwt.verify(token,secret,(err, decode)=>{
    if(err){
        console.error(err);
        return;
    }

    console.error(decode);
})

console.log(token);
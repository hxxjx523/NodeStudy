const express = require(express);
const app = express();




const dotenv = require("dotenv").config();
app.use(morgan('dev'));

const morgan = require("morgan");
const cors = require("cors");
app.use(cors({
    origin: "http://127.0.0.1:5500",
    credentials:true
}))

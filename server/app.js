const express = require("express");
const mongoose = require("mongoose");
const connection = require("./server");

const router = require("./routes/user-routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use("/api", router);
connection
app.listen(5000,()=>{
console.log("all ok")
});



  
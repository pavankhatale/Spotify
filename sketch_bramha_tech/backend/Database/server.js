const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config({path:"./config.env"})
 
const DB = process.env.DATABASE;
const connection=mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database is connected! Listening to localhost 5000");

}).catch((err) => console.log(`no connection + ${err}`));



module.exports = connection;

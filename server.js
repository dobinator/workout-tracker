const express= require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const PORT = process.env.PORT || 8080;
// const db = require("/models");


const app = express();
app.use (logger("dev")); 


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(require ("./routes"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });
mongoose.connection.once("open", ()=>{
    app.listen(PORT, ()=> {
        console.log ("server is running")
    })
}) 
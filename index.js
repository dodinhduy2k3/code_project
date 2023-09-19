const express = require("express")
const app =express()
require("dotenv").config();
const port = process.env.PORT;

app.set("views","./views")
app.set("views engine","pug")

const router = require("./router/client/index.router")

router(app)
// app.get("/",(req,res)=>{
//     res.send("chào đại ca duy")

// })

app.listen(port,() =>{
    console.log(`lang nghe cong ${port}`)

})
const express =require("express")

const app =express()
    //user all routes
   app.use(require("../src/routers"))
   //set port
   app.set("port", process.env.PORT || 3000)

module.exports= app;
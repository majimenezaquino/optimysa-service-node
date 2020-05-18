const {Router} =require("express")
const {IndexController}=require("../controlles/IndexController")
let routes  =Router()
 routes.get("/",IndexController)
 
 module.exports=routes;
 
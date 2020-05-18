const app =require("./src/serve")

app.listen(app.get('port'),()=>{
    console.log(`This application run in port: ${app.get('port')}`)
})
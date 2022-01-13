const express=require ('express');
const { dirname } = require('path/posix');
const app= express()
const myDate = require("./date")
app.use(express.static('myExpress'));
console.log(myDate)
// a middleware to run server 
//between Monday-Fridayfrom 9-17 

//app.use(myDate)



app.get("/",(request,response)=>
response.sendFile(__dirname + "/myExpress/home.html"))
app.get("/about",(request,response)=>
response.sendFile(__dirname + "/myExpress/about.html"))
app.get("/contact",(request,response)=>
response.sendFile(__dirname + "/myExpress/contact.html"))

const port =5000
app.listen(port,(err)=>{
err?console.log(err):console.log(`server running at port ${port}`)
})


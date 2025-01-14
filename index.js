
//Basic Server
require('dotenv').config()
const express = require('express') //storing all the dependencies in express variable 
const app = express() 
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter",(req,res)=>{
    res.send("Hello Saurabh!")
})
app.get("/login",(req,res)=>{
    res.send("<h1>Hello Saurabh Welcome to new page</h1>")
})
 
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// }) 
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
}) 


//npm i dotenv ->to create secure file .env in which we store data .  
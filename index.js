
//Basic Server
require('dotenv').config()
const express = require('express') //storing all the dependencies in express variable 
const app = express() 
const port = 3000

const gitHubData={
  "login": "your-username",
  "id": 123456,
  "node_id": "MDQ6VXNlcjEyMzQ1Ng==",
  "avatar_url": "https://avatars.githubusercontent.com/u/123456?v=4",
  "url": "https://api.github.com/users/your-username",
  "html_url": "https://github.com/your-username",
  "followers": 10,
  "following": 5

}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter",(req,res)=>{
    res.send("Hello Saurabh!")
})
app.get("/login",(req,res)=>{
    res.send("<h1>Hello Saurabh Welcome to new page</h1>")
})

app.get("/github",(req,res)=>{
  res.json(gitHubData)
})
 
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// }) 
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
}) 


//npm i dotenv ->to create secure file .env in which we store data .  
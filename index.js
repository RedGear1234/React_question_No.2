
const express = require("express")

const app = express()


app.get('https://63a415ae821953d4f2a8d860.mockapi.io/users', (req, res)=>{
  console.log(req)
})

app.listen("3000", () =>{
  console.log(`listing on port 3000`)
})

const express = require("express")

const app = express()
console.log(app)

app.listen("3000", () =>{
  console.log(`listing on port 3000`)
})
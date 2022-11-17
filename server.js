
const express = require("express")
const app = express()
const PORT = 3000
const fruits = require("./models/fruits")
const vegetables = require("./models/vegetables")
const reactViews = require('express-react-views')


app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())

app.use((req, res, next) => {
  console.log("Im running for all routes")
  console.log("1. middleware")
  next()
})

app.use(express.urlencoded({extended: false}))


app.get('/vegetables', function(req, res){
  res.render('./VegeIndex', { vegetables: vegetables });
});    
// The view file

app.get("/vegetables/new", (req, res) => {
  console.log("2. controller")
  res.render("NewVeg")
})

app.post("/vegetables", (req, res) => {
  console.log("2. controller")
  // console.log(req.body)
  if(req.body.readyToeat === "on"){
    req.body.readyToeat = true
  } else{
    req.body.readyToeat = false
  }
  console.log(vegetables)
  // will push the fruit array
  vegetables.push(req.body)
  console.log(vegetables) 
  // res.send("data received") // When we wanna see something on the page
  res.redirect("vegetables") //When we want it to go back to the home page
})



app.get("/vegetables/:indexOfVegetables", (req, res) => {
  res.render("ShowVeg", vegetables[req.params.indexOfVegetables])
})
// the url vegetables/i the array number

app.get("/fruits", (req, res) => {
  console.log("2. controller")
  res.render("Index", {fruits: fruits})
})

app.get("/fruits/new", (req, res) => {
  console.log("2. controller")
  res.render("New")
})

app.post("/fruits", (req, res) => {
  console.log("2. controller")
  // console.log(req.body)
  if(req.body.readyToeat === "on"){
    req.body.readyToeat = true
  } else{
    req.body.readyToeat = false
  }
  console.log(fruits)
  // will push the fruit array
  fruits.push(req.body)
  console.log(fruits) 
  // res.send("data received") When we wanna see something on the page
  res.redirect("/fruits") //When we want it to go back to the home page
})

app.get("/fruits/:indexOfFruit", (req, res) => {
  // res.send(fruits[req.params.indexOfFruit])
  res.render("Show", {fruit: fruits[req.params.indexOfFruit]})
})



app.listen(PORT, () => { 
  console.log(`Listening on port: ${PORT}`)
});
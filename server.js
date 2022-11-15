const express = require("express")
const app = express()
const PORT = 3000
const fruits = require(('./models/fruits'))
const vegetables = require('./models/vegetables')

// we can write the app.engine in this way too

// const reactViews = require("express-react-views")
// app.engine("jsx", reactViews.createEngine())

app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())

app.get("/", (req, res) => {
  res.send(fruits)
})


app.get('/fruits', function(req, res){
  res.render('Index', { fruits: fruits });
});  


app.get("/:indexOfFruit", (req, res) => {
  res.render("Show", fruits[req.params.indexOfFruit])

})

app.get('/vegetables', function(req, res){
  res.render('./vegetable/VegeIndex', { vegetables: vegetables });
});    
// The view file

app.get("/vegetables/:indexOfVegetables", (req, res) => {
  res.render("Show", vegetables[req.params.indexOfVegetables])
})
// the url vegetables/i the array number


app.listen(PORT, () => { 
  console.log(`Listening on port: ${PORT}`)
}) 
// listening port


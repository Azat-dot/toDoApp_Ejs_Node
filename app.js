const express = require('express');
const bodyParser = require("body-parser");

const app = express();
 
let items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
   
   var options = {
      weekday: "long",
      day: "numeric",
      month: "long"
   };
   
   var today = new Date();

   var day = today.toLocaleDateString("ru", options)

   res.render("list", {kindOfDay: day, kindOfFoods: items});
   

});

app.post("/", function(req, res) {
 let item = req.body.newItem

   items.push(item);

   res.redirect('/')
})



app.listen(3000, function() {
   console.log("listening on port 3000")
});
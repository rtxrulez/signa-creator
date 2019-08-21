var express = require("express");

var app = express();

var cities = [
  {
    id: 1,
    name: 'Горький'
  },
  {
    id: 2,
    name: 'Москва'
  },
  {
    id: 3,
    name: 'Казань'
  }
]

app.get("/", function(req, res) {
  res.send("Hello API");
});

app.get("/city/:id", function(req, res) {
  var city = cities.find(function(city) {
    return city.id === Number(req.params.id)
  })
  res.send(city.name);
});

app.listen("8080", function() {
  console.log('Singa Creator server start!')
});

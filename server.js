var express = require("express");
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;

var app = express();
var db

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var cities = [
  {
    id: 1,
    name: "Горький"
  },
  {
    id: 2,
    name: "Москва"
  },
  {
    id: 3,
    name: "Казань"
  }
];

app.get("/", function(req, res) {
  // res.send("Hello API");
  res.send(cities);
});

app.get("/city/:id", function(req, res) {
  var city = cities.find(function(city) {
    return city.id === Number(req.params.id);
  });
  res.send(city.name);
});

app.put("/city/:id", function(req, res) {
  var city = cities.find(function(city) {
    return city.id === Number(req.params.id);
  });
  city.name = req.body.name;
  res.sendStatus(200);
});

app.delete("/city/:id", function(req, res) {
  cities = cities.filter(function(city) {
    return city.id !== Number(req.params.id);
  });
  res.sendStatus(200);
});

app.post("/street", function(req, res) {
  var city = {
    id: Date.now(),
    city: req.body.street
  };
  cities.push(city);
  res.send(city);
});

// app.listen("3001", function() {
//   console.log("Singa Creator server start!");
// });


MongoClient.connect('mongodb://localhost:27017/myapi', function(err, database) {
  if(err) {
    return console.log('err: ', err)
  }
})

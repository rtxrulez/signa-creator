var express = require("express");
const bodyParser = require("body-parser");
const ObjectID = require("mongodb").ObjectID;

let app = express();
var db = require("./db");
var artistsController = require("./controllers/artists");
console.log("ddd", db.get());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/artists", artistsController.all);

app.get("/artists/:id", artistsController.findById);

app.post("/artists", artistsController.create);

app.put("/artists/:id", artistsController.update);

app.delete("/artists/:id", artistsController.delete);

db.connect("mongodb://127.0.0.1:27017", function(err) {
  if (err) {
    return console.log(err);
  }
  app.listen(3012, () => {
    console.log("API Start!");
  });
});

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

app.get("/artists/:id", (req, res) => {
  db.get()
    .collection("artists")
    .findOne({ _id: ObjectID(req.params.id) }, (err, docs) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.send(docs);
    });
});

app.post("/artists", (req, res) => {
  var artist = {
    name: req.body.name
  };
  db.get()
    .collection("artists")
    .insert(artist, (err, dbResult) => {
      if (err) {
        console.log("Error", err);
        res.send(500);
      }
      res.send(artist);
    });
});

app.put("/artists/:id", (req, res) => {
  db.get()
    .collection("artists")
    .updateOne(
      { _id: ObjectID(req.params.id) },
      {
        name: "test"
      },
      (err, docs) => {
        if (err) {
          console.log(err);
          return res.sendStatus(500);
        }
        res.sendStatus(200);
      }
    );
});

app.delete("/artists/:id", (req, res) => {
  db.get()
    .collection("artists")
    .deleteOne({ _id: ObjectID(req.params.id) }, (err, docs) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.sendStatus(200);
    });
});

db.connect("mongodb://127.0.0.1:27017", function(err) {
  if (err) {
    return console.log(err);
  }
  app.listen(3012, () => {
    console.log("API Start!");
  });
});

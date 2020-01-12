const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const app = express();
const dbConf = require("../config/dbConf");
const AppRoutes = require("./routes");

console.log("rrr", dbConf.url);
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(dbConf.url, (err, database) => {
  if (err) return console.log("DB Error: ", err);

  // Make sure you add the database name and not the collection name
  const db = database.db("singa");

  // запускаем прослушивание путей
  // AppRoutes(app, db);

  app.listen(port, () => {
    console.log("We are live on " + port);
  });
});

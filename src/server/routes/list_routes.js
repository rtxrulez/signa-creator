const ObjectID = require("mongodb").ObjectID;
const dbConf = require("../../config/dbConf");

module.exports = (app, db) => {
  app.get("/list", (req, res) => {
    res.send("List route");
  });

  app.post("/list", (req, res) => {
    const listItem = req.body;

    db.collection(dbConf.singaListCollection).insert(
      listItem,
      (err, result) => {
        if (err) {
          res.send({ error: "An error has occurred" });
        } else {
          res.send(result.ops[0]);
        }
      }
    );
    console.log("ListItem Add!");
  });

  app.get("/getlist", (req, res) => {
    db.collection(dbConf.singaListCollection)
      .find()
      .toArray((err, result) => {
        res.send(result);
      });
  });
};

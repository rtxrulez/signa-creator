const ObjectID = require("mongodb").ObjectID;
const dbConf = require("../../config/dbConf");

module.exports = (app, db) => {
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

  app.get("/list", (req, res) => {
    db.collection(dbConf.singaListCollection)
      .find()
      .toArray()
      .then(result => {
        res.send(result);
      });
  });

  app.get("/list/:id", (req, res) => {
    console.log("req.params.id", req.params.id);
    db.collection(dbConf.singaListCollection)
      .findOne({ _id: ObjectID(req.params.id) })
      .then(result => {
        res.send(result);
      });
  });
};

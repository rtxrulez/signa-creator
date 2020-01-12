const ObjectID = require("mongodb").ObjectID;

module.exports = (app, db) => {
  app.post("/list", (req, res) => {
    const body = req.body;
    res.send(body);
  });
};

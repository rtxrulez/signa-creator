const MongoClient = require("mongodb").MongoClient;

var state = {
  db: null
};

exports.connect = function(url, done) {
  if (state.db) {
    return done();
  }

  MongoClient.connect(url, function(err, db) {
    if (err) {
      return done(err);
    }
    state.db = db.db("artists");
    done();
  });
};

exports.get = function() {
  return state.db;
};

const dbpass = require("./pass");

const dbname = "singa";
const dbuser = "nodejsUser";

module.exports = {
  dbuser: dbuser,
  dbname: dbname,
  url:
    "mongodb+srv://" +
    dbuser +
    ":" +
    dbpass +
    "@cluster0-jeyfz.mongodb.net/" +
    dbname +
    "?retryWrites=true&w=majority"
};

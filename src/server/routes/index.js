const list_routes = require("./list_routes");
module.exports = (app, db) => {
  list_routes(app, db);
  // остальные пути писать тут
};

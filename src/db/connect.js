const mongoose = require("mongoose");

function connect() {
  return mongoose.connect("mongodb://127.0.0.1:27017/rest-api-pill", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
}

module.exports = connect;

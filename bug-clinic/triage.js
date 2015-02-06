// scenario.js
var fs = require("fs");

var peach = function (obj) {
    console.trace("traced");
    console.dir(obj);
};

var bowser = function (callback) {
  fs.readFile(process.argv[2], {encoding : "utf8"}, callback);
};

var koopa = function (error, file) {
  // handle error by printing something to stderr
  if (error) {
    console.error(error);
  }
  else {
    peach(JSON.parse(file));
  }
};

bowser(koopa);

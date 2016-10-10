/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var logs = {
  selectAll: function (cb) {
    orm.selectAll('bglog_tbl', function (res) {
      cb(res);
    });
  },
  // cols and vals are arrays
  insertOne: function (cols, vals, cb) {
    orm.insertOne('bglog_tbl', cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne('bglog_tbl', objColVals, condition, function (res) {
      cb(res);
    });
  }
};

module.exports = logs;
'use strict';
module.exports = function(app) {
  var ds = app.dataSources.db;
  ds.autoupdate(null, function(err) {
    if (err) throw err;
  });
};

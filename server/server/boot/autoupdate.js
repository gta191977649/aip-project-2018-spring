module.exports = function(app) {
    var ds = app.dataSources.db;  
    // first autoupdate the `Author` model to avoid foreign key constraint failure
    ds.autoupdate(null, function(err) {
        if(err) throw err;
    });
};
  
module.exports = function(app) {
    var ds = app.dataSources.db;  
    ds.autoupdate(null, function(err) {
        if(err) throw err;
    });

    // var mysqlds = app.dataSources.mysql;
    // mysqlds.autoupdate(null, function(err) {
    //     if(err) throw err;
    // });
};
  
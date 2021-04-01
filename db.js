var low = require('lowdb');//data
var FileSync = require('lowdb/adapters/FileSync');//data

var adapter = new FileSync('db.json');//data

    db = low(adapter);
    db.defaults({ 
        test: [],
        sessions:[],
        transfers:[],
     })
     .write();

module.exports = db;
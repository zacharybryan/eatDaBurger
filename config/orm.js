const connection = require('./connection');

const orm = {
    findAll : function() {
        return new Promise(function(resolve, reject) {
            const query = "SELECT * FROM burgers;";
            connection.query(query, function(err, data){
                if (err)
                throw err;
                resolve(data);
            });
        });
    },

    create: function(burger) {
        return new Promise(function(reject, resolve){
            const query = "INSERT INTO burgers SET ?;";
            connection.query(query, function(err, data){
                if (err)
                throw err;
                resolve(data);
            });
        });
    },



module.exports = orm;
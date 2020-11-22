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
    


module.exports = orm;
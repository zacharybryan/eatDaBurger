const orm = require("../config/orm");

const burger = {
    findAll: function(){
        return new Promise(function(resolve, reject) {
            orm.findAll().then(function(data){
                resolve(data);
            });
        });
    },

module.exports = burger;
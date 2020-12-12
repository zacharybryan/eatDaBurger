const orm = require("../config/orm");

const burger = {
    findAll: function(){
        return new Promise(function(resolve, reject) {
            orm.findAll().then(function(data){
                console.log("burgers js")
                resolve(data);
            });
        });
    },

    create: function(burger){
        return new Promise(function(resolve, reject){
            orm.create(burger).then(function(data){
                resolve(data);    
            }).catch
            (function (err) {
                reject(err)
            })
        });
    },

    update: function(id, eaten){
        return new Promise(function(resolve, reject){
            orm.update(id, eaten).then(function(data){
                resolve(data);
            });
        });
    },
    
    destroy: function(id){
        return new Promise(function(resolve, reject){
            orm.destroy(id).then(function(data){
                resolve(data);
            });
        });
    },
}
module.exports = burger;
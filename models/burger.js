var orm = require("../config/orm.js");

console.log("HITTING MODEL");

var burger = {

    all:function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            console.log(res);
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            console.log(objColVals);
            cb(res);
        });
    },
    delete: function(cb) {
        orm.clearAll("burgers", function(res) {
            cb(res);
        })
    }
};

module.exports = burger;
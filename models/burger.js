// import orm.js into burger.js
var orm = require("../config/orm.js");

// create burger object 
var burger = {
    // selectAll() - return all burgers
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },

    // insertOne() - add new burger
    insertOne: function(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function(res) {
            cb(res);
        });
    },

    // updateOne() - update status of an existing burger
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export functions 
module.exports = burger;

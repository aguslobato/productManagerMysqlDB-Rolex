const options = require("./options/mysqlconfig.js");
const knex = require("knex");

const database = knex(options);

module.exports = database;

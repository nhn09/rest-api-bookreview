const knex = require("knex")

const connectedknex = knex({
    client: "sqlite3",
    connection:{
        filename:"bookdb.sqlite3"
    }
});

module.exports = connectedknex
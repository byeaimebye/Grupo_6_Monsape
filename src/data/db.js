let fs = require("fs");

let db = JSON.parse(fs.readFileSync("vinos.json"), "utf-8");

module.exports = db;
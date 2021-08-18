let fs = require('fs');
let path = require("path");

module.exports={
    vinos: JSON.parse(fs.readFileSync(path.join(__dirname, "../data/vinos.json"), "utf-8"))
}

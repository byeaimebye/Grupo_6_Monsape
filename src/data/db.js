let fs = require('fs');

module.exports={
    vinos: JSON.parse(fs.readFileSync("./src/data/vinos.json", "utf-8"))
}

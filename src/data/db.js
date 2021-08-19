const fs = require('fs');
const path = require('path');

module.exports={
    vinos: JSON.parse(fs.readFileSync(path.join(__dirname, "/vinos.json"), "utf-8"))
}

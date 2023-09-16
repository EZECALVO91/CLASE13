const fs = require('fs')
function leerLista() {
    const json = fs.readFileSync(__dirname +'/autos.JSON', "utf-8");
    const array = JSON.parse(json);
    return array;
  }

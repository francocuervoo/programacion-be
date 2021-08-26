//con npm run serve imprimo en consola el código
//hay que cambiar la ruta del package

const moment = require("moment")

const hoy = moment();
console.log(hoy)

const bDate = moment("25/04/1994","DD/MM/YYYY")
console.log(bDate)

const diferencia = hoy.diff(bDate,"years");
console.log(diferencia)
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SitioSchema = Schema({
    nombre: {type: String, require},
    region: {type: String, require},
    departamento: {type: String},
    clima: {type: String},
    ubicacion: {type: String},
    imagen: {type: String},
    descripcion: {type: String},
    order: {type: Number}
});

module.exports = mongoose.model("Sitio", SitioSchema);
const mongoose = require("mongoose");
const app = require("./app");
const {API_VERSION, IP_SERVER, PORT_DB} = require("./config");

const port = process.env.PORT || 3080;

//mongoose.set("useFindAndModify", false);
//mongodb://${IP_SERVER}:${PORT_DB}/turismoCol

mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/turismoCol`,
{useNewUrlParser: true, useUnifiedTopology: true }, 
(err, res) => {
    if(err){
        throw err;
    }else{
        console.log("CONEXIÓN ESTABLECIDA CON LA BASE DE DATOS: TURISMO COLOMBIA");

        app.listen(port, () =>{
            console.log("Server is running on port-> " +port);
            console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
        });
    }
});
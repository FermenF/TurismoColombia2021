const Sitio = require("../models/sitio");

function createSitio(req, res){
   const body = req.body;
   const sitio = new Sitio(body);
   sitio.order = 1000;

   sitio.save((err, sitioStored) => {
       if(err){
           res.status(400).send({
               code: 400, 
               message: ""
           });
       }else{
           if(!sitioStored){
               res
                .status(400)
                .send({
                    code: 400, 
                    message: "No se ha creado el sitio,"
                });
           }else{
               res
                .status(200)
                .send({
                    code: 200,
                    message: "Sitio creado correctamente."
                });
           }
       }
   });
}

function getSitio(req, res){
    Sitio.find().sort({
        order: "asc"
    }).exec((err, sitioStored) =>{
        if(err){
            res.status(500).send({
                code: 500,
                message:"Server Error."
            });
        }else{
            if(!sitioStored){
                res.status(404).send({
                    code: 404,
                    message: "Sitio no encontrado."
                });
            }else{
                res.status(200).send({
                    code: 200,
                    Sito: sitioStored
                });
            }
        }
    });
}

function deleteSitio(req, res){
    const { id } = req.params;
    
    Sitio.findByIdAndRemove(id, (err, sitioStored) =>{
        if(err){
            res.status(500).send({
                code:500,
                message: "Error Server."
            });
        }else{
            if(!sitioStored){
                res.status(404).send({
                    code: 404,
                    message: "Sitio no encontrado."
                });
            }else{
                res.status(200).send({
                    code: 200, 
                    message: "Sitio eliminado correctamente."
                });
            }
        }
    });
}

function updateSitio(req, res){
    const sitioData = req.body;
    const id = req.params.id;

    Sitio.findByIdAndUpdate(id, sitioData, (err, sitioUpdate)=>{
        if(err){
            res.status(500).send({
                code: 500,
                message: "Error Server."
            });
        }else{
            if(!sitioUpdate){
                res.status(404).send({
                    code: 404,
                    message: "No se ha encontrando el platillo."
                });
            }else{
                res.status(200).send({
                    code: 200,
                    message: "Platillo actulizado correctamente."
                });
            }
        }
    });
}

module.exports = {
    createSitio,
    getSitio,
    updateSitio,
    deleteSitio
}
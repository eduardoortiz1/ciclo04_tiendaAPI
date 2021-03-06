


const mongoose = require ('mongoose');
const { Schema } = mongoose;

const esquema = new Schema(
    {
        nombres:{ type: String, required: true },
        apellidos:{ type: String, required: true },
        identificacion:{ type: String, required: true },
        direccion:{ type: String, required: true },
        celular:{ type: String, required: true },
        email:{ type: String, required: true },
        mascotas:[
                    {
                        nombre_mascota:{type: String, required: true},
                        fecha_nacimiento: {type: String, required: true},
                        raza: {type: String, required: true},
                    },
                ]
});


module.exports = mongoose.model('Usuario', esquema);
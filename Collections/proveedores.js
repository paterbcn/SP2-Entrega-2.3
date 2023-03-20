

const moongose = require("mongoose")


const proveedor = new moongose.Schema({
    nombre: {
        type: String,
        require: true
    },
    direccion: [
        {
            Nombre: {
                type: String,
                require: true
            },
            calle: {
                type: String,
                require: true
            },
            numero: {
                type: Number,
                require: true
            },
            piso: String,
            puerta: String,
            ciudad: {
                type: String,
                require: true
            },
            Pais: {
                type: String,
                require: true
            },
            CodigoPostal: {
                type: Number,
                require: true
            }
        }],
    contacto:[{
        nombre: {
            type: String,
            require: true
        },
        dato: {
            type: String,
            require: true
        }
    }],
    NIF:{
        type:String,
        require:true
    },
})
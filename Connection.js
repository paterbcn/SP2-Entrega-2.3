const mongoose = require("mongoose")


mongoose.connect('mongodb://127.0.0.1:27017/myapp')
    .then(()=>console.log("conecion exitosa"))
    .catch((err)=>console.log("fallo conecion "+ err ))
2
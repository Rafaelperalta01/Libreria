require('dotenv').config(); //llamo a variables de entorno
const express = require('express')
const routes = require('./routes/routes') //RUTAS

const app = express();
app.use(routes)

const PORT = process.env.PORT;

app.listen(`${PORT}`, ()=>{
    console.log('servidor corriendo en puerto '+ PORT);
})




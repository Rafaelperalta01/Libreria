require('dotenv').config(); //llamo a variables de entorno
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes'); //RUTAS

app.use(cors());
app.use(bodyParser.json());
app.use(routes);



const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`servidor corriendo en puerto ${PORT}`);
})




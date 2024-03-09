require('dotenv').config();
const { conexionDB } = require('./database/db');

const express = require('express')

const app = express();

app.get('/', (req,res) => {
    res.send('hola desde server')
})

conexionDB();

const PORT = process.env.PORT;

app.listen(`${PORT}`, ()=>{
    console.log('servidor corriendo en puerto '+ PORT);
})




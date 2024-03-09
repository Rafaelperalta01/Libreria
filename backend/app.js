const express = require('express')

const app = express();

app.get('/', (req,res) => {
    res.send('hola desde server')
})

const PORT = 3001;

app.listen(`${PORT}`, ()=>{
    console.log('servidor corriendo en puerto '+ PORT);
})




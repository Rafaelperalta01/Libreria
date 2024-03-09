const { conexionDB } = require('../database/db') //importo conexion a db

const controller = {}

controller.index = (req,res) =>{
    res.send('SALUDO DESDE CONTROLLER')
}

//AGREGAR
controller.AgregarLibro = async (req, res) => {
    try {
        await conexionDB();
        
    } catch (error) {
        console.log('error :' + error);
    }
}

//OBTENER
controller.ObtenerLibro = async (req, res) => {
    try {
        await conexionDB();
        
    } catch (error) {
        console.log('error al agraegar:' + error);
    }
}

//MODIFICAR
controller.ModificarLibro = async (req, res) => {
    try {
        await conexionDB();
        
    } catch (error) {
        console.log('error al modificar libro:' + error);
    }
}

//ELIMINAR
controller.EliminarLibro = async (req, res) => {
    try {
        await conexionDB();
        
    } catch (error) {
        console.log('error al eliminar libro:' + error);
    }
}

//AGREGAR/QUITAR FAVORITO
controller.TildarFavorito = async (req, res) => {
    try {
        await conexionDB();
        
    } catch (error) {
        console.log('error al agregar favorito:' + error);
    }
}

//OBTENER FAVORITOS
controller.ObtenerFavoritos = async (req, res) => {
    try {
        await conexionDB();
        
    } catch (error) {
        console.log('error al obtener favoritos:' + error);
    }
}

module.exports = controller;
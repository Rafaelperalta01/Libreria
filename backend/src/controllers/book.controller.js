const { conectarDB, agregarLibro, obtenerLibros } = require('../database/db') //importo conexion a db

const controller = {}

controller.index = (req,res) =>{
    res.send('SALUDO DESDE CONTROLLER')
}

//AGREGAR
controller.AgregarLibro = async (req, res) => {
    const { titulo, autor, genero, anio } = req.body; //desestructuro body

    const newLibro = { //creo objeto para pasar como parametro
        titulo,
        autor,
        genero,
        anio
    }

    try {
        await conectarDB();
        await agregarLibro(newLibro); // Agregar un libro usando la conexión establecida
        res.json({ mensaje : 'Libro agregado con éxito' });
    } catch (error) {
        console.error('Error al agregar libro:', error);
        res.status(500).json({ mensaje : 'Error al agregar libro' });
    }
};

//OBTENER
controller.ObtenerLibro = async (req, res) => {
    try {
        await conectarDB();
        const listaLibros = await obtenerLibros();
        console.log('libros obtenidos con exito')
        res.json({ lista : JSON.stringify(listaLibros) }) //paso los datos en texto
        
    } catch (error) {
        console.log('error al obtener:' + error);
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
const { conectarDB, agregarLibro, obtenerLibros, eliminarLibro } = require('../database/db') //importo conexion a db

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
        console.error('Error al agregar libro(controller):', error);
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
        console.log('error al obtener(controller):' + error);
    }
}

//MODIFICAR
controller.ModificarLibro = async (req, res) => {
    try {
        await conexionDB();
        
    } catch (error) {
        console.log('error al modificar libro(controller):' + error);
    }
}

//ELIMINAR
controller.EliminarLibro = async (req, res) => {
    const idLibroAEliminar = req.body.id;

    try {
        await conectarDB();
        const libroEliminado = await eliminarLibro(idLibroAEliminar);
        if (libroEliminado) {
            res.json({ mensaje : 'El libro se eliminó con éxito' })
        } else {
            console.log('error al eliminar libro(controller)')
            res.json({ mensaje : 'No se pudo eliminar el libro...' })
        }
        
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
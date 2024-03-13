const { conectarDB, agregarLibro, obtenerLibros, eliminarLibro, actualizarLibro, tildarFavorito, obtenerFavoritos } = require('../database/db') //importo conexion a db

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

    const id = req.body.id;
    const datoAModificar = req.body.nuevoValor;

    console.log(id, datoAModificar)

    try {
        await conectarDB();
        await actualizarLibro(id, datoAModificar)
        console.log('dato actualizado con exito')
        res.json({ mensaje : 'dato modificado con éxito' }) 
        
    } catch (error) {
        console.log('error al modificar libro(controller):' + error);
    }
}

//ELIMINAR
controller.EliminarLibro = async (req, res) => {
    const idLibroAEliminar = req.params.id;

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
    const libro = req.params.id;
    
    try {
        await conectarDB();
        const estadoCambiado = await tildarFavorito(libro);
        //Verifico retornos de la funcion y envio mensajes
        if(estadoCambiado === 1){
            res.json({ mensaje : 'Se agregó a favoritos' })
        }else if(estadoCambiado === 2){
            res.json({ mensaje : 'Se eliminó de favoritos' })
        }else{
            res.json({ mensaje : 'Error al marcar favorito'})
        }
        
    } catch (error) {
        console.log('error al actualizar estado favorito(controller):' + error);
    }
}

//OBTENER FAVORITOS
controller.ObtenerFavoritos = async (req, res) => {
    try {
        await conectarDB();
        const listaLibros = await obtenerFavoritos();
        console.log('libros favoritos obtenidos')
        res.json({ lista : JSON.stringify(listaLibros) })
        
    } catch (error) {
        console.log('error al obtener favoritos:' + error);
    }
}

module.exports = controller;
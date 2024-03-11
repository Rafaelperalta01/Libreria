const { MongoClient } = require('mongodb');
require('dotenv').config();

let db; //variable para guarda la instancia de la conexion a la db para compartirlo en todos los metodos

async function conectarDB() {
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.i7fu8mx.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Conexión exitosa');
        db = client.db('libreria'); //agrego el nombre de la db a la variable
    } catch (error) {
        console.error('Error al conectarse a la base de datos:', error);
        throw error;
    }
}

//METODO AGREGAR UN LIBRO   
async function agregarLibro(libroData) {
    try {
        if (!db) { //en caso de que db sea null (no está instanciada), creo la conexion
            await conectarDB();
        }
        
        const librosCollection = db.collection('libros'); //agrego la credencial de la collecion
        const resultado = await librosCollection.insertOne(libroData); 

        console.log('Libro agregado correctamente:', resultado.insertedId); //imprimo mensaje con el id creado por la db
        return resultado.insertedId;
    } catch (error) {
        console.error('Error al agregar el libro(db.js):', error);
        throw new Error('Error al agregar el libro');
    }
}

//METODO OBTENER TODOS LOS LIBROS
async function obtenerLibros(){
    try {
        if (!db) {
            await conectarDB();
        }

        const librosCollection = db.collection('libros');
        const libros = await librosCollection.find({}).toArray();
        return libros;
        
    } catch (error) {
        console.error('Error al buscar libros(db.js):', error);
        throw new Error('Error al agregar el libro');
    }
}

//METODO ELIMINAR
async function eliminarLibro(libroId) {
    try {
        if (!db) {
            await conectarDB();
        }

        const librosCollection = db.collection('libros');
        const resultado = await librosCollection.deleteOne({ id: libroId }); //elimino libro por id

        if (resultado.deletedCount === 1) {
            console.log('Libro eliminado correctamente');
            return true; // indicar que se eliminó correctamente
        } else {
            console.log('No se encontró ningún libro con el ID especificado');
            return false; // indicar que no se encontró el libro para eliminar
        }
    } catch (error) {
        console.error('Error al eliminar el libro:', error);
        throw new Error('Error al eliminar el libro');
    }
}

module.exports = { conectarDB, agregarLibro, obtenerLibros, eliminarLibro };
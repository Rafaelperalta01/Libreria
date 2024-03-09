const { MongoClient } = require('mongodb')
require('dotenv').config();

async function conexionDB() {

    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.i7fu8mx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Conexion exitosa');
    } catch (error) {
        console.error('Error al conectarse a la base de datos(db.js):', error);
    }
};

//Funcion de prueba 
async function agregarLibro(libroData) {
    const db = await conexionDB();

    try {
        const librosCollection = db.collection('libros'); 
        const resultado = await librosCollection.insertOne(libroData);

        console.log('Libro agregado correctamente:', resultado.insertedId);
        return resultado.insertedId;
    } catch (error) {
        console.error('Error al agregar el libro(db.js):', error);
        throw error;
    } finally {
        db.close();
    }
}

module.exports = { conexionDB, agregarLibro };
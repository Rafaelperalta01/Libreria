const express = require('express');
const router = express.Router();
const Librocontroller = require('../controllers/book.controller')


router.post('/AgregarLibro', Librocontroller.AgregarLibro)

router.get('/ObtenerLibros', Librocontroller.ObtenerLibro)

router.put('/ModificarLibro', Librocontroller.ModificarLibro)

router.delete('/EliminarLibro/:id', Librocontroller.EliminarLibro)

router.put('/TildarFavorito/:id', Librocontroller.TildarFavorito)

router.get('/ObtenerFavoritos', Librocontroller.ObtenerFavoritos)


module.exports = router;
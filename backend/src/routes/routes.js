const express = require('express');
const router = express.Router();
const Librocontroller = require('../controllers/book.controller')


router.get('/', Librocontroller.index)

router.post('/AgregarLibro', Librocontroller.AgregarLibro)

router.get('/ObtenerLibro', Librocontroller.ObtenerLibro)

router.put('/ModificarLibro', Librocontroller.ModificarLibro)

router.delete('/EliminarLibro', Librocontroller.EliminarLibro)

router.put('/TildarFavorito', Librocontroller.TildarFavorito)

router.get('/ObtenerFavoritos', Librocontroller.ObtenerFavoritos)


module.exports = router;
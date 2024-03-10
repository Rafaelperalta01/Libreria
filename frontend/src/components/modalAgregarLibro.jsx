import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import close from '../assets/modalAgregarLibro/close.png'

const ModalAgregarLibro = ({ cerrarModal }) => {

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [anio, setAnio] = useState('');

    const enviarDatos = (e) => {
        e.preventDefault();
        if (validacionCamposVacios()) { //el metodo solo funcionará si todos los campos están completos
            axios.post('http://localhost:3001/AgregarLibro', {
                titulo,
                autor,
                genero,
                anio
            })
                .then((response) => {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: `${response.data.mensaje}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                })
                .catch((error) => {
                    Swal.fire({
                        position: "top",
                        icon: "error",
                        title: `${error.response.data.mensaje}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                });
        }
    }


    const validacionCamposVacios = () => {
        if (titulo === '' || autor === '' || genero === '' || anio === '') {
            Swal.fire({
                position: "top",
                icon: "error",
                title: `Falta completar campos`,
                showConfirmButton: false,
                timer: 1500
            });
            return false;
        } else {
            return true;
        }
    }


    return (
        <div className="h-[70vh] w-[600px] absolute top-[10%] left-1/2 transform -translate-x-1/2 bg-[#406ce4a8] z-50 backdrop-blur-md rounded">{/* Ubicacion central del modal crear */}
            <img onClick={cerrarModal} className='absolute top-5 right-5 h-5 cursor-pointer transition duration-300 hover:rotate-90 hover:invert-[90%]' src={close} alt="Cerrar modal" />
            <h1>Agregar libro :</h1>
            <div className="flex justify-center p-10">
                <form className="flex flex-col justify-center">
                    <label htmlFor="">Ingresa el titulo del libro:</label>
                    <input type="text" onChange={(e) => { setTitulo(e.target.value) }} />
                    <label htmlFor="">Ingresa el autor del libro:</label>
                    <input type="text" onChange={(e) => { setAutor(e.target.value) }} />
                    <label htmlFor="">Ingresa el género del libro:</label>
                    <input type="text" onChange={(e) => { setGenero(e.target.value) }} />
                    <label htmlFor="">Ingresa el año del libro:</label>
                    <input type="text" onChange={(e) => { setAnio(e.target.value) }} />
                    <button className="bg-white text-black w-40 mt-10 mx-auto" onClick={enviarDatos}>Agregar Libro</button>
                </form>
            </div>
        </div>
    )
}

export default ModalAgregarLibro;
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import close from '../assets/modalAgregarLibro/close.png'
import agregarMobile from '../assets/modalAgregarLibro/agregar.png'

const ModalAgregarLibro = ({ cerrarModal }) => {

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [anio, setAnio] = useState('');

    const enviarDatos = (e) => {
        e.preventDefault();
        if (validacionCamposVacios() && validarNumero()) { //el metodo solo funcionará si todos los campos están completos y si el año es un numero
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
                    cerrarModal();
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
        if (titulo === '' || autor === '' || genero === '' || anio === '' ) {
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

    const validarNumero = () => {
        if (isNaN(anio)) {
            Swal.fire({
                position: "top",
                icon: "info",
                title: `El año debe ser un numero`,
                showConfirmButton: false,
                timer: 1500
            });
            return false; //retorna false si el año NO es un número
        } else {
            return true; //retorna true si el año es un número
        }
    }

    return (
        <div className="h-full w-full text-white absolute top-0 left-1/2 transform -translate-x-1/2 bg-[#101077d5] z-50 backdrop-blur-md rounded-lg sm:h-[70vh] md:w-[600px] md:mt-[50px]">{/* Ubicacion central del modal crear */}
            <img onClick={cerrarModal} className='absolute top-5 invert right-5 h-5 cursor-pointer transition duration-300 hover:rotate-90 hover:invert-[70%]' src={close} alt="Cerrar modal" />
            <h1 className='font-open-sans pl-10 pt-5 text-xl font-bold'>Agregar libro :</h1>
            <div className="flex justify-center p-10">
                <form className="flex flex-col w-full">
                    <label htmlFor="">Título:</label>
                    <input className='text-gray-800 p-1 rounded focus:outline-none' type="text" onChange={(e) => { setTitulo(e.target.value) }} />
                    <label htmlFor="">Autor:</label>
                    <input className='text-gray-800 p-1 rounded focus:outline-none' type="text" onChange={(e) => { setAutor(e.target.value) }} />
                    <label htmlFor="">Género:</label>
                    <input className='text-gray-800 p-1 rounded focus:outline-none' type="text" onChange={(e) => { setGenero(e.target.value) }} />
                    <label htmlFor="">Año de publicación:</label>
                    <input className='text-gray-800 p-1 rounded focus:outline-none' type="text" onChange={(e) => { setAnio(e.target.value) }} />
                    <button className="bg-green-600 text-white rounded p-2 w-40 mt-10 mx-auto transition hover:bg-green-700" onClick={enviarDatos}>Agregar Libro</button>
                    <div class="max-w-full max-h-96 mx-auto">
                        <img className='h-80 sm:hidden' src={agregarMobile} alt="Imagen Mobile" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalAgregarLibro;
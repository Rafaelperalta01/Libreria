import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const AgregarLibro = () => {

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [anio, setAnio] = useState('');

    const enviarDatos = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/AgregarLibro',{
            titulo,
            autor,
            genero,
            anio
        })
        .then((e)=> {
            Swal.fire({
                position: "top",
                icon: "success",
                title: `${e.data.mensaje}`,
                showConfirmButton: false,
                timer: 1500
            });
        })
        .catch((e) => {
            Swal.fire({
                position: "top",
                icon: "error",
                title: `${e.data.mensaje}`,
                showConfirmButton: false,
                timer: 1500
            });
        })
    }


    return (
        <div className="h-full w-full bg-sky-600">
            <h1>Agregar libro :</h1>
            <div className="flex justify-center p-10">
                <form className="flex flex-col justify-center">
                    <label htmlFor="">Ingresa el titulo del libro:</label>
                    <input type="text" onChange={(e) => {setTitulo(e.target.value) }}/>
                    <label htmlFor="">Ingresa el autor del libro:</label>
                    <input type="text"  onChange={(e) => {setAutor(e.target.value) }}/>
                    <label htmlFor="">Ingresa el género del libro:</label>
                    <input type="text" onChange={(e) => {setGenero(e.target.value) }} />
                    <label htmlFor="">Ingresa el año del libro:</label>
                    <input type="text" onChange={(e) => { setAnio(e.target.value) }} />
                    <button className="bg-white text-black w-40 mt-10 mx-auto" onClick={enviarDatos}>Agregar Libro</button>
                </form>
                
            </div>

        </div>
    )
}

export default AgregarLibro;
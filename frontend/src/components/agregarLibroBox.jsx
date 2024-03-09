import { useState } from 'react'

const AgregarLibro = () => {

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [anio, setAnio] = useState('');


    const mostrarDatos = (e) => {
    e.preventDefault()
        console.log(titulo, autor, genero, anio)
    }

    return (
        <div className="h-92 w-1/2 bg-sky-600">
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
                    <button className="bg-white text-black w-40 mt-10 mx-auto" onClick={mostrarDatos}>Agregar Libro</button>
                </form>
                
            </div>

        </div>
    )
}

export default AgregarLibro;
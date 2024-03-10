import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import axios from 'axios'
import Libro from "../components/libro";

export default function Dashboard(){

    const [listaLibros, setListaLibros] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3001/ObtenerLibros')
        .then((response)=>{
            setListaLibros(JSON.parse(response.data.lista)) //convierto datos a json
        })
        .catch(()=>{
            alert('error al obtener libros')
        })
    }, [])

    return(
        <>
        <div className="h-screen w-[85%] float-right bg-gray-200">
            <Navbar />
            <div className="p-10">
                <h1 className="text-2xl">Bienvenido a nuestro sistema!👋</h1>
                <div className="mt-5">
                    <h2>Estos son nuestros libros:</h2>
                    <div className="flex gap-10 p-8 flex-wrap">
                    {
                        listaLibros.map(libro => (
                            <Libro key={libro._id} titulo={libro.titulo}/>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
        <Sidebar />
        </>
    )
}
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import axios from 'axios'
import Libro from "../components/libro";
import plus from '../assets/dashboard/plus.png'
import Swal from "sweetalert2";
import ModalAgregarLibro from "../components/modalAgregarLibro";

export default function Dashboard(){

    const [listaLibros, setListaLibros] = useState([]);
    const [modalCrearLibro, setModalCrearLibro] = useState(false);

    useEffect(()=>{
        Swal.fire({
            position: "center",
            icon: "success",
            title: `Bienvenido al sistema`,
            showConfirmButton: false,
            timer: 1500
        });
        axios.get('http://localhost:3001/ObtenerLibros')
        .then((response)=>{
            setListaLibros(JSON.parse(response.data.lista)) //convierto datos a json
        })
        .catch(()=>{
            alert('error al obtener libros')
        })
    }, [])

    const abrirModalCrear = () => {
        setModalCrearLibro(true)
    }

    const cerrarModalCrear = () => {
        setModalCrearLibro(false)
    }

    return(
        <>
        <div className="h-screen w-[85%] float-right bg-gray-200 ">
            <Navbar />
            <div className="p-10">
                <h1 className="text-2xl">Bienvenido a nuestro sistema!👋</h1>
                <div className="mt-5">
                    <div className="flex justify-between pr-20">
                        <h2>Estos son nuestros libros:</h2>
                        <div onClick={abrirModalCrear} className="flex justify-center items-center gap-2 rounded bg-sky-300 p-2 transition cursor-pointer hover:bg-sky-600 hover:text-white">
                            <img className="h-5" src={plus} alt="Agregar" />
                            <p>Agregar libro</p>
                        </div>
                    </div>
                    
                    { modalCrearLibro && (<ModalAgregarLibro cerrarModal={cerrarModalCrear} />) } 
                    
                    <div className="flex gap-10 p-8 flex-wrap">
                    {
                        //renderizacion de libros
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
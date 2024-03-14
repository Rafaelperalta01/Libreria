import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import axios from 'axios'
import Libro from "../components/libro";
import plus from '../assets/dashboard/plus.png'
import ModalAgregarLibro from "../components/modalAgregarLibro";

export default function Dashboard(){

    const [listaLibros, setListaLibros] = useState([]);
    const [modalCrearLibro, setModalCrearLibro] = useState(false);

    useEffect(()=>{
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

    return (
        <>
          <div className="h-screen w-[85%] float-right bg-gray-200 ">
            <Navbar />
            <div className="p-5 lg:p-10">
              <h1 className="text-xl lg:text-2xl">Bienvenido a nuestro sistema!👋</h1>
              <div className="mt-5">
                <div className="flex justify-between lg:pr-20">
                  <h2>Estos son nuestros libros:</h2>
                  <div onClick={abrirModalCrear} className="flex justify-center items-center gap-2 rounded bg-sky-300 p-2 transition cursor-pointer hover:bg-sky-600 hover:text-white">
                    <img className="h-5" src={plus} alt="Agregar" />
                    <p className="hidden lg:block">Agregar libro</p>
                  </div>
                </div>
      
                {modalCrearLibro && (<ModalAgregarLibro cerrarModal={cerrarModalCrear} />)}
      
                <div className="flex gap-2 justify-center p-2 flex-wrap max-h-[70vh] overflow-y-auto sm:gap-10 sm:p-8 sm:justify-start">
                  {/* Utilizamos 'max-h-[70vh]' para establecer la altura máxima */}
                  {
                    //renderizacion de libros
                    listaLibros.map((libro, index) => (
                      <Libro key={index} datosLibro={libro} />
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
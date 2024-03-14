import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import axios from "axios";
import Libro from "../components/libro";
import Swal from "sweetalert2";

export default function Favoritos(){

    const [lista, setLista] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3001/ObtenerFavoritos')
        .then((response)=>{
            const datos = JSON.parse(response.data.lista);
            if(datos.length === 0){
                Swal.fire({
                    position: "center",
                    icon: "info",
                    title: `No hay libros favoritos`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }else{
                setLista(datos)
            }
        })
        .catch((e)=>{
            alert('error al obtener libros favoritos')
        })

    },[])

    return (
        <>
          <div className="h-screen w-[85%] float-right bg-gray-200">
            <Navbar />
            <div className="p-10">
              <h1 className="text-2xl">Estos son tus libros favoritos!</h1>
              <div className="flex mt-2 justify-center gap-4 p-3 flex-wrap max-h-[70vh] overflow-y-auto sm:gap-10 sm:p-3 sm:justify-start">
                {/* Utilizamos 'max-h-[70vh]' para establecer la altura máxima */}
                {
                  lista.map((libro, index) => (
                    <Libro key={index} datosLibro={libro} />
                  ))
                }
              </div>
            </div>
          </div>
          <Sidebar />
        </>
      )
}
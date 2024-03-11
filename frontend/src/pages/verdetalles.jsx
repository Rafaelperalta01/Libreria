import Sidebar from "../components/sidebar";
import { useLocation } from "react-router-dom" //hook para acceder los datos pasados por navigate

export default function Verdetalles(){

    const location = useLocation();
    const libro = location.state; //variable con los datos pasados

    return(
        <>
        <div className="h-screen w-[85%] float-right bg-gray-200">
            <div className="p-10">
                <h1 className="text-2xl">Detalles del libro: <b className="text-blue-700">{libro.titulo}</b></h1>
                <div className="flex mt-10 h-auto">
                    <div className="h-96 w-1/2 bg-blue-300">
                        Imagen aqui
                    </div>
                    <div className="h-96 w-1/2 bg-blue-400">
                        <p>autor: {libro.autor}</p>
                        <p>autor: {libro.genero}</p>
                        <p>autor: {libro.anio}</p>
                    </div>
                </div>
            </div>
        </div>
        <Sidebar />
        </>
    )
}
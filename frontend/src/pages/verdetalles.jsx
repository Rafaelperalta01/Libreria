import Sidebar from "../components/sidebar";
import { useLocation } from "react-router-dom" //hook para acceder los datos pasados por navigate
import edit from '../assets/libro/edit.png'
import eliminar from '../assets/libro/eliminar.png'
import Inputverdetalles from "../components/inputVerDetalles";

export default function Verdetalles(){

    const location = useLocation();
    const libro = location.state; //variable con los datos pasados

    return(
        <>
        <div className="h-screen w-[85%] float-right bg-gray-200">
            <div className="p-10">
                <h1 className="text-2xl">Detalles del libro: <b className="text-blue-700">{libro.titulo}</b></h1>
                <div className="flex mt-10 h-auto bg-gray-300 rounded-xl">
                    <div className="h-96 w-1/2">
                        Imagen aqui
                    </div>
                    <div className=" h-96 w-1/2 p-10 bg-gradient-to-b from-blue-600 to-blue-700 text-white rounded-xl ">
                        <ul className="flex flex-col gap-10 font-montserrat">
                            <Inputverdetalles parrafo={'Autor'} dato={libro.autor} icon={edit} />
                            <Inputverdetalles parrafo={'Género'} dato={libro.genero} icon={edit} />
                            <Inputverdetalles parrafo={'Año de publicación'} dato={libro.anio} icon={edit} />
                        </ul>
                    </div>
                </div>
                <div className="flex w-40 gap-1 mt-10 bg-red-500 text-white py-2 px-5 rounded font-tilt-neon transition hover:cursor-pointer hover:bg-red-700">
                    <img className="h-5 invert" src={eliminar} alt="Elimiar libro" />
                    <button>Eliminar libro</button>
                </div>
            </div>
        </div>
        <Sidebar />
        </>
    )
}
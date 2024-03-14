import Sidebar from "../components/sidebar";
import { useLocation } from "react-router-dom" //hook para acceder los datos pasados por navigate
import edit from '../assets/libro/edit.png'
import eliminar from '../assets/libro/eliminar.png'
import Inputverdetalles from "../components/inputVerDetalles";
import utils from "../utils/utils";

export default function Verdetalles(){

    const location = useLocation();
    const libro = location.state; //variable con los datos pasados

    const idLibro = libro._id;
    const  eliminarlibro = () => { 
        utils.eliminarLibro(idLibro)
        window.location.href = '/dashboard'
    }

    return(
        <>
        <div className="h-screen w-[85%] float-right bg-gray-200">
            <div className="p-10 pt-3 lg:pt-10">
                <h1 className="text-lg lg:text-2xl">Detalles del libro: <b className="text-blue-700">{libro.titulo}</b></h1>
                <div className="flex flex-col mt-3 h-auto bg-gray-300 rounded-xl lg:flex-row lg:mt-10">
                    <div className="h-64 w-full">
                        Imagen aqui
                    </div>
                    <div className=" h-1/2 w-full p-7 bg-gradient-to-b from-blue-600 to-blue-700 text-white rounded-xl ">
                        <ul className="flex flex-col gap-6 font-montserrat">
                            <Inputverdetalles id={libro._id} parrafo={'Título'} dato={libro.titulo} icon={edit} />
                            <Inputverdetalles id={libro._id} parrafo={'Autor'} dato={libro.autor} icon={edit} />
                            <Inputverdetalles id={libro._id} parrafo={'Género'} dato={libro.genero} icon={edit} />
                            <Inputverdetalles id={libro._id} parrafo={'Año de publicación'} dato={libro.anio} icon={edit} />
                        </ul>
                    </div>
                </div>
                <div className="flex w-40 gap-1 mt-5 bg-red-500 text-white py-2 px-5 rounded font-tilt-neon transition hover:cursor-pointer hover:bg-red-700 lg:mt-10">
                    <img className="h-5 invert" src={eliminar} alt="Elimiar libro" />
                    <button onClick={eliminarlibro}>Eliminar libro</button>
                </div>
            </div>
        </div>
        <Sidebar />
        </>
    )
}
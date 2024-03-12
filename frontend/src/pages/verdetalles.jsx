import Sidebar from "../components/sidebar";
import { useLocation } from "react-router-dom" //hook para acceder los datos pasados por navigate
import edit from '../assets/libro/edit.png'
import eliminar from '../assets/libro/eliminar.png'
import Inputverdetalles from "../components/inputVerDetalles";
import eliminarLibro from "../utils/utils";

export default function Verdetalles(){

    const location = useLocation();
    const libro = location.state; //variable con los datos pasados

    const  eliminarlibro = () => { 
        eliminarLibro(libro._id)
        window.location.href = '/dashboard' // redireccionar al dashboard una vez eliminado
    }

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
                        <ul className="flex flex-col gap-6 font-montserrat">
                            <Inputverdetalles id={libro._id} parrafo={'Título'} dato={libro.titulo} icon={edit} />
                            <Inputverdetalles id={libro._id} parrafo={'Autor'} dato={libro.autor} icon={edit} />
                            <Inputverdetalles id={libro._id} parrafo={'Género'} dato={libro.genero} icon={edit} />
                            <Inputverdetalles id={libro._id} parrafo={'Año de publicación'} dato={libro.anio} icon={edit} />
                        </ul>
                    </div>
                </div>
                <div className="flex w-40 gap-1 mt-10 bg-red-500 text-white py-2 px-5 rounded font-tilt-neon transition hover:cursor-pointer hover:bg-red-700">
                    <img className="h-5 invert" src={eliminar} alt="Elimiar libro" />
                    <button onClick={eliminarlibro}>Eliminar libro</button>
                </div>
            </div>
        </div>
        <Sidebar />
        </>
    )
}
import { useLocation } from "react-router-dom" //hook para acceder los datos pasados por navigate

export default function Verdetalles(){

    const location = useLocation();
    const libro = location.state; //variable con los datos pasados

    return(
        <div>
            Detalles de libro: {libro.titulo}
        </div>
    )
}
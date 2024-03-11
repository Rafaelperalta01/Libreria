
//Caja para mostrar datos del libro en VerDetalles y icon de editar
export default function Inputverdetalles({ parrafo, dato, icon }){
    return(
        <li>
        <p>{parrafo} : </p>
        <div className="flex gap-3">
            <input className="w-full bg-gray-200 text-black cursor-default rounded pl-2 font-pt-sans font-medium" type="text" value={dato} readonly />
            <img className="h-7 invert cursor-pointer transition hover:invert-[80%]" src={icon} alt="Icon editar" />
        </div>
    </li>
    )
}
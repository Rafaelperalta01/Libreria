
//Componente para mostrar opciones en el sidebar
export default function Option({ imagen, texto }){
    return(
        <div className=' rounded p-2 hover:bg-blue-800 transition duration-300 hover:cursor-pointer'>
            <img className='h-10 invert mx-auto' src={imagen} alt="Libros" />
            <li className="hidden pt-2 lg:block">{texto}</li>
        </div>
    )
}
import { Link } from 'react-router-dom'
import ilustracion from '../assets/main/ilustracion.png'
import ilustracion2 from '../assets/main/ilustracion2.png'

//Pagina principal
export default function Main() {
    return (
        <div className="h-screen w-full bg-gradient-to-r from-blue-900 to-blue-950 relative flex">
            <div className="p-20 pt-40">
                <h1 className="text-white font-tilt-neon text-bold text-5xl">¡Bienvenido a nuestra librería virtual!</h1>
                <p className="w-4/6 text-gray-200 mt-10 font-roboto"> Aquí podrás explorar una amplia selección de libros, agregar tus favoritos, y mucho más. Entra al sistema que es gratis !</p>
                <img className='h-96 mx-auto' src={ilustracion} alt="Imagen1" />
            </div>
            <div className="h-full w-2/6 bg-gray-200 absolute right-0 flex flex-col  p-10">
                <div class="max-w-full max-h-96 mx-auto overflow-hidden">
                    <img class="w-full h-auto" src={ilustracion2} alt="Imagen2" />
                </div>
                <h2 className='text-2xl text-center'>Ingresa al programa aquí</h2>
                <Link className='mx-auto' to={'/dashboard'}>
                    <button className='bg-blue-400 w-auto mt-16 h-auto px-5 py-2 rounded font-open-sans transition hover:bg-blue-600 hover:text-white'>Ingresar al programa</button>
                </Link>
            </div>
        </div>
    )
}

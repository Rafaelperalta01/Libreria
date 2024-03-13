import { Link } from 'react-router-dom'
import ilustracion from '../assets/main/ilustracion.png'
import ilustracion2 from '../assets/main/ilustracion2.png'

//Pagina principal
export default function Main() {
    return (
        <div className="h-screen w-full bg-gradient-to-r from-blue-900 to-blue-950 overflow-hidden relative flex">
            <div className="text-center p-20 pt-32 lg:text-start">
                <h1 className="text-white font-tilt-neon text-bold text-5xl lg:text-4xl xl:text-5xl">¡Bienvenido a nuestra librería virtual!</h1>
                <p className="w-full text-gray-200 mt-10 font-roboto lg:w-4/6"> Aquí podrás explorar una amplia selección de libros, agregar tus favoritos, y mucho más. Entra al sistema que es gratis !</p>
                <Link className='mx-auto lg:hidden' to={'/dashboard'}>
                    <button className='mt-5 bg-blue-400 w-auto h-auto px-5 py-2 rounded font-open-sans transition hover:bg-blue-600 hover:text-white'>Ingresar al programa</button>
                </Link>
                <img className='h-96 mx-auto ' src={ilustracion} alt="Imagen1" />
            </div>
            
            <div className="hidden h-full w-2/6 bg-gray-200 absolute right-0 flex flex-col gap-10 p-10 lg:block">
                <div class="max-w-full max-h-96 mx-auto">
                    <img class="w-full h-auto" src={ilustracion2} alt="Imagen2" />
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <h2 className='flex justify-center text-2xl text-center'>Ingresa al programa aquí</h2>
                <Link className='' to={'/dashboard'}>
                    <button className='mt-5 bg-blue-400 w-auto h-auto px-5 py-2 rounded font-open-sans transition hover:bg-blue-600 hover:text-white'>Ingresar al programa</button>
                </Link>
                </div>
            </div>
        </div>
    )
}

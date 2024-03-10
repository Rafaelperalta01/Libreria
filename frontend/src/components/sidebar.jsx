import salir from '../assets/dashboard/salir.png'
import fav from '../assets/dashboard/fav.png'
import books from '../assets/dashboard/book.png'
import { Link } from 'react-router-dom'
import Option from './opcionsidebar'


export default function Sidebar() {
    return (
        <aside className="h-screen w-[15%] rounded-br-xl float-left bg-blue-900 flex justify-center flex-col items-center text-center text-white">
            <ul className="flex flex-col gap-12">
                <Option imagen={books} texto={'ver todos los libros'} />
                <Option imagen={fav} texto={'ver favoritos'} />
            
            <Link to={'/'}>
                <Option imagen={salir} texto={'Salir'} />
            </Link>
            </ul>
        </aside>
    )
}
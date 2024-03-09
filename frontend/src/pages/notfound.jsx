import error from '../assets/main/404.png'
import { Link } from 'react-router-dom'

export default function Notfound(){
    return(
        <div>
            <img className='h-[600px] mx-auto' src={error} alt="Error 404" />
            <Link to={'/'}>
                <p className='text-center text-white p-2 rounded bg-sky-600 w-40 mx-auto'>Volver a main</p>
            </Link>
            
        </div>
    )
}
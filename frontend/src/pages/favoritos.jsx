import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function Favoritos(){
    return(
        <>
        <div className="h-screen w-[85%] float-right bg-gray-200">
            <Navbar />
            <div className="p-10">
                <h1 className="text-2xl">Estos son tus libros favoritos !</h1>
            </div>
            
        </div>
        <Sidebar />
        </>
    )
}
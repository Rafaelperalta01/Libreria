import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function Dashboard(){
    return(
        <>
        <div className="h-screen w-[85%] float-right bg-gray-200">
            <Navbar />
            <div className="p-10">
                <h1 className="text-2xl">Bienvenido a nuestro sistema !</h1>
            </div>
            
        </div>
        <Sidebar />
        </>
    )
}
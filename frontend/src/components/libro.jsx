import ojo from '../assets/libro/ojo.png'
import fav from '../assets/dashboard/fav.png'
import eliminar from '../assets/libro/eliminar.png'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // uso de hook para pasar los datos a la ruta de detalles del libro
import axios from 'axios';
import Swal from 'sweetalert2';


const Libro = ({ datosLibro }) => { //desestructuro objeto

  const [hovering, setHovering] = useState(false); //estado para manejar el hover
  const navigate = useNavigate();

  const NavegarADetalles = () => {
    navigate(`/dashboard/VerDetalles/${datosLibro._id}`, { state: datosLibro }) //declaro la direccion y paso el objeto de datos
  }

  const EliminarLibro = () => {
    const id = datosLibro._id
    axios.delete('http://localhost:3001/EliminarLibro', {
      id
    })
    .then((response) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${response.data.mensaje}`,
        showConfirmButton: false,
        timer: 1000
      });
    })
    .catch((response) => {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `${response.data.mensaje}`,
        showConfirmButton: false,
        timer: 1000
      });
    })
  }

  return (
    <div
      className="bg-white h-40 w-28 shadow-xl rounded-lg overflow-hidden relative transition-transform duration-300 ease-in-out transform hover:scale-105"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="h-38 p-4">
        <h3 className="text-base text-center font-semibold mb-2">{datosLibro.titulo}</h3>
        <p className='text-center'>. . .</p>
      </div>
      {hovering && ( // en caso de que hovering sea true entra el div de opciones ver y editar
        <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm bg-black bg-opacity-50 gap-3">
          <img onClick={NavegarADetalles} className='h-7 invert cursor-pointer hover:invert-[80%]' title='Ver detalles' src={ojo} alt="Ver" />
          <img className='h-7 invert cursor-pointer hover:invert-[80%]' title='Agregar a favorito' src={fav} alt="Favorito" />
          <img onClick={EliminarLibro} className='h-7 invert cursor-pointer hover:invert-[80%]' title='Eliminar' src={eliminar} alt="Eliminar" />
        </div>
      )}
    </div>
  );
};

export default Libro;
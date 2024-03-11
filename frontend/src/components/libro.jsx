import ojo from '../assets/libro/ojo.png'
import edit from '../assets/libro/edit.png'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // uso de hook para pasar los datos a la ruta de detalles del libro

const Libro = ({ datosLibro }) => { //desestructuro objeto

  const [hovering, setHovering] = useState(false); //estado para manejar el hover
  const navigate = useNavigate();

  const NavegarADetalles = () => {
    navigate(`/dashboard/VerDetalles/${datosLibro.id}`, { state: datosLibro }) //declaro la direccion y paso el objeto de datos
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
        <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm bg-black bg-opacity-50 gap-5">
          <img onClick={NavegarADetalles} className='h-7 invert cursor-pointer hover:invert-[80%]' title='Ver detalles' src={ojo} alt="Ver" />
          <img className='h-7 invert cursor-pointer hover:invert-[80%]' title='Editar' src={edit} alt="Editar" />
        </div>
      )}
    </div>
  );
};

export default Libro;
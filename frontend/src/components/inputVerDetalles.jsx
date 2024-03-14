import axios from "axios";
import Swal from "sweetalert2"


//Caja para mostrar datos del libro en VerDetalles y icon de editar
export default function Inputverdetalles({ parrafo, dato, icon, id }) {

    const abrirModalModificar = () => {
        
        const title = parrafo; // variable para acceder al valor que tiene el párrafo pasado por parámetro
        
        //Al presionar en el icon de modificar se abre la alerta con el input para modificar el dato que quiera
        Swal.fire({
            title: "Modificar dato",
            input: "text",
            inputLabel: `Ingresa el nuevo ${title}`,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) { //entra en caso de ingresar un valor vacío
                    return "Debes ingresar algo";
                }if (title === 'Año de publicación') { //entra si quiero modificar el año
                    if (isNaN(value) || value.length >= 5) { //validaciones de si no es un numero o supera 4 digitos
                        return "El año de publicación debe ser un número de máximo 5 dígitos";
                    }
                }
            }
        }).then((result) => { //controla la respuesta
            if (result.isConfirmed) { //si el usuario confirma el dato ingresado
                const nuevoDato = result.value; //variable que guarda el dato que ingresó el usuario
                let claveDeDB = ''; //variable que se usará para cambiar el valor que trae el parametro parrafo por el valor que tienen el la DB
                if(title === 'Autor'){ //como el parrafo está en mayuscula lo pasa a miniscula y así cambia los demás datos
                    claveDeDB = 'autor'
                } else if (title === 'Género'){
                    claveDeDB = 'genero'
                }else if(title === 'Año de publicación'){
                    claveDeDB = 'anio'
                }else if(title === 'Título'){
                    claveDeDB = 'titulo'
                }
                
                const nuevoValor = { [claveDeDB] : nuevoDato } // en la variable guardo el obj clave-valor con la clave cambiada por la que tiene en la DB con el nuevo dato ingresado
                axios.put('http://localhost:3001/ModificarLibro', {
                    id: id,
                    nuevoValor
                }).then((response)=>{
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${response.data.mensaje}`,
                        showConfirmButton: false,
                        timer: 900
                    });
                }).catch((e)=>{
                    alert(e.data.mensaje)
                })
            }
        });
    }

    return (
        <li>
            <p>{parrafo} : </p>
            <div className="flex gap-3">
                <input className="text-sm w-full bg-gray-200 text-black cursor-default rounded pl-2 font-pt-sans font-medium lg:text-md" type="text" value={dato} readonly />
                <img onClick={ abrirModalModificar} className="h-7 invert cursor-pointer transition hover:invert-[80%]" src={icon} alt="Icon editar" />
            </div>
        </li>
    )
}
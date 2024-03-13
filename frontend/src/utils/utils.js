import axios from 'axios';
import Swal from 'sweetalert2';

const eliminarLibro = (idLibro) => {
  axios.delete(`http://localhost:3001/EliminarLibro/${idLibro}`)
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

export default eliminarLibro
import { Navigate } from 'react-router-dom';

function Detalle () {
  let token = localStorage.getItem('token');
  return (
    <>
      { !token && <Navigate to="/" />}
     <h2>Detalle de la Pelicula</h2>
    </>
  )
}

export default Detalle;
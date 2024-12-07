import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';


function Detalle () {
  let token = sessionStorage.getItem('token');

  let query = new URLSearchParams(window.location.search);
  let movieID = query.get('movieID')
  
  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=f5b6ca4129cc9319b4f7ef192362f127&language=es-ES`;
    
    axios.get(endPoint) .then(response => {
      const movieData = response.data;
      console.log(movieData);
    })
    .catch(error => {
      console.log(error);
    })
      
  }, [movieID]);

  return (
    <>
      { !token && <Navigate to="/" />}
     <h2>Detalle de la Pelicula</h2>
     <div className="row">
      <div className="col-4">
        imagen
      </div>
      <div className="col-8">
        <h5>Fecha de Estreno:</h5>
        <h5>Reseña:</h5>
        <p>Estas son peliculas muy populares del cine en todo el mundo algunas son tan malas que agarrarsela con el cierre del pantalón</p>
        <h5>Géneros</h5>
        <ul>
          <li>Genero 1</li>
          <li>Genero 2</li>
          <li>Genero 3</li>
        </ul>
      </div>
     </div>
    </>
  )
}

export default Detalle;
import { Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import swAlert from 'sweetalert2';

function Listado  ()  {
    let  token = sessionStorage.getItem('token')

    const [ moviesList, setMoviesList ] = useState([]);

    useEffect(() => {
      const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=f5b6ca4129cc9319b4f7ef192362f127&language=es-ES'
      axios.get(endPoint)
      .then(response => {
        const apiData = response.data;
        setMoviesList(apiData.results);
      })
      .catch(error => {
        swAlert.fire(
          {
              title: 'Hubo errores, Intenta mas tarde',
              html: 'Servidor sin funciones.',
              icon: 'error'
          } );
      })
    }, [setMoviesList])

  return (
    <>
        { !token && <Navigate to="/" />}

        <div className="row"> 
        {/*Estructura Base*/}
        {
          moviesList.map((oneMovie, idx) => {
            return (
              <div className="col-4 col-sm-4" key={idx}>
                <div className="card my-4 shadow-sm">
                  <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.backdrop_path}`} className="card-img-top"  alt={oneMovie.title}/>
                  <button className="favourite-btn">🖤</button>
                  <div className="card-body"></div>
                  <h5 className="card-title text-truncate">{ oneMovie.title.substring(0, 30) }...</h5>
                  <p className="card-text text-truncate">{ oneMovie.overview.substring(0, 100) }...</p>
                  <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-secondary btn-sm">ver detalles</Link>
                </div>
              </div>
            )
          })
        }
        </div>
        </>
  )
}

export default Listado;
import { Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Listado  ()  {
    let  token = localStorage.getItem('token')

    const [ moviesList, setMoviesList ] = useState([]);

    useEffect(() => {
      const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=f5b6ca4129cc9319b4f7ef192362f127&language=es-ES&page=1'
      axios.get(endPoint)
      .then(response => {
        const apiData = response.data;
        setMoviesList(apiData.results);
      })
    }, [setMoviesList])

  return (
    <>

        { !token && <Navigate to="/" />}

        <div className="row"> 
        {
          moviesList.map((oneMovie, idx) => {
            return (
              <div className="col-3" key={idx}>
                <div className="card">
                  <img src="..." className="card-img-top"  alt="..."/>
                  <div className="card-body"></div>
                  <h5 className="card-title">Movie title</h5>
                  <p className="card-text">Esta tarjeta representa la card de Peliculas recien salidas del cine de manera Pirata.</p>
                  <Link to="/" className="btn btn-primary">ver detalles</Link>
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
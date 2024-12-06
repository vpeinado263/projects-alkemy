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

    console.log(moviesList)

  return (
    <>

        { !token && <Navigate to="/" />}

        <div className="row"> 
        {
          moviesList.map((oneMovie, idx) => {
            return (
              <div className="col-4 col-sm-4" key={idx}>
                <div className="card my-4 shadow-sm">
                  <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.backdrop_path}`} className="card-img-top"  alt={oneMovie.title}/>
                  <div className="card-body"></div>
                  <h5 className="card-title text-truncate">{ oneMovie.title.substring(0, 30) }...</h5>
                  <p className="card-text text-truncate">{ oneMovie.overview.substring(0, 100) }...</p>
                  <Link to="/" className="btn btn-secondary btn-sm">ver detalles</Link>
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
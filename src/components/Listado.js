import { Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

function Listado  ()  {
    let  token = localStorage.getItem('token')

    useEffect(() => {
      const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=f5b6ca4129cc9319b4f7ef192362f127&language=es-ES&page=1'
      axios.get(endPoint)
      .then(response => {
        console.log(response);
      })
    }, [])


  return (
    <>

        { !token && <Navigate to="/" />}

        <div className="row"> 
         <div className="col-3">
             <div className="card">
                 <img src='...' className='card-img-top'  alt='...'/>
                 <div className='card-body'></div>
                 <h5 className='card-title'>Movie title</h5>
                 <p className='card-text'>gwwwwwwwwwwwwwwwwwwwfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</p>
                 <Link href="/" className='btn btn-primary'>ver detalles</Link>
             </div>
         </div>
        </div>
        </>
  )
}

export default Listado;
;
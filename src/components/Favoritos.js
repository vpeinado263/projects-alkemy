import { Link, Navigate } from 'react-router-dom';

function Favoritos (props) {
  let  token = sessionStorage.getItem('token')
  return (
    <>
    { !token && <Navigate to="/" />}
     <h2>Sección Favoritos</h2>
     <div className="row"> 
        { !props.favorites.length && <div className="col-12 text-danger">Nada Por Aquí </div>}
        {
          props.favorites.map((oneMovie, idx) => {
            return (
              <div className="col-4 col-sm-4" key={idx}>
                <div className="card my-4 shadow-sm">
                  <img src={oneMovie.imgURL} className="card-img-top"  alt={oneMovie.title}/>
                  <button 
                  className="favourite-btn"
                  onClick={(e) => props.addOrRemoveFromFavs(e, oneMovie)}
                  data-movie-id={oneMovie.id}
                  >🖤</button> 
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

export default Favoritos;

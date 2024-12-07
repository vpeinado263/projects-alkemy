import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swAlert from 'sweetalert2';
import axios from 'axios';

function Resultados() {
    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');

    const [moviesResults, setMoviesResults] = useState([]);

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=f5b6ca4129cc9319b4f7ef192362f127&language=es-ES&query=${keyword}`;

        axios
            .get(endPoint)
            .then((response) => {
                const moviesArray = response.data.results || []; // Asegurarse de que siempre sea un arreglo
                if (moviesArray.length === 0) {
                    swAlert.fire({
                        title: 'Búsqueda incorrecta',
                        html: 'No hay resultados para tu búsqueda.',
                        icon: 'error',
                    });
                }
                setMoviesResults(moviesArray);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [keyword]);

    return (
        <>
            <h2>
                Buscaste: <em>{keyword}</em>
            </h2>
            {moviesResults.length === 0 && <h3>No hay Resultados</h3> }
            <div className="row">
                {moviesResults.map((oneMovie, idx) => (
                    <div className="col-4" key={idx}>
                        <div className="card my-4 shadow-sm">
                            <img
                                src={
                                    oneMovie.poster_path
                                        ? `https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`
                                        : 'https://via.placeholder.com/500x750?text=Imagen+no+disponible'
                                }
                                className="card-img-top"
                                alt={oneMovie.title || 'Imagen no disponible'}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-truncate">
                                    {oneMovie.title
                                        ? oneMovie.title.substring(0, 30)
                                        : 'Título no disponible'}
                                    ...
                                </h5>
                                <Link
                                    to={`/detalle?movieID=${oneMovie.id}`}
                                    className="btn btn-secondary btn-sm"
                                >
                                    Ver detalles
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Resultados;

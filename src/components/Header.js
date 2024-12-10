import { Link } from 'react-router-dom';
//Components
import Buscador from './Buscador';

function Header (props) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                        {/*Barra de navegacion*/}
                        <ul  className="navbar-nav">
                             {/*Logo*/}
                            <Link to="/login" className="navbar-brand">
                                FilmMovie
                            </Link>
                            <li>
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/listado" >
                                    Listado
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/favoritos" >
                                    Favoritos
                                </Link>
                            </li>
                            <li className="d-flex align-items-center">
                                <span className="text-success">
                                    {
                                        props.favorites.length > 0 && <>Peliculas en Favoritos: {props.favorites.length}</>
                                    }
                                </span>
                            </li>
                        </ul>
                    
                </div>
                <Buscador />
            </nav>
        </header>
    )
}

export default Header; 
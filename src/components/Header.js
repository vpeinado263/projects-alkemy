import { Link } from 'react-router-dom';
//Components
import Buscador from './Buscador';

function Header () {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                        {/*Barra de navegacion*/}
                        <ul  className="navbar-nav">
                             {/*Logo*/}
                            <Link to="/" className="navbar-brand">
                                FilmMovie
                            </Link>
                            <li>
                                <Link className="nav-link" to="/login">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/listado" >
                                    Listado
                                </Link>
                            </li>
                        </ul>
                    
                </div>
                <Buscador />
            </nav>
        </header>
    )
}

export default Header; 
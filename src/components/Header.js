import { Link } from 'react-router-dom';
//Components
import Buscador from './Buscador';

function Header () {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container d-flex justify-content-between align-items-center">

                        {/*Logo*/}
                        <Link to="/" className="navbar-brand">
                            FilmMovie
                        </Link>

                        {/*Barra de navegacion*/}
                        <ul  className="navbar-nav d-flex flex-row gap-3">
                        <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/listado" className="nav-link">
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
import { Link } from 'react-router-dom';

function Header () {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <ul>
                        <Link to="/" className="navbar-brand">
                            Home
                        </Link>
                        <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul  className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/listado" className="nav-link">
                                    Listado
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    Registro
                                </Link>
                            </li>
                        </ul>
                    </div>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header; 
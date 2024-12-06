import { Link } from 'react-router-dom';

function Header () {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/listado">Listado</Link>
                    </li>
                    <li>
                        <Link to="/login">Registro</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header; 
import { Link } from "react-router-dom";

function Footer() {
    return(
        <footer className="bg-dark text-white text-center py-4">
            <nav>
                <ul className="list-unstyled d-flex justify-content-center mb-3">
                    <li className="mx-2">
                     <Link to="https://youtube.com">Youtube</Link>
                    </li>
                    <li className="mx-2">
                     <Link to="https://imstagram.com">Imstagram</Link>
                    </li>
                    <li className="mx-2">
                     <Link to="https://facebook.com">Facebook</Link>
                    </li>
                </ul>
            </nav>
            <p className="mb-0">Copyrigth Alkemy Challenge</p>
        </footer>
    )
}

export default Footer;
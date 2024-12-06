import { Link } from "react-router-dom";

function Footer() {
    return(
        <footer>
            <nav>
                <ul><Link to="https://youtube.com"></Link></ul>
                <ul><Link to="https://imstagram.com"></Link></ul>
                <ul><Link to="https://facebook.com"></Link></ul>
            </nav>
            <p>Coyrigyh Alkemy Challenge</p>
        </footer>
    )
}

export default Footer;
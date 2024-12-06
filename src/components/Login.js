import axios from "axios";
import swAlert from 'sweetalert2';
import { useHistory, Redirect } from 'react-router-dom';

function Login() {
    const history = useHistory();
    const submitHandler = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        console.log(regexEmail.test(email));

        if(email === '' || password === '') {
            swAlert(
                <div>
                    <h2>Los campos no pueden estar vacíos</h2>
                    <p>Debes completar las seldas de correo electronico y contraseña</p>
                </div>
                
            )
            return;
        }
        if(email !== '' && !regexEmail.test(email)) {
            swAlert(<h2>Direccion de correo Invalida</h2>);
            return;
        }
        if(email !== 'challenge@alkemy.org' || password !== 'react') {
            swAlert(<h2>Credenciales Inválidas</h2>);
            return;
        }
    
        axios
        .post('http://challenge-react.alkemy.org', {email, password})
        .then(res => {
            swAlert(<h2>Ingreso correcto</h2>)
            const tokenRecibido = res.data.token;
            localStorage.setItem('token',tokenRecibido)
            history.push('/listado');
        })
    }

    let token = localStorage.getItem('token');

    return (
        <>
        {token && <Redirect to="/listado" />}

        <h2>Ingresar a Cuenta</h2>
        <form onSubmit={submitHandler}>
            <label>
                <span>Correo Electrónico</span> <br />
                <input type="text" name="email" />
            </label>
            <br />
            <label>
                <span>Contraseña</span> <br />
                <input type="password" name="password" />
            </label>
            <br />
            <button type="submit">Ingresar</button>
        </form>
        </>
    )
}

export default Login;
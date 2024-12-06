import axios from "axios";
import swAlert from 'sweetalert2';
import { useNavigate, Navigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const submitHandler = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
       

        if(email === '' || password === '') {
            swAlert.fire(
                {
                    title: 'Los campos no pueden estar vacíos',
                    html: 'Debes completar las celdas de correo electrónico y contraseña.',
                    icon: 'error'
                } );

            return;
        }
        if(email !== '' && !regexEmail.test(email)) {
            swAlert.fire({
                title: 'Dirección de correo inválida',
                icon: 'error'
            });
            return;
        }
        if(email !== 'challenge@alkemy.org' || password !== 'react') {
            swAlert.fire({
                title: 'Credenciales inválidas',
                icon: 'error'
            });
            return;
        }
    
        axios
        .post('http://challenge-react.alkemy.org', {email, password})
        .then(res => {
            swAlert.fire({
                title: 'Ingreso correcto',
                icon: 'success'
            })
            const tokenRecibido = res.data.token;
            localStorage.setItem('token',tokenRecibido)
            navigate.push('/listado');
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
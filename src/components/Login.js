import axios from "axios";

function Login() {
    const submitHandler = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        console.log(regexEmail.test(email));

        if(email === '' || password === '') {
            console.log('Campos vacios');
            return;
        }
        if(email !== '' && !regexEmail.test(email)) {
            console.log('Direccion de correo Invalida');
            return;
        }
        if(email !== 'challenge@alkemy.org' || password !== 'react') {
            console.log('Credenciales Invalidad');
            return;
        }
        console.log('Información lista para Enviar');
        axios
        .post('http://challenge-react.alkemy.org', {email, password})
        .then(res => {
            console.log(res.data);
        })
    }
    return (
        <>
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
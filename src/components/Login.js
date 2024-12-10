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
        .post('https://challenge-react.alkemy.org', {email, password})
        .then(res => {
            swAlert.fire({
                title: 'Ingreso correcto',
                icon: 'success'
            })
            const tokenRecibido = res.data.token;
            sessionStorage.setItem('token',tokenRecibido)
            navigate('/listado');
        })
    }

    let token = sessionStorage.getItem('token');

    return (
        <>
        {token && <Navigate to="/listado" />}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-12">
            <div className="card p-4 shadow-sm">
              <h2 className="text-center mb-4">Ingresar a Cuenta</h2>
              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo Electrónico
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    required autocomplete="current-password"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary w-100">
                    Ingresar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Login;
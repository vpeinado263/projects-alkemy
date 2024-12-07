import { useNavigate } from 'react-router-dom';
import swAlert from 'sweetalert2';

function Buscador() {
    const navigate = useNavigate();
    const submitHandler = e => {

    e.preventDefault()
    const keyword = e.currentTarget.keyword.value.trim();

        if( keyword.length === 0 ) {
            swAlert.fire(
                {
                    title: 'Palabra incorrecta',
                    html: 'Tienes que escribir una palabra o letras claves.',
                    icon: 'error'
                } );
        } else if ( keyword.length < 4 ) {
            swAlert.fire(
                {
                    title: 'Faltan caracteres',
                    html: 'Tiene que escribir mas de 4 caracteres',
                    icon: 'error'
                }
            )
        } else {
            //Redirige ala página de resultados
            e.currentTarget.keyword.value = '';
            navigate(`/resultados?keyword=${keyword}`);
        }
    }

  return (
    <form className="d-flex align-items-center" onSubmit={submitHandler}>
        <label className="form-label mb-0 mx-2">
            <input className="form-control" type="text" name="keyword" placeholder="Escribe una palabra clave..."  />
        </label>
        <button className="btn btn-dark" >Buscar</button>
    </form>
  )
}

export default Buscador;

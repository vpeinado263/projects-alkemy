import swAlert from 'sweetalert2';

function Buscador() {
    const submitHandler = e => {

        e.preventDefault()

        const keyword = e.currentTarget.keyword.value.trim();
        console.log(keyword)

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

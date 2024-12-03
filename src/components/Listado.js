import { useHistory } from 'react-router-dom';

function Listado () {
    const history = useHistory();
    const token = localStorage.getItem('item');
    if(token === null) {
        history.push('/');
    }
    return (
        <h2>Componente Listado</h2>
    )
}

export default Listado;
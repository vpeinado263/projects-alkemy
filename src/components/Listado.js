import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Listado () {
    const history = useHistory();
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token === null) {
            history.push('/');
        }
    }, []);
   
    return (
        <h2>Componente Listado</h2>
    )
}

export default Listado;
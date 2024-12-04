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
        <div className="row">
            <div className="col-3">Peli-1</div>
            <div className="col-3">Peli-2</div>
            <div className="col-3">Peli 3</div>
            <div className="col-3">Peli 4</div>
            <div className="col-3">Peli-5</div>
            <div className="col-3">Peli-6</div>
            <div className="col-3">Peli 7</div>
            <div className="col-3">Peli 8</div>
        </div>
    )
}

export default Listado;
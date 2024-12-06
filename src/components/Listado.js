import { Link, Redirect } from 'react-router-dom';

function Listado () {
    let  token = localStorage.getItem('token')
       
    return (
        <>

        { !token && <Redirect to="/" />}

        <div className="row"> 
         <div className="col-3">
             <div className="card">
                 <img src='...' className='card-img-top'  alt='...'/>
                 <div className='card-body'></div>
                 <h5 className='card-title'>Movie title</h5>
                 <p className='card-text'>gwwwwwwwwwwwwwwwwwwwfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</p>
                 <Link href="/" className='btn btn-primary'>ver detalles</Link>
             </div>
         </div>
        </div>
        </>
    )
}

export default Listado;
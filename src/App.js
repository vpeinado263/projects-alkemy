import { Routes, Route } from 'react-router-dom';
import Detalle from './components/Detalle';
import Footer from './components/Footer';
import Header from './components/Header';
import Listado from './components/Listado';
import Login from './components/Login';
import Resultados from './components/Resultados';
import './css/app.css';
import './css/bootstrap.min.css';

function App() {

  const addOrRemoveFromFavs = () => {
    console.log('ok funcionó');
  }

  return (
    <>
    <Header />
  
    <div className='container mt-3'>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/listado" element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />} />
        <Route path="/detalle" element={<Detalle />} />
        <Route path="/resultados" element={<Resultados />} />
      </Routes>

      <Footer/>
   
    </div>
    </>
  );
}

export default App;

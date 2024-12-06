import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Listado from './components/Listado';
import Login from './components/Login';

import './css/bootstrap.min.css';

function App() {
  return (
    <>
    <Header/>
    
    {/* <div className='container mt-3'> */}
     <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/listado" element={<Listado />} />
     </Routes>

    <Footer/>
   
   
    </>
  );
}

export default App;

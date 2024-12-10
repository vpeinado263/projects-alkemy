import { Routes, Route } from 'react-router-dom';
import Detalle from './components/Detalle';
import Favoritos from './components/Favoritos';
import Footer from './components/Footer';
import Header from './components/Header';
import Listado from './components/Listado';
import Login from './components/Login';
import Resultados from './components/Resultados';
//Styles
import './css/app.css';
import './css/bootstrap.min.css';

function App() {

  const favMovies = localStorage.getItem('favs');
  let tempMoviesInFavs;

  if (favMovies === null) {
    tempMoviesInFavs = [];
  } else {
    tempMoviesInFavs = JSON.parse(favMovies);
  }
  console.log(tempMoviesInFavs);

  const addOrRemoveFromFavs = (e) => {
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector('img').getAttribute('src');
    const title = parent.querySelector('h5').innerText;
    const overview = parent.querySelector('p').innerText;
    
    const movieData = {
      imgURL, title, overview,
      id: btn.dataset.movieId
    }
    let movieIsInArray = tempMoviesInFavs.find(oneMovie => {
      return oneMovie.id === movieData.id
    })
    if(!movieIsInArray) {
      tempMoviesInFavs.push(movieData);
      localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs));
      console.log('Seagregó la pelicula');
    } else {
      let movieLeft = tempMoviesInFavs.filter(oneMovie => {
        return oneMovie.id !== movieData.id
      });
      localStorage.setItem('favs', JSON.stringify(movieLeft));
      console.log('Se elininó la película');
    }

   
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
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>

      <Footer/>
   
    </div>
    </>
  );
}

export default App;

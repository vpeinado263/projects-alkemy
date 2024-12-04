import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Listado from './components/Listado';
import Login from "./components/Login";

function App() {
  return (
    <>
    <Header/>
    <Switch>
     <Route exact patch="/" component={Login} />
     <Route patch="/listado" component={Listado} />
    </Switch>
    <Footer/>
    </>
  );
}

export default App;

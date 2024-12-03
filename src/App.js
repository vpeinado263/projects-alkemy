import { Switch, Route } from 'react-router-dom';
import Listado from './components/Listado';
import Login from "./components/Login";

function App() {
  return (
    <>
    <Switch>
     <Route exact patch="/" component={Login} />
     <Route patch="/listado" component={Listado} />
    </Switch>
    </>
  );
}

export default App;

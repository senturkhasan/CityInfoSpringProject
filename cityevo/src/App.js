import './App.css';
import CityAdd from './component/CityAdd';
import CityList from './component/CityList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { CityInfo } from './component/CityInfo';
function App() {
  return (
<Router>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" 
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <Link class="nav-item nav-link active" to="/">İl-ilçe Bilgileri</Link>
                <Link class="nav-item nav-link " to="/addcity">İl-ilçe Ekle</Link>
                <Link class="nav-item nav-link " to="/cities">Bilgi Listele</Link>
                </div>
            </div>
         </nav>
        <Switch>
          <Route exact path="/">
            <CityInfo />
          </Route>
          <Route path="/addcity">
            <CityAdd />
          </Route>
          <Route path="/cities">
            <CityList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

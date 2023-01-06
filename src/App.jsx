import logo from './logo.svg';
import './App.css';
import {Link, Route, Switch} from "react-router-dom";
import AboutPage from "./components/pages/about";
import HomePage from "./components/pages/home";
import UsersPage from "./components/pages/users";
import NotFoundPage from "./components/pages/notFoundPage";

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/about'>About</Link>
        </div>
        <div>
          <Link to='/users'>Users</Link>
        </div>
      </header>
      <hr/>

      <main>
        <Switch>
          <Route exact path='/about'>
            <AboutPage/>
          </Route>
          <Route exact path='/users'>
            <UsersPage/>
          </Route>
          <Route exact path='/'>
            <HomePage/>
          </Route>
          <Route>
            <NotFoundPage/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

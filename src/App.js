
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import CreateAccount from "./components/CreateAccount";
import ShowAccount from "./components/ShowAccount";

function App() {
  return (
    <Router>
      <div>

        <Navbar /><br/>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/createaccount" component={CreateAccount} />
          <Route path="/showaccount" component={ShowAccount} />
          <Route path="/" exact component={Home} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;

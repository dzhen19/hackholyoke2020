import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './pages/dashboard';
import Register from './pages/RegisterPage/Register';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
    <Navbar />
      <Router>
        <Switch>
          <Route path="/">
            <Register />
            {/*<Dashboard />*/}
          </Route>
        </Switch>
    </Router>
    </div>
    )
  }

export default App;

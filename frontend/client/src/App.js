import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './pages/dashboard'
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
    <Navbar />
      <Router>
        <Switch>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
    </Router>
    </div>
    )
  }

export default App;

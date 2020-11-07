import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './pages/dashboard'

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
    </Router>
    )
  }

export default App;

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './pages/dashboard'

function App() {
  // const Circle = () => {
  //   return (
  //     <svg>
  //       <circle
  //         cx="150"
  //         cy="77"
  //         r="40"
  //       />
  //     </svg>
  //   )
  // }

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

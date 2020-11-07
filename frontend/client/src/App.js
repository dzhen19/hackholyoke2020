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
<<<<<<< HEAD
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
    </Router>
    )
  }
  function About() {
    return <h2>About</h2>;
  }
=======
    <div className="App">
<<<<<<< HEAD
      <h1>btu</h1>
=======
      {Graph()}
>>>>>>> 38bd2f52c3db90a631a8384a298c53f773208142
    </div>
  );
}
>>>>>>> 83cdc676ec77d561935d9bd899882f0a00082ab0

export default App;

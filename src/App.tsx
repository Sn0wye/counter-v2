import Counter from "./components/Counter"
import Home from "./components/Home"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/counter">
              <Counter />
            </Route>
          </Switch>
        </div>
      </div>
    </Router >
  )
}

export default App

import Counter from "./pages/Counter"
import Home from "./pages/Home"
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
            <Route path="/counter/:time">
              <Counter />
            </Route>
          </Switch>
        </div>
      </div>
    </Router >
  )
}

export default App

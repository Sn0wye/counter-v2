import Counter from "./components/Counter"
import Home from "./components/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContextInput } from './content/InputContext'

function App() {

  return (
    <BrowserRouter>
      <ContextInput>
        <div className="App">
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/counter" element={<Counter />} />
            </Routes>
          </div>
        </div>
      </ContextInput>
    </BrowserRouter >
  )
}

export default App
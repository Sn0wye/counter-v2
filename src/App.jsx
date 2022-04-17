import Counter from "./components/Counter";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [inputValue, setInputValue] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home setInputValue={setInputValue} />} />
            <Route
              path="/counter"
              element={<Counter inputValue={inputValue} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

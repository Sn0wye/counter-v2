import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './pages/Counter'
import Home from './pages/Home'

ReactDOM.render(
  <React.StrictMode>
    <Home />
    {/* <Counter initialTime="25" /> */}
  </React.StrictMode>,
  document.getElementById('root')
)

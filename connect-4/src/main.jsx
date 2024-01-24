import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GameBoard from './Components/GameBoard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GameBoard/>
  </React.StrictMode>,
)

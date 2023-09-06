import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [face, setFace] = useState('Kok')


  function flipCoin(){
    const newFlipCoin= Math.random() >0.5 ?"Kok": "Pil"
    setFace(newFlipCoin)

  }



  return (
    <div className="App">

      <h1>{face}</h1>
      <button onClick={flipCoin}>Rrotulloje</button>
      
    </div>
  )
}

export default App

import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [face, setFace] = useState('Kok')
  const[isKok,setisKok]=useState(0)
  const[isPil,setisPil]=useState(0)
console.log(face)

  function flipCoin(){
    const newFlipCoin= Math.random() >0.7 ?"kok": "pil"
    if (newFlipCoin === 'kok') setisKok(isKok +1)
    if (newFlipCoin === 'pil') setisPil(isPil +1)
    
    setFace(newFlipCoin)

  }




  return (
    <div className="App">

      <h1>{face}</h1>
<h3 >Kok: {isKok}</h3>
<h3>Pil: {isPil}</h3>

      <button onClick={flipCoin}>Rrotulloje</button>
      <button onClick={()=>{setisKok(0) & setisPil(0)}}>Reset</button>
      
    </div>
  )
}

export default App

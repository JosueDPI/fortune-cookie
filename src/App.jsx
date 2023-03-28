import { useState } from 'react'
import './App.css'
import pharases from './utils/phrases.json'
import Button from './components/Button'
import Phrase from './components/Phrase'
import getRandomArray from './utils/getRandomArray'

function App() {
  const imgs = [1, 2, 3, 4]
  const [phraseRandom, setPhraseRandom] = useState(getRandomArray(pharases))
  const [imgRandom, setImgRandom] = useState(getRandomArray(imgs))
  const appStyle = {
    backgroundImage: `url("/backgrounds/fondo${imgRandom}.jpg")`
  }

  return (
    <div style={appStyle} className="App">
      <h1 className='App__title'>GALLETAS DE LA FORTUNA</h1>
      <Phrase phraseRandom ={phraseRandom}/>
      <Button
      setPhraseRandom = {setPhraseRandom}
      setImgRandom = {setImgRandom}
      />
    </div>
  )
}

export default App

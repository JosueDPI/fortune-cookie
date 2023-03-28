const Phrase = ({phraseRandom}) => {
  return (
    <div className="App__phrase">
      <p className="App__pphrase">{phraseRandom.phrase}</p>
    </div>
  )
}

export default Phrase
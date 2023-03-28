import getRandomArray from "../utils/getRandomArray"
import phrases from "../utils/phrases"

const Button = ({setPhraseRandom, setImgRandom}) => {

    const handleChangePhrase = () => {
        setPhraseRandom(getRandomArray(phrases))
        setImgRandom(getRandomArray([1,2,3,4]))
    }

  return (
    <button className="App__button" onClick={handleChangePhrase}>Ver otro</button>
  )
}

export default Button
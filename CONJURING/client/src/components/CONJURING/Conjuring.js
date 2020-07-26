import React, { useState, useEffect } from "react";

import { alpha, phrase } from "../../utils/HELPERS/data";

import { resetAlphabet, maskPhrase, replaceGuessedLetters} from "../../utils/HELPERS/functions";

import "./Conjuring.css";
import demon1 from "../../assets/images/demon1.jpg";
import background1 from "../../assets/images/background1.jpg";

const Conjuring = () => {

  const initialState = {
    guess: ''
  }

  // const [maskedPhrase, setMaskedPhrase] = useState(maskPhrase(phrase.quotes[1]))
  const [maskedPhrase, setMaskedPhrase] = useState(maskPhrase(phrase.books[0]))
  // const [tempPuzzle, setTempPuzzle] = useState(phrase.quotes[1])
  const [tempPuzzle, setTempPuzzle] = useState(phrase.books[0])
  const [alphabetArrayObj, setAlphabetArrayObj] = useState(resetAlphabet(alpha));
  const [displayAlphabet, setDisplayAlphabet] = useState(<p></p>);
  const [alphabetArray, setAlphabetArray] = useState(alpha.toUpperCase().split(""));
  const [guess, setGuess] = useState(initialState)
  const [gameOver, setGameOver] = useState('')

  const resetGuess = () => {
    setGameOver('')
    setGuess(initialState)
    console.log(guess)
    console.log('Reset?')
  }
  const handleSolveSubmit = (event) => {
    event.preventDefault()
    if(guess.guess.toUpperCase() === tempPuzzle.toUpperCase()){
      console.log('Winner')
    } else {
      console.log('Loser!!!')
    }
    resetGuess()
    
  }

  const handleSolveChange = (event) => {
    setGuess({...guess, 
          [event.target.name] :event.target.value})

    
  }

  const handleLetterClick = (event) => {
    // clear out letter once it has been selected by adding red class
    event.target.className = "alphaBoxes red";
    
    // test to see if already clicked
    let chosenLetter = event.target.dataset.letter;
    if(alphabetArray.includes(chosenLetter)){
      setMaskedPhrase(replaceGuessedLetters(chosenLetter, tempPuzzle, maskedPhrase))
      setAlphabetArray(alphabetArray.filter((el) => el !== chosenLetter));
    } else {
      console.log('Need to choose another letter')
    }
  };

  useEffect(()=>{
    console.log('GUESS!!!')
  }, [guess])

  // componentDidUpdate
  // sets alpha array to only those letters NOT chosen
  useEffect(()=>{
    setAlphabetArray(alphabetArray)
  }, [alphabetArray])

  // componentDidUpdate
  useEffect(() => {
    let newData = [];
    alphabetArrayObj.forEach((el, i) => {
      newData.push(
        <p
          className={el.available ? "alphaBoxes" : "alphaBoxes red"}
          key={i}
          data-letter={el.letter}
          data-hidden={true}
          onClick={el.available ? handleLetterClick : null}>
          {el.letter}
        </p>
      );
    });
    setDisplayAlphabet(newData)
  }, [alphabetArrayObj, maskedPhrase]); //maskedPhrase required in order to 'save' state


    // let test1 =[]
    // const test = maskedPhrase.split('').forEach((letter)=> test1.push(<p className='phraseLetters' >{letter}</p>))

  return (
    <div className="container-fluid" id="conjuring_container">
      <div className="row">
        <div className="col text-center">
          <h1 className="m-4">The Conjuring</h1>
        </div>
      </div>
      <div className="row" id="phrase_container">
            <div className="col text-center pt-4">
              {maskedPhrase.split('').map((letter, i)=> {
                return letter.charCodeAt() === 32
                ? <p className='phraseLetters' key={i}>&nbsp;&nbsp;</p>
                : <p className='phraseLetters' key={i}>{letter}</p>
                })
              }
            </div>
      </div>
      <main className="row" id="main_container">
        <div className="col my-3 text-center" id="image_container">
          <img src={demon1} alt="demon" id="demonImg" className="" />
        </div>
        <div className="col text-center">
          <div className="row pentagon mt-2" id="alpha_container">
            <div className='pentagon' id="inner_container">
              <div className="col text-center">{displayAlphabet}</div>
            </div>
          </div>
        </div>
        <div className="col my-3 text-center" id="solve_container">
          <form className='mt-5' method='POST'>
            <textarea className='mt-5' name="guess" id="" cols="30" rows="3" value={guess.solution} onChange={handleSolveChange}></textarea>
            <br/>
            <button className="btn btn-success btn-lg mt-2" onClick={handleSolveSubmit}>Solve</button>
          </form>
        </div>
      </main>
      
    </div>
  );
};

export default Conjuring;

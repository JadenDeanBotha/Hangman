import React from 'react';

const Word = ({ selectedWord, correctLetters }) => {

  return (
    <div className="word">
        {/* This splits up the word that the program has chosen and runs it through a map so that the letters can be compared to the users inputs */}
      {selectedWord.split('').map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        )
      })}
    </div>
  )
}

export default Word
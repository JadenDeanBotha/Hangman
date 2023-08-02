import React from 'react'

// This is just the header for the webpage
const Header = () => {
  //This is a function which gives the rules of the game when a user presses a button
function requestHelp() {
  alert(
    "Rules:\n1.You must guess the random word which the game has chosen\n2.Start by typing any letter on your keyboard\n3.If the letter is wrong it will be shown and a part of the man will be drwan\n4.You can only get the letter wrong 6 times before the game is over!"
  )
}
  return (
    <>
      <h1>Hangman</h1>
      <p>Find the hidden word - Just start typing!</p>
      <button type='button' onClick={() => requestHelp()}>Help</button>
    </>
  )
}

export default Header

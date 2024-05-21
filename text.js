import React, { useState } from 'react';
import './text.css';

function Text() {
  const [inputText, setInputText] = useState('');
  const [textLength, setTextLength] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);
    setTextLength(text.length);
    if (text.trim() === '') {
      setErrorMessage('Text cannot be empty');
    } else {
      setErrorMessage('');
    }
  };

  const convertToUpperCase = () => {
    setInputText(inputText.toUpperCase());
  };

  const convertToLowerCase = () => {
    setInputText(inputText.toLowerCase());
  };

  const removeExtraSpaces = () => {
    setInputText(inputText.replace(/\s+/g, ' ').trim());
  };

  const capitalizeFirstLetter = () => {
    setInputText(inputText.replace(/\b\w/g, (char) => char.toUpperCase()));
  };

  const reverseText = () => {
    setInputText(inputText.split('').reverse().join(''));
  };

  const clearText = () => {
    setInputText('');
    setTextLength(0);
    setErrorMessage('');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.getElementById('pola').style.backgroundColor = darkMode ? '#fff' : '#000';
  };

  return (
    <div id='pola'>
    <div className={`text-converter ${darkMode ? 'dark-mode' : ''}`}>
      <h1>Text Utils</h1>
      <textarea class=" mr-5"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text here..."
        rows={5}
        cols={100}
      />
      <div className="error-message">{errorMessage}</div>
      <div className="pavan">Text Length: {textLength}</div>
      <br />
      <div className="buttons">
        <button onClick={convertToUpperCase} class="mt-5">Convert to Uppercase</button>
        <button onClick={convertToLowerCase} class="mt-5">Convert to Lowercase</button>
        <button onClick={removeExtraSpaces} class="mt-5">Remove Extra Spaces</button>
        <button onClick={capitalizeFirstLetter} class="mt-5">Capitalize First Letter</button>
        <button onClick={reverseText} class="mt-5">Reverse Text</button>
        <button onClick={clearText} class="mt-5">Clear Text</button>

      </div>
      <button id='kumar' onClick={toggleDarkMode} style={{ backgroundColor: darkMode ? '#fff' : 'blue', color: darkMode ? '#000' : '#fff' }}>Theme</button>

    </div>
    </div>
    
  );
}

export default Text;

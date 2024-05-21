import React, { useState } from 'react';
import './quiz.css'

const Quiz = () => {
  const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Rome", "Berlin"],
        answer: "B"
      },
      {
        question: "what is the capital of 'AndhraPradesh'?",
        options: ["Vizag", "Vijayawada", "Amaravathi", "Kurnool"],
        answer: "c"
      },
      {
        question: "What is the chemical symbol for water?",
        options: ["O", "H2O", "CO2", "H"],
        answer: "B"
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Jupiter", "Mars", "Saturn"],
        answer: "C"
      },
      {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        answer: "B"
      }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [error, setError] = useState('');
  const [pavan, setScore] = useState('5');

  const handleNext = () => {
    if (!userAnswers[currentQuestion]) {
      setError('Please select an option');
      return;
    }
    if (userAnswers[currentQuestion] === questions[currentQuestion].correctAnswer) {
      setScore(pavan + 1);
    }

    setError('');
    setCurrentQuestion(prev => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestion(prev => prev - 1);
  };

  const handleOptionChange = (e) => {
    const { name, value } = e.target;
    setUserAnswers(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>Quiz</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div>
        <h2>{questions[currentQuestion].question}</h2>
        <div >
          {questions[currentQuestion].options.map((option, index) => (
            <label key={index} id='label'>
              <input
                type="radio"
                name={currentQuestion}
                value={option}
                checked={userAnswers[currentQuestion] === option}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          ))}
        </div>
        <button onClick={handlePrevious} disabled={currentQuestion === 0}>Previous</button>
        <button onClick={handleNext} disabled={currentQuestion === questions.length-1 } id='next'>Next</button>
      </div>
      {currentQuestion === questions.length-1  && (
        <div id='total'>
          <h2>Quiz Completed!</h2>
          <p >Your Score: {pavan}/{questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;

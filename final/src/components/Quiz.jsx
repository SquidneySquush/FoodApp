import React, { Component, useState, useEffect} from 'react';
import Recommend from '../http_fetch.js';

    
const Quiz = () =>  {

    const questions = [ 
      {
        questionText: 'What zones are you willing to venture out to?',
        answerOptions: [
          { answerText: 'A', isCorrect: 'A' },
          { answerText: 'B', isCorrect: 'B' },
          { answerText: 'C', isCorrect: 'C' },
          { answerText: 'D', isCorrect: 'D' },
        ],
      },
      {
        questionText: 'Boujie or Ballin’ on a Budget?',
        answerOptions: [
          { answerText: '$', isCorrect: '$' },
          { answerText: '$$', isCorrect: '$$', },
          { answerText: '$$$', isCorrect: '$$$', },
          { answerText: '$$$$', isCorrect: '$$$$', },
          { answerText: '$$$$$', isCorrect: '$$$$$', },
        ],
      },
      {
        questionText: 'Any cravings?',
        answerOptions: [
          { answerText: 'Italian', isCorrect: 'Italian' },
          { answerText: 'Chinese', isCorrect: 'Chinese' },
          { answerText: 'Indian', isCorrect: 'Indian' },
          { answerText: 'French', isCorrect: 'French' },
          { answerText: 'America', isCorrect: 'America' },
          { answerText: 'Japanese', isCorrect: 'Japanese' },
          { answerText: 'Thai', isCorrect: 'Thai' },
          { answerText: 'Brazilian', isCorrect: 'Brazilian' },
          { answerText: 'Mexican', isCorrect: 'Mexican' },
        ],
      },
      {
        questionText: 'Preferring Vegetarian?',
        answerOptions: [
          { answerText: 'Yes', isCorrect: 'Yes' },
          { answerText: 'No', isCorrect: 'No' },
        ],
      },
    ];
  
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [answers, setAnswers] = useState([]);
  
    const handleAnswerOptionClick = (isCorrect) => {
      if (isCorrect) {
        answers.push(isCorrect);
      }
  
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    };

   
    return (
    
      <div className='Quiz'>
       
        {showScore ? (
          <div className='score-section'>
            <Recommend answers={answers}/>
            <button name="redirect" onClick="redirect()"></button>{}
            
          <script type="text/javascript">
        function redirect(){ window.location.assign("http://localhost:3001")};
          </script>
          </div>
        ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))}
            </div>
          </>
        )}
      </div>
    );
  //};
   
}
export default Quiz; 
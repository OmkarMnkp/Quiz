import React, { useState } from "react";
import { Questions } from "../data";
import './Quiz.css';
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);


  // naviagte to Final Score

  const navigate = useNavigate()

  // Handles option change
  const handleOptionChange = (questionId, selectedOption) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: selectedOption,
    }));
  };

  // Go to next question
  const handleNext = () => {
    if (currentQuestion < Questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  //  final score 
  const handleResult =()=> {
    let score =0;
    Questions.forEach((q)=>{
      if(selectedAnswers[q.id] === q.answer){
        score++;
      }
    })

    // store data in local storage
    localStorage.setItem("quizScore",score);
    localStorage.setItem("totalquestion",Questions.length);
    navigate('/result')
  }


  const item = Questions[currentQuestion];

  return (
    <div className="quiz-container">
      <div key={item.id} className="quiz-question">
        <h2>{item.id}</h2>
        <h3>{item.question}</h3>
        <ul className="quiz-options">
          {item.options.map((opt, i) => (
            <li key={i} className="quiz-option">
              <label>
                <input
                  type="radio"
                  name={`question-${item.id}`}
                  value={opt}
                  checked={selectedAnswers[item.id] === opt}
                  onChange={() => handleOptionChange(item.id, opt)}
                />
                {opt}
              </label>
            </li>
          ))}
        </ul>

        {currentQuestion < Questions.length - 1 ? (
          <button onClick={handleNext} className="next-btn">Next</button>
        ) : (
            <button onClick={handleResult} className="next-btn">Score</button>
        )}
      </div>
    </div>
  );
};

export default Quiz;

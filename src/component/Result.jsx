


import React from "react";
import '../component/Result.css';
import { useNavigate } from "react-router-dom";


const Result = () => {

    const navigate = useNavigate();

    // get score from localstorage
    const score = localStorage.getItem("quizScore") || 0;
    const total = localStorage.getItem("totalQuestions")||0;


    const Handleretake = () => {

        // remove stored score
        localStorage.removeItem("quizScore");
        localStorage.removeItem("totalQuestions");
        navigate('/')
    }

    return (
        <div className="result-container">
            <h2>Score</h2>
            <p>Your final Score is :{score}/{total}</p>
            <h4> Want to retake the Quiz <p onClick={Handleretake}>Retake</p> </h4>
        </div>
    );
}
export default Result;
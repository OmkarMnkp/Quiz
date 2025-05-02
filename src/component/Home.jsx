
import React from "react";
import { useNavigate } from "react-router-dom";


const Home =()=>{

    const navigate = useNavigate();

    const HandleQuiz =()=>{
        navigate('/quiz')
    }

    return(
        <div className="container">
            <button className="btn btn-primary" onClick={HandleQuiz}>Start Quiz</button>
        </div>
    )
}
export default Home;
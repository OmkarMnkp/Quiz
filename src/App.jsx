import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Quiz from './component/Quiz';
import QuestionCard from './component/QuestionCard';
import Result from './component/Result';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/questioncard" element={<QuestionCard />} />
        <Route path="/result" element={<Result/>} />

      </Routes>
    </Router>
  );
}

export default App;

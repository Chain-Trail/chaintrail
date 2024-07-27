'use client';
import { useState, useEffect } from "react";

const GameComponent = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch(`/api/questions/${currentQuestion}`)
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userInput.toLowerCase() ===
      questions[currentQuestion].answer.toLowerCase()
    ) {
      setScore(score + 100);
    }
    setCurrentQuestion(currentQuestion + 1);
    setUserInput("");
  };

  if (currentQuestion >= questions.length) {
    return <div>Game Over! Your score is {score}</div>;
  }

  return (
    <div>
      <div className="images">
        {questions[currentQuestion].images.map((url, index) => (
          <img key={index} src={url} alt="Question" />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>Score: {score}</div>
    </div>
  );
};

export default GameComponent;

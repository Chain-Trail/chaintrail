'use client';
import { useState, useEffect } from "react";

const GameComponent = () => {
  const [hackQuest, setHackQuest] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(hackQuest.isAnswered)
  const [isOpened, setIsOpened] = useState(hackQuest.isOpened)
  const [isCompleted, setIsCompleted] = useState(hackQuest.isCompleted)

  useEffect(() => {
    fetch(`/api/questions/${currentQuestion}`)
      .then((response) => response.json())
      .then((data) => setHackQuest(data));
  }, []);

  if (hackQuest) {
    setIsOpened(true);

    const updateIsOpened = async () => {
      try {
        const response = await fetch(`/api/questions/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ isOpened })
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    updateIsOpened();
  }

  const quest = JSON.parse(hackQuest.quest);

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      userInput.toLowerCase() ===
      quest.answers[currentQuestion].toLowerCase()
    ) {

      setIsAnswered(true);
      setScore(score + 100);

      try {
        const response = await fetch(`/api/questions/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ isAnswered })
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  }

  setCurrentQuestion(currentQuestion + 1);
  setUserInput("");

  if (currentQuestion >= quest.answers.length) {

    setIsCompleted(true);

    const updateIsCompleted = async () => {
      try {
        const response = await fetch(`/api/questions/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ isCompleted })
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    updateIsCompleted();

    return <div>Game Over! Your score is {score}</div>;
  }

  return (
    <div>
      <div className="images">
        {quest.images[currentQuestion].map((url, index) => (
          <img key={index} src={url} alt="Image" />
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

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CiCircleCheck } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";
import { GrFormNextLink } from "react-icons/gr";
import UserPoints from "./Points";

const questions = [
  {
    images: [
      "../quest/bitcoin.jpg",
      "../quest/bitcoin2.jpg",
      "../quest/bitcoin3.jpg",
      "../quest/bitcoin4.jpg",
    ],
    possibleAnswers: ["C", "B", "T", "D", "O", "I", "F", "N"],
    correctAnswer: "BITCOIN",
  },
  {
    images: [
      "../quest/bitcoin4.jpg",
      "../quest/bitcoin.jpg",
      "../quest/bitcoin.jpg",
      "../quest/bitcoin3.jpg",
    ],
    possibleAnswers: ["1", "B", "T", "E", "O", "A", "F", "N"],
    correctAnswer: "BITCOIN",
  },
  {
    images: [
      "../quest/bitcoin.jpg",
      "../quest/bitcoin4.jpg",
      "../quest/bitcoin3.jpg",
      "../quest/bitcoin3.jpg",
    ],
    possibleAnswers: ["1", "B", "T", "E", "O", "A", "F", "N"],
    correctAnswer: "BITCOIN",
  },
  {
    images: [
      "../quest/bitcoin.jpg",
      "../quest/bitcoin.jpg",
      "../quest/bitcoin.jpg",
      "../quest/bitcoin.jpg",
    ],
    possibleAnswers: ["1", "B", "T", "E", "O", "A", "F", "N"],
    correctAnswer: "BITCOIN",
  },
  // Add 4 more question objects here
];

const QuestionComponent = () => {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (answer) => {
    setSelectedAnswers([...selectedAnswers, answer]);
  };

  const deleteLast = () => {
    setSelectedAnswers(selectedAnswers.slice(0, -1));
  };

  const handleSubmit = () => {
    const submittedAnswer = selectedAnswers.join("");
    const correct = submittedAnswer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowPopup(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex === questions.length - 1) {
      router.push("/"); // Redirect to homepage on last question
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswers([]);
      setShowPopup(false);
    }
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <section>
      <div className="mt-16 py-1 flex justify-between font-bold items-center">
        <div className="flex items-center gap-2">
          <img src="../chaincoins.svg" alt="Chain Coins" />
          <span><UserPoints/></span>
        </div>
        <div className="flex">
          <img src="../redImg.png" alt="level" className="w-[60px]" />
          <span className="relative text-sm top-[17px] right-[43px]">
            {currentQuestionIndex + 1}/{questions.length}
          </span>
        </div>
        <div className="text-2xl flex gap-2 font-extrabold ">
          <Link href="/">
            <RiMenu3Fill title="home" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 place-content-center max-w-fit mx-auto">
        {currentQuestion.images.map((image, index) => (
          <img
            key={index}
            loading="lazy"
            src={image}
            className=" rounded-lg hover:brightness-50"
            alt={`question ${currentQuestionIndex + 1} image ${index + 1}`}
            style={{ width: "120px" }}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 place-content-center mx-auto max-w-[300px] gap-4 my-4">
        <div className="flex flex-wrap items-center gap-2 justify-center">
          {currentQuestion.possibleAnswers.map((answer, index) => (
            <div
              key={index}
              className="bg-black hover:bg-yellow-900 text-white p-2 rounded-md cursor-pointer"
              onClick={() => handleAnswerClick(answer)}>
              {answer}
            </div>
          ))}
        </div>

        <div className="flex flex-col w-full justify-center gap-1 items-center ">
          <div className=" min-w-[150px] flex items-center justify-between rounded-lg bg-black text-yellow-500 min-h-[30px] p-2">
            Ans: <span>{selectedAnswers.join("")}</span>
          </div>
          <div className="flex items-center justify-center text-sm gap-2 my-2">
            <button
              className="bg-white text-black p-2 rounded-lg"
              onClick={deleteLast}>
              Delete
            </button>
            <button
              className="bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-lg"
              onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-2 mt-4 text-sm gap-4">
        <button className="bg-black text-white py-2 px-4 rounded-lg">
          GET HINT WITH
          <img
            src="../chaincoins.svg"
            width={30}
            className="inline mx-2"
            alt="hint"
          />
          20
        </button>

        <span
          className="bg-green-700 flex flex-col p-2 rounded-lg items-center justify-between cursor-pointer"
          onClick={handleNext}>
          {currentQuestionIndex === questions.length - 1 ? (
            <>
              <CiCircleCheck /> FInish Quest
            </>
          ) : (
            <>
              <GrFormNextLink /> Next
            </>
          )}
        </span>
      </div>

      {showPopup && (
        <div
          className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg ${
            isCorrect ? "bg-green-500" : "bg-red-500"
          } text-white`}>
          {isCorrect ? "Correct!" : "Incorrect!"}
        </div>
      )}
    </section>
  );
};

export default QuestionComponent;

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CiCircleCheck } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";
import { GrFormNextLink } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

const questions = [
  {
    images: [
      "../quest/bitcoin.jpg",
      "../quest/bitcoin2.jpg",
      "../quest/bitcoin3.jpg",
      "../quest/bitcoin4.jpg",
    ],
    possibleAnswers: [
      "C",
      "B",
      "T",
      "D",
      "O",
      "A",
      "J",
      "Z",
      "A",
      "T",
      "D",
      "O",
      "I",
      "F",
      "F",
      "N",
    ],
    correctAnswer: "BITCOIN",
  },
  {
    images: [
      "../quest/bitcoin4.jpg",
      "../quest/bitcoin.jpg",
      "../quest/bitcoin.jpg",
      "../quest/bitcoin3.jpg",
    ],
    possibleAnswers: [
      "C",
      "B",
      "T",
      "D",
      "T",
      "D",
      "O",
      "I",
      "O",
      "I",
      "T",
      "D",
      "O",
      "I",
      "F",
      "N",
    ],
    correctAnswer: "BITIN",
  },
  {
    images: [
      "../quest/bitcoin.jpg",
      "../quest/bitcoin4.jpg",
      "../quest/bitcoin3.jpg",
      "../quest/bitcoin3.jpg",
    ],
    possibleAnswers: [
      "C",
      "B",
      "T",
      "D",
      "T",
      "D",
      "O",
      "I",
      "O",
      "I",
      "T",
      "D",
      "O",
      "I",
      "F",
      "N",
    ],
    correctAnswer: "BIUUOIN",
  },
  {
    images: [
      "../quest/bitcoin.jpg",
      "../quest/bitcoin.jpg",
      "../quest/bitcoin.jpg",
      "../quest/bitcoin.jpg",
    ],
    possibleAnswers: [
      "C",
      "B",
      "T",
      "D",
      "T",
      "D",
      "O",
      "I",
      "O",
      "I",
      "T",
      "D",
      "O",
      "I",
      "F",
      "N",
    ],
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
    const newSelectedAnswers = [...selectedAnswers, answer];
    setSelectedAnswers(newSelectedAnswers);

    // Check if the answer length matches the correct answer length
    if (newSelectedAnswers.length === currentQuestion.correctAnswer.length) {
      handleSubmit(newSelectedAnswers);
    }
  };

  const deleteLast = () => {
    setSelectedAnswers(selectedAnswers.slice(0, -1));
  };

  const handleSubmit = (answers = selectedAnswers) => {
    const submittedAnswer = answers.join("");
    const correct = submittedAnswer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowPopup(true);

    // Set a timer to move to the next question after 3 seconds
    setTimeout(() => {
      handleNext();
    }, 3000);
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
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <section>
      <div className="mt-16 py-1 flex justify-between font-bold items-center">
        <div className="flex items-center gap-2">
          <img src="../chaincoins.svg" alt="Chain Coins" />
          <span>1000</span>
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
      <div className="grid grid-cols-2 gap-2 place-content-center w-full mx-auto">
        {currentQuestion.images.map((image, index) => (
          <img
            key={index}
            loading="lazy"
            src={image}
            className=" rounded-lg hover:brightness-50 w-full mx-4"
            alt={`question ${currentQuestionIndex + 1} image ${index + 1}`}
          />
        ))}
      </div>
      {/* style for input area */}
      <div className="max-w-[320px] mx-auto bg-neutral-950 text-white px-1 py-2 my-3 flex items-center">
        <div className="flex mx-auto">
          {Array.from({ length: currentQuestion.correctAnswer.length }).map(
            (_, index) => (
              <span
                key={index}
                className="w-7 h-8 bg-[#404040] rounded mx-1 flex items-center justify-center">
                {selectedAnswers[index] || ""}
              </span>
            )
          )}
        </div>
      </div>

      <div className="mx-auto max-w-[320px] gap-4 my-4">
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
      </div>
      <div className="max-w-[320px] font-bold flex items-center justify-center py-2 text-sm gap-2 mx-auto">
        <button className="bg-white text-black py-2 px-2 rounded ">
          GET HINT WITH
          <img
            src="../chaincoins.svg"
            width={25}
            className="inline mx-2 object-cover w-[20px]"
            alt="hint"
          />
          20
        </button>
        <button
          className="bg-red-700 px-4 flex flex-col py-1 rounded items-center justify-between cursor-pointer"
          onClick={deleteLast}>
          <MdDelete />
          <span className="text-xs">Del </span>
        </button>
        <span
          className="bg-green-700 flex flex-col px-2 py-1 rounded items-center justify-between cursor-pointer"
          onClick={handleNext}>
          {currentQuestionIndex === questions.length - 1 ? (
            <>
              <CiCircleCheck /> <span className="text-xs">Finish </span>
            </>
          ) : (
            <>
              <GrFormNextLink /> <span className="text-xs">Next </span>
            </>
          )}
        </span>
      </div>
      {showPopup && (
        <div
          className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg ${
            isCorrect ? "bg-green-500" : "bg-red-500"
          } text-white`}>
          {isCorrect ? "Correct! You just earned 100 points" : "Incorrect!"}
        </div>
      )}
    </section>
  );
};

export default QuestionComponent;

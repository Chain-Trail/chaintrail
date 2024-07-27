"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CiCircleCheck } from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";
import { GrFormNextLink } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import Points from "@/app/components/user/Points";
import { questQuestions } from "./questions";
import { useTelegramAuth } from "@/app/TelegramAuthProvider";
import Modal from "@/app/components/Reusable/Modal";
import { Success } from "@/app/components/Reusable/Popup";
import { Wrong } from "@/app/components/Reusable/Popup";
import { Complete } from "@/app/components/Reusable/Popup";

const questions = questQuestions;

const QuestionComponent = () => {
  const { updatePoints } = useTelegramAuth();

  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showComplete, setShowComplete] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
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

    if (correct) {
      updatePoints(1000);
    }

    if (currentQuestionIndex === questions.length - 1) {
      setIsCompleted(true);
      // Set a timer to show the Complete page after 2 seconds
      setTimeout(() => {
        setShowComplete(true);
      }, 800);
    } else {
      // Set a timer to move to the next question
      setTimeout(() => {
        handleNext();
      }, 800);
    }
  };
  const handleNext = () => {
    if (isCompleted || showComplete) {
      console.log("Quest completed"); // Redirect to homepage when completed or console a message
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswers([]);
      setShowPopup(false);
    }
  };

  useEffect(() => {
    if (showPopup && !isCompleted) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup, isCompleted]);

  return (
    <section>
        <QuesUI/>
      {/* header starts */}
      <div className=" py-2 flex justify-between font-bold items-center text-sm">
        <div className="flex items-center gap-2">
          <img src="../chaincoins.svg" alt="Chain Coins" />
          <span>
            <Points />
          </span>
        </div>
        <div className="flex">
          <img src="../redImg.png" alt="level" className="w-[40px]" />
          <span className="relative text-xs top-[12px] right-[30px]">
            {currentQuestionIndex + 1}/{questions.length}
          </span>
        </div>
        <div className="text-2xl flex gap-2 font-extrabold ">
          <Link href="/">
            <RiMenu3Fill title="home" />
          </Link>
        </div>
      </div>
      {/* header ends and image list starts */}
      <section className="max-w-[320px] px-2">
        <div className="grid grid-cols-2 gap-2 place-content-center w-full mx-auto px-4">
          {currentQuestion.images.map((image, index) => (
            <img
              key={index}
              loading="lazy"
              src={image}
              className=" rounded-lg w-full max-h-[140px] hover:brightness-50"
              alt={`question ${currentQuestionIndex + 1} image ${index + 1}`}
            />
          ))}
        </div>
        {/* style for input area */}
        <div className="max-w-[300px] mx-auto bg-neutral-950 text-white px-1 py-2 my-1 flex items-center text-lg">
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
        <div className="mx-auto text-xl max-w-[320px] gap-4 my-2">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            {currentQuestion.possibleAnswers.map((answer, index) => (
              <div
                key={index}
                className="bg-black hover:bg-yellow-700 active:bg-yellow-900 text-white p-2 rounded-md cursor-pointer"
                onClick={() => handleAnswerClick(answer)}>
                {answer}
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-[320px] font-bold flex items-center text-lg justify-center py-2 gap-2 mx-auto">
          <button
            onClick={openModal}
            className="bg-white text-sm text-black py-2 px-2 rounded ">
            GET HINT WITH
            <img
              src="../chaincoins.svg"
              width={25}
              className="inline mx-2 object-cover w-[20px]"
              alt="hint"
            />
            20
          </button>
          <Modal
            isOpen={isModalOpen}
            hintText="please set the hint text dynamically. "
            onClose={closeModal}
          />
          <button
            className="bg-red-700 active:bg-red-500 px-4 flex flex-col py-1 rounded items-center justify-between cursor-pointer"
            onClick={deleteLast}>
            <MdDelete />
            <span className="text-xs">Del </span>
          </button>
          <span
            className="bg-green-700 active:bg-green-500 flex flex-col px-2 py-1 rounded items-center justify-between cursor-pointer"
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
          <div>
            {isCompleted && showComplete ? (
              <Complete />
            ) : isCorrect ? (
              <Success />
            ) : (
              <Wrong />
            )}
          </div>
        )}
      </section>
    </section>
  );
};

export default QuestionComponent;


const QuesUI =()=>{
    return (
      <div className="fixed inset-0 -z-30 flex items-center justify-center bg-black  font-bold text-lg">
        <div className="relative w-screen h-screen ">
          <Image
            src="/btn/success.png"
            alt="success background"
            width={1000}
            height={1000}
            className="absolute inset-0 w-full h-full "
          />
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
          <div className="absolute inset-0 flex items-center justify-center">

          </div>
        </div>
      </div>
    );
}
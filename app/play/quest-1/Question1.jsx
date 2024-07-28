"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RiMenu3Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import Points from "@/app/components/user/Points";
import { questQuestions } from "./questions";
import { useTelegramAuth } from "@/app/TelegramAuthProvider";
import SideNav from "@/app/components/Reusable/SideNav";
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
  const buttonSound =
    typeof Audio !== "undefined" ? new Audio("/btn/pick.mp3") : null;
  const SuccessSound =
    typeof Audio !== "undefined" ? new Audio("/btn/correct.mp3") : null;
  const wrongSound =
    typeof Audio !== "undefined" ? new Audio("/btn/fail.mp3") : null;
  const congratsSound =
    typeof Audio !== "undefined" ? new Audio("/btn/congrats.mp3") : null;

  const handleAnswerClick = (answer) => {
    // Play the button sound
    if (buttonSound) {
      buttonSound
        .play()
        .catch((error) => console.error("Error playing sound:", error));
    }

    const newSelectedAnswers = [...selectedAnswers, answer];
    setSelectedAnswers(newSelectedAnswers);

    // Check if the answer length matches the correct answer length
    if (newSelectedAnswers.length === currentQuestion.correctAnswer.length) {
      handleSubmit(newSelectedAnswers);
    }
  };

  const deleteLast = () => {
    // Play the button sound
    if (buttonSound) {
      buttonSound
        .play()
        .catch((error) => console.error("Error playing sound:", error));
    }
    setSelectedAnswers(selectedAnswers.slice(0, -1));
  };

  const handleSubmit = (answers = selectedAnswers) => {
    const submittedAnswer = answers.join("");
    const correct = submittedAnswer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowPopup(true);

    if (correct) {
      // Play the button sound
      if (SuccessSound) {
        SuccessSound.play().catch((error) =>
          console.error("Error playing sound:", error)
        );
      }
      updatePoints(1000);
    } else {
      // Play the wrong answer sound
      if (wrongSound) {
        wrongSound.play().catch((error) =>
          console.error("Error playing wrong sound:", error)
        );
      }
    }


   if (currentQuestionIndex === questions.length - 1) {
     setIsCompleted(true);
     // Set a timer to show the Complete page after 4 seconds
     setTimeout(() => {
       setShowComplete(true);
       // Play the congratulations sound 1 second after showing the complete page
       setTimeout(() => {
         if (congratsSound) {
           congratsSound
             .play()
             .catch((error) => console.error("Error playing sound:", error));
         }
       }, 1000);
     }, 4000);
   } else {
     // Set a timer to move to the next question
     setTimeout(() => {
       handleNext();
     }, 1500);
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
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <QuesUI />
      {/* header starts */}
      <div className="py-4 flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <img src="../chaincoins.svg" alt="Chain Coins" className="w-6 h-6" />
          <span className="font-bold">
            <Points />
          </span>
        </div>
        <div className="flex items-center">
          <img src="../redImg.png" alt="level" className="w-12 h-11" />
          <span className="relative text-xs -ml-7 mt-1 font-bold">
            {currentQuestionIndex + 1}/{questions.length}
          </span>
        </div>
        <SideNav />
      </div>
      {/* header ends and image list starts */}
      <section className="max-w-[320px]">
        <div className="grid grid-cols-2 gap-4">
          {currentQuestion.images.map((image, index) => (
            <img
              key={index}
              loading="lazy"
              src={image}
              className="rounded-lg w-full h-32 object-cover hover:brightness-75 transition-all"
              alt={`question ${currentQuestionIndex + 1} image ${index + 1}`}
            />
          ))}
        </div>
        {/* style for input area */}
        <div className="text-white py-4 flex justify-center">
          <div className="flex">
            {Array.from({ length: currentQuestion.correctAnswer.length }).map(
              (_, index) => (
                <span
                  key={index}
                  className="w-8 h-10 bg-gray-700 rounded mx-1 flex items-center justify-center text-lg">
                  {selectedAnswers[index] || ""}
                </span>
              )
            )}
          </div>
        </div>
        <div className="my-4">
          <div className="flex flex-wrap justify-center gap-2">
            {currentQuestion.possibleAnswers.map((answer, index) => (
              <button
                key={index}
                className="bg-black hover:bg-yellow-700 active:bg-yellow-900 text-white py-2 px-4 rounded-md text-lg"
                onClick={() => handleAnswerClick(answer)}>
                {answer}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 my-4">
          <button
            onClick={openModal}
            className="flex-grow bg-white text-black py-2 px-4 rounded text-sm font-bold flex items-center justify-center">
            GET HINT WITH
            <img src="../chaincoins.svg" className="w-5 h-8 ml-2" alt="hint" />
            <span className="ml-1">200</span>
          </button>
          <Modal
            isOpen={isModalOpen}
            hintText="please set the hint text dynamically. "
            onClose={closeModal}
          />
          <button
            className="flex-shrink-0 bg-red-700 active:bg-red-500 px-4 py-2 rounded flex flex-col items-center justify-center"
            onClick={deleteLast}>
            <MdDelete className="text-xl" />
            <span className="text-xs">Del</span>
          </button>
        </div>{" "}
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

const QuesUI = () => {
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
        <div className="absolute inset-0 flex items-center justify-center"></div>
      </div>
    </div>
  );
};

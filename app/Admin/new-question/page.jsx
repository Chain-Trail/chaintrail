"use client";
import { useState, useEffect } from "react";
import UploadFile from "@/app/components/Reusable/UploadFile";

const NewQuestion = () => {
  //   const [images1, setImages1] = useState(["", "", "", ""]);
  //   const [images2, setImages2] = useState(["", "", "", ""]);
  //   const [images3, setImages3] = useState(["", "", "", ""]);
  //   const [images4, setImages4] = useState(["", "", "", ""]);
  //   const [images5, setImages5] = useState(["", "", "", ""]);
  //   const [images6, setImages6] = useState(["", "", "", ""]);
  //   const [images7, setImages7] = useState(["", "", "", ""]);
  //   const [images8, setImages8] = useState(["", "", "", ""]);
  //   const [images9, setImages9] = useState(["", "", "", ""]);
  //   const [images10, setImages10] = useState(["", "", "", ""]);
  //   const [answer1, setAnswer1] = useState("");
  //   const [answer2, setAnswer2] = useState("");
  //   const [answer3, setAnswer3] = useState("");
  //   const [answer4, setAnswer4] = useState("");
  //   const [answer5, setAnswer5] = useState("");
  //   const [answer6, setAnswer6] = useState("");
  //   const [answer7, setAnswer7] = useState("");
  //   const [answer8, setAnswer8] = useState("");
  //   const [answer9, setAnswer9] = useState("");
  //   const [answer10, setAnswer10] = useState("");
  //   const [hint1, setHint1] = useState("");
  //   const [hint2, setHint2] = useState("");
  //   const [hint3, setHint3] = useState("");
  //   const [hint4, setHint4] = useState("");
  //   const [hint5, setHint5] = useState("");
  //   const [hint6, setHint6] = useState("");
  //   const [hint7, setHint7] = useState("");
  //   const [hint8, setHint8] = useState("");
  //   const [hint9, setHint9] = useState("");
  //   const [hint10, setHint10] = useState("");
  //   const [quest, setQuest] = useState({});
  //   const [questNumber, setQuestNumber] = useState(0);

  const [questions, setQuestions] = useState(
    Array.from({ length: 10 }, () => ({
      images: ["", "", "", ""],
      answer: "",
      hint: "",
    }))
  );
  const [questNumber, setQuestNumber] = useState(0);

  useEffect(() => {
    async function fetchQuestNumber() {
      try {
        const response = await fetch("/api/QuestNumber");
        const data = await response.json();
        setQuestNumber(data + 1);
      } catch (error) {
        console.error("Error fetching quest number:", error);
      }
    }

    fetchQuestNumber();
  }, []);

  const handleAddQuestion = async () => {
    const quest = {
      images: questions.map((q) => q.images),
      answers: questions.map((q) => q.answer),
      hints: questions.map((q) => q.hint),
    };

    try {
      // Update Quest Number
      const response2 = await fetch("/api/QuestNumber", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ questNumber }),
      });
      const data2 = await response2.json();
      alert(data2.message);

      // Tag Quest Number to quest and send to database
      const response3 = await fetch("/api/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quest, questNumber }),
      });
      const data3 = await response3.json();

      alert(data3.message);

      // Increment quest number for next question
      setQuestNumber((prevNumber) => prevNumber + 1);
    } catch (error) {
      console.error(error);
      alert("Could not send quest to database - " + error.message);
    }
  };

  const handleChange = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };

  return (
    <div className="p-4 mt-20 text-sm">
      {questions.map((q, index) => (
        <div key={index} className="mb-4 bg-neutral-900 p-1 rounded">
          <div className="mb-2">Question {index + 1}:</div>
          <div className="grid grid-cols-2 gap-2 mb-2">
            {q.images.map((image, imgIndex) => (
              <UploadFile
                key={imgIndex}
                image={image}
                setImage={(newImage) => {
                  const newImages = [...q.images];
                  newImages[imgIndex] = newImage;
                  handleChange(index, "images", newImages);
                }}
              />
            ))}
          </div>
          <input
            type="text"
            value={q.answer}
            onChange={(e) => handleChange(index, "answer", e.target.value)}
            placeholder="Answer"
            className="border w-32 mx-2 p-2 rounded"
          />
          <input
            type="text"
            value={q.hint}
            onChange={(e) => handleChange(index, "hint", e.target.value)}
            placeholder="Hint"
            className="border w-32 mx-2 p-2 rounded"
          />
        </div>
      ))}
      <button
        onClick={handleAddQuestion}
        className="bg-yellow-700 hover:bg-yellow-600 p-2 rounded">
        Add Quest
      </button>
    </div>
  );
};

export default NewQuestion;

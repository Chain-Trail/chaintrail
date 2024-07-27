"use client";
import { useState } from "react";
import UploadFile from "@/app/components/Reusable/UploadFile";

const NewQuestion = () => {
  const [questions, setQuestions] = useState(
    Array.from({ length: 10 }, () => ({
      images: ["", "", "", ""],
      answer: "",
      hint: "",
    }))
  );

  const handleAddQuestion = () => {
    const quest = {
      images: questions.map((q) => q.images),
      answers: questions.map((q) => q.answer),
      hints: questions.map((q) => q.hint),
    };

    fetch("/api/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quest }),
    }).then((response) => response.json());
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

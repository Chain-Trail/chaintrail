'use client';
import { useState } from "react";

const NewQuestion = () => {
  const [images, setImages] = useState(["", "", "", ""]);
  const [answer, setAnswer] = useState("");

  const handleAddQuestion = () => {
    fetch("/api/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ images, answer }),
    }).then((response) => response.json());
  };

  return (
    <div>
      {images.map((url, index) => (
        <input
        className="bg-black"
          key={index}
          type="file"
          value={url}
          onChange={(e) => {
            const newImages = [...images];
            newImages[index] = e.target.value;
            setImages(newImages);
          }}
        />
      ))}
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={handleAddQuestion}>Add Question</button>
    </div>
  );
};

export default NewQuestion;

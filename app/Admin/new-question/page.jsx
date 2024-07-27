'use client'
import { useState } from "react";

const NewQuestion = () => {
  const [images1, setImages1] = useState(["", "", "", ""]);
  const [images2, setImages2] = useState(["", "", "", ""]);
  const [images3, setImages3] = useState(["", "", "", ""]);
  const [images4, setImages4] = useState(["", "", "", ""]);
  const [images5, setImages5] = useState(["", "", "", ""]);
  const [images6, setImages6] = useState(["", "", "", ""]);
  const [images7, setImages7] = useState(["", "", "", ""]);
  const [images8, setImages8] = useState(["", "", "", ""]);
  const [images9, setImages9] = useState(["", "", "", ""]);
  const [images10, setImages10] = useState(["", "", "", ""]);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answer9, setAnswer9] = useState("");
  const [answer10, setAnswer10] = useState("");
  const [hint1, setHint1] = useState("");
  const [hint2, setHint2] = useState("");
  const [hint3, setHint3] = useState("");
  const [hint4, setHint4] = useState("");
  const [hint5, setHint5] = useState("");
  const [hint6, setHint6] = useState("");
  const [hint7, setHint7] = useState("");
  const [hint8, setHint8] = useState("");
  const [hint9, setHint9] = useState("");
  const [hint10, setHint10] = useState("");
  const [quest, setQuest] = useState({});
  const [questNumber, setQuestNumber] = useState(0);


  const handleAddQuestion = () => {

    setQuest({
      images: [
        images1, images2, images3, images4, images5, images6, images7, images8, images9, images10
      ],
      answers: [
        answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10
      ],
      hints: [
        hint1, hint2, hint3, hint4, hint5, hint6, hint7, hint8, hint9, hint10
      ]
    })

    useEffect(() => {
      async function fetchData() {
        try {
          //Get Quest Number (ID)
          const response1 = await fetch('/api/QuestNumber');
          const data1 = await response1.json();
          setQuestNumber(data1 + 1);

          //Update Quest Number
          const response2 = await fetch("/api/QuestNumber", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ questNumber }),
          });
          const data2 = await response2.json();
          alert(data2.message);

          //Tag Quest Number to quest
          const response3 = await fetch("/api/questions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ quest, questNumber }),
          });
          const data3 = await response3.json();

          alert(data3.message);

        } catch (error) {
          console.error(error);
          alert("Could not send quest to database - ", error.message);
        }
      }

      fetchData();
    }, []);
  };

  return (
    <div>
      First Question:
      {images1.map((url, index) => (
        <input
          className="bg-black"
          key={index}
          type="file"
          value={url}
          onChange={(e) => {
            const newImages = [...images1];
            newImages[index] = e.target.value;
            setImages1(newImages);
          }}
        />
      ))}
      <input
        type="text"
        value={answer1}
        onChange={(e) => setAnswer1(e.target.value)}
        placeholder="Answer"
      />
      <input
        type="text"
        value={hint1}
        onChange={(e) => setHint1(e.target.value)}
        placeholder="Hint"
      />

      {/* Second Question */}
      Second Question:
      {images2.map((url, index) => (
        <input
          className="bg-black"
          key={index}
          type="file"
          value={url}
          onChange={(e) => {
            const newImages = [...images2];
            newImages[index] = e.target.value;
            setImages2(newImages);
          }}
        />
      ))}
      <input
        type="text"
        value={answer2}
        onChange={(e) => setAnswer2(e.target.value)}
        placeholder='Answer'
      />
      <input
        type="text"
        value={hint2}
        onChange={(e) => setHint2(e.target.value)}
        placeholder="Hint"
      />

      {/* Third Question */}
      Third Question:
      {images3.map((url, index) => (
        <input
          className="bg-black"
          key={index}
          type="file"
          value={url}
          onChange={(e) => {
            const newImages = [...images3];
            newImages[index] = e.target.value;
            setImages3(newImages);
          }}
        />
      ))}
      <input
        type="text"
        value={answer3}
        onChange={(e) => setAnswer3(e.target.value)}
        placeholder='Answer'
      />
      <input
        type="text"
        value={hint3}
        onChange={(e) => setHint3(e.target.value)}
        placeholder="Hint"
      />

      {/* Fourth question */}
      Fourth Question:
      {images4.map((url, index) => (
        <input
          className="bg-black"
          key={index}
          type="file"
          value={url}
          onChange={(e) => {
            const newImages = [...images4];
            newImages[index] = e.target.value;
            setImages4(newImages);
          }}
        />
      ))}
      <input
        type="text"
        value={answer4}
        onChange={(e) => setAnswer4(e.target.value)}
        placeholder='Answer'
      />
      <input
        type="text"
        value={hint4}
        onChange={(e) => setHint4(e.target.value)}
        placeholder="Hint"
      />

      {/* Fifth question*/}
      Fifth Question:
      {images5.map((url, index) => (
        <input
          className="bg-black"
          key={index}
          type="file"
          value={url}
          onChange={(e) => {
            const newImages = [...images5];
            newImages[index] = e.target.value;
            setImages5(newImages);
          }}
        />
      ))}
      <input
        type="text"
        value={answer5}
        onChange={(e) => setAnswer5(e.target.value)}
        placeholder='Answer'
      />
      <input
        type="text"
        value={hint5}
        onChange={(e) => setHint5(e.target.value)}
        placeholder="Hint"
      />

      {/* Sixth question */}
      Sixth Question:
      {images6.map((url, index) => (
        <input
          className="bg-black"
          key={index}
          type="file"
          value={url}
          onChange={(e) => {
            const newImages = [...images6];
            newImages[index] = e.target.value;
            setImages6(newImages);
          }}
        />
      ))}
      <input
        type="text"
        value={answer6}
        onChange={(e) => setAnswer6(e.target.value)}
        placeholder='Answer'
      />
      <input
        type="text"
        value={hint6}
        onChange={(e) => setHint6(e.target.value)}
        placeholder="Hint"
      />

      {/* Seventh question */}
      Seventh Question:
      {images7.map((url, index) => (
        <input
          className="bg-black"
          key={index}
          type="file"
          value={url}
          onChange={(e) => {
            const newImages = [...images7];
            newImages[index] = e.target.value;
            setImages7(newImages);
          }}
        />
      ))}
      <input
        type="text"
        value={answer7}
        onChange={(e) => setAnswer7(e.target.value)}
        placeholder='Answer'
      />
      <input
        type="text"
        value={hint7}
        onChange={(e) => setHint7(e.target.value)}
        placeholder="Hint"
      />

      {/* Eighth question */}
      Eighth Question:
      {images8.map((url, index) => (
        <input
          className="bg-black"
          key={index}
          type="file"
          value={url}
          onChange={(e) => {
            const newImages = [...images8];
            newImages[index] = e.target.value;
            setImages8(newImages);
          }}
        />
      ))}
      <input
        type="text"
        value={answer8}
        onChange={(e) => setAnswer8(e.target.value)}
        placeholder='Answer'
      />
      <input
        type="text"
        value={hint8}
        onChange={(e) => setHint8(e.target.value)}
        placeholder="Hint"
      />

      {/* Ninth question */}
      Ninth Question:
      {images9.map((url, index) => (
        <input
          className="bg-black"
          key={index}
          type="file"
          value={url}
          onChange={(e) => {
            const newImages = [...images9];
            newImages[index] = e.target.value;
            setImages9(newImages);
          }}
        />
      ))}
      <input
        type="text"
        value={answer9}
        onChange={(e) => setAnswer9(e.target.value)}
        placeholder='Answer'
      />
      <input
        type="text"
        value={hint9}
        onChange={(e) => setHint9(e.target.value)}
        placeholder="Hint"
      />

      {/* Tenth question */}
      Tenth Question:
      {images10.map((url, index) => (
        <input
          className="bg-black"
          key={index}
          type="file"
          value={url}
          onChange={(e) => {
            const newImages = [...images10];
            newImages[index] = e.target.value;
            setImages10(newImages);
          }}
        />
      ))}
      <input
        type="text"
        value={answer10}
        onChange={(e) => setAnswer10(e.target.value)}
        placeholder='Answer'
      />
      <input
        type="text"
        value={hint10}
        onChange={(e) => setHint10(e.target.value)}
        placeholder="Hint"
      />
      <button onClick={handleAddQuestion}>Add Quest</button>
    </div>
  );
};

export default NewQuestion;

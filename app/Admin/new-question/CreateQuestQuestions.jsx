// app/components/CreateQuestQuestion.js
'use client';
import { useState, useEffect } from 'react';

export default function CreateQuestQuestion() {
  const [quests, setQuests] = useState([]);
  const [selectedQuestId, setSelectedQuestId] = useState('');
  const [question, setQuestion] = useState({
    questImage1: '',
    questImage2: '',
    questImage3: '',
    questImage4: '',
    questHints: '',
    questPossibleAnswers: ['', '', '', ''],
    isAnswered: false
  });

  useEffect(() => {
    fetchQuests();
  }, []);

  const fetchQuests = async () => {
    try {
      const response = await fetch('/api/quests');
      if (response.ok) {
        const data = await response.json();
        setQuests(data);
        if (data.length > 0) {
          setSelectedQuestId(data[0]._id);
        }
      } else {
        throw new Error('Failed to fetch quests');
      }
    } catch (error) {
      console.error('Error fetching quests:', error);
      alert('Failed to fetch quests. Please try again.');
    }
  };

  const handleChange = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value });
  };

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...question.questPossibleAnswers];
    newAnswers[index] = value;
    setQuestion({ ...question, questPossibleAnswers: newAnswers });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting question:", question);
    try {
      const response = await fetch(`/api/quests/${selectedQuestId}/questions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(question)
      });
      console.log("Response status:", response.status);
      if (response.ok) {
        const data = await response.json();
        console.log("Response data:", data);
        alert('Quest question added successfully!');
        setQuestion({
          questImage1: '',
          questImage2: '',
          questImage3: '',
          questImage4: '',
          questHints: '',
          questPossibleAnswers: ['', '', '', ''],
          isAnswered: false
        });
      } else {
        const errorData = await response.json();
        console.error("Failed to add quest question:", errorData);
        throw new Error(errorData.error || 'Failed to add quest question');
      }
    } catch (error) {
      console.error('Error adding quest question:', error);
      alert('server error. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-yellow-600">Add Quest Question</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="questSelect" className="block text-gray-700 mb-2">Select Quest</label>
          <select
            id="questSelect"
            value={selectedQuestId}
            onChange={(e) => setSelectedQuestId(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            {quests.map((quest) => (
              <option key={quest._id} value={quest._id}>
                {quest.questName}
              </option>
            ))}
          </select>
        </div>
        {['questImage1', 'questImage2', 'questImage3', 'questImage4'].map((field) => (
          <div key={field}>
            <label htmlFor={field} className="block text-gray-700 mb-2">{field} URL</label>
            <input
              type="text"
              id={field}
              name={field}
              value={question[field]}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
        ))}
        <div>
          <label htmlFor="questHints" className="block text-gray-700 mb-2">Quest Hints</label>
          <textarea
            id="questHints"
            name="questHints"
            value={question.questHints}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        {question.questPossibleAnswers.map((answer, index) => (
          <div key={index}>
            <label htmlFor={`answer${index}`} className="block text-gray-700 mb-2">Possible Answer {index + 1}</label>
            <input
              type="text"
              id={`answer${index}`}
              value={answer}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
        ))}
        <button type="submit" className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300">
          Add Question
        </button>
      </form>
    </div>
  );
}

// app/Admin/CreateQuestQuestion.js
'use client';
import { useState } from 'react';

export default function CreateQuestQuestion() {
  const [questId, setQuestId] = useState('');
  const [question, setQuestion] = useState({
    questImage1: '',
    questImage2: '',
    questImage3: '',
    questImage4: '',
    questHints: '',
    questPossibleAnswers: ['', '', '', ''],
    isAnswered: false
  });

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
    try {
      const response = await fetch(`/api/quests/${questId}/questions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(question)
      });
      if (response.ok) {
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
        throw new Error('Failed to add quest question');
      }
    } catch (error) {
      console.error('Error adding quest question:', error);
      alert('Failed to add quest question. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-yellow-600">Add Quest Question</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="questId" className="block text-gray-700 mb-2">Quest ID</label>
          <input
            type="text"
            id="questId"
            value={questId}
            onChange={(e) => setQuestId(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
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

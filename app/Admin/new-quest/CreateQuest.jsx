// /CreateQuest.js
'use client';
import { useState } from 'react';
import SideNav from "@/app/components/Reusable/SideNav";

export default function CreateQuest() {
  const [quest, setQuest] = useState({
    questName: '',
    questImage: '',
    questStatus: 'locked',
    questQuestions: []
  });

  const handleChange = (e) => {
    setQuest({ ...quest, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/quests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(quest)
      });
      if (response.ok) {
        alert('Quest created successfully!');
        setQuest({ questName: '', questImage: '', questStatus: 'locked', questQuestions: [] });
      } else {
        throw new Error('Failed to create quest');
      }
    } catch (error) {
      console.error('Error creating quest:', error);
      alert('Failed to create quest. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-xl">
      <div className="flex justify-end mr-4 mt-6">
        <SideNav />
      </div>
      <h2 className="text-2xl font-bold mb-6 text-yellow-600">Create New Quest</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="questName" className="block text-gray-700 mb-2">Quest Name</label>
          <input
            type="text"
            id="questName"
            name="questName"
            value={quest.questName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div>
          <label htmlFor="questImage" className="block text-gray-700 mb-2">Quest Image URL</label>
          <input
            type="text"
            id="questImage"
            name="questImage"
            value={quest.questImage}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div>
          <label htmlFor="questStatus" className="block text-gray-700 mb-2">Quest Status</label>
          <select
            id="questStatus"
            name="questStatus"
            value={quest.questStatus}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="locked">Locked</option>
            <option value="open">Open</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300">
          Create Quest
        </button>
      </form>
    </div>
  );
}

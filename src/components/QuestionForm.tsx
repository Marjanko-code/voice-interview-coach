import React, { useState } from "react";
import axios from "axios";

interface Question {
  text: string;
}

const QuestionForm: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
  const [text, setText] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      await axios.post("http://localhost:8080/api/questions", { text });
      setText("");
      onSuccess(); // Refresh list
    } catch (error) {
      console.error("Failed to create question:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow-md">
      <label className="block text-gray-700 font-medium">New Question</label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2"
        placeholder="Enter question text"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Question
      </button>
    </form>
  );
};

export default QuestionForm;


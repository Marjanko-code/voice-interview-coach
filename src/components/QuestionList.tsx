import React, { useEffect, useState } from "react";
import axios from "axios";
import AnswerList from "./AnswerList";

interface Answer {
  id: number;
  text: string;
}

interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

const QuestionList: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/questions");
      setQuestions(response.data);
    } catch (error) {
      console.error("Failed to fetch questions:", error);
    }
  };

  const deleteQuestion = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/api/questions/${id}`);
      fetchQuestions();
    } catch (error) {
      console.error("Failed to delete question:", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Question List</h2>
      {questions.map((q) => (
        <div
          key={q.id}
          className="bg-white p-4 mb-4 rounded shadow-md border border-gray-200"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">{q.text}</span>
            <button
              onClick={() => deleteQuestion(q.id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
          <AnswerList answers={q.answers} />
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
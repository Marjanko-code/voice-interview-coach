import React from "react";

type Answer = {
  id: number;
  text: string;
};

interface AnswerListProps {
  answers: Answer[];
}

const AnswerList: React.FC<AnswerListProps> = ({ answers }) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Answers:</h3>
      <ul className="list-disc list-inside">
        {answers.map((answer) => (
          <li key={answer.id}>{answer.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnswerList;
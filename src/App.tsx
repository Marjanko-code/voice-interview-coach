import React, { useState } from "react";
import "./App.css";
import QuestionForm from "./components/QuestionForm";
import QuestionList from "./components/QuestionList";

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleUpdate = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        Voice Interview Coach 🎤
      </h1>

      {/* Pridávanie otázok */}
      <QuestionForm onSuccess={handleUpdate} />

      {/* Zoznam otázok s odpoveďami */}
      <QuestionList key={refreshKey} />
    </div>
  );
}

export default App;

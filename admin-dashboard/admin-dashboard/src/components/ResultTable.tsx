import { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

type Result = {
  candidateName: string;
  questionText: string;
  answerText: string;
  score: number;
};

function ResultTable() {
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/results")
      .then((res) => setResults(res.data))
      .catch((err) => console.error("Failed to load results:", err));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwt_token");
    window.location.reload();
  };

  const exportCSV = () => {
    const csvRows = [
      ["Name", "Question", "Answer", "Score"],
      ...results.map((r) => [r.candidateName, r.questionText, r.answerText, r.score.toString()])
    ];

    const csvContent = csvRows.map(row => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "results.csv";
    link.click();
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Interview Results", 14, 16);
    doc.autoTable({
      head: [["Name", "Question", "Answer", "Score"]],
      body: results.map((r) => [r.candidateName, r.questionText, r.answerText, r.score.toString()]),
      startY: 20,
    });
    doc.save("results.pdf");
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Candidate Results</h2>
        <div className="flex gap-2">
          <button onClick={exportCSV} className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700">
            Export CSV
          </button>
          <button onClick={exportPDF} className="bg-indigo-600 text-white px-3 py-2 rounded hover:bg-indigo-700">
            Export PDF
          </button>
          <button onClick={handleLogout} className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700">
            Logout
          </button>
        </div>
      </div>

      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Question</th>
            <th className="p-2 border">Answer</th>
            <th className="p-2 border">Score</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, idx) => (
            <tr key={idx} className="text-sm">
              <td className="p-2 border">{r.candidateName}</td>
              <td className="p-2 border">{r.questionText}</td>
              <td className="p-2 border">{r.answerText}</td>
              <td className="p-2 border">{r.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultTable;
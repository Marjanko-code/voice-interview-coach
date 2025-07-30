import { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import ResultTable from "./components/ResultTable";
import axios from "axios";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("jwt_token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Voice Interview Admin Dashboard
      </h1>
      {isLoggedIn ? (
        <ResultTable />
      ) : (
        <LoginForm onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;

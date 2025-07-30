import { useState } from "react";
import axios from "axios";

type Props = {
  onLogin: () => void;
};

function LoginForm({ onLogin }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        username,
        password,
      });
      const token = res.data;
      localStorage.setItem("jwt_token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      onLogin();
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>
      {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 border rounded shadow-sm"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded shadow-sm"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
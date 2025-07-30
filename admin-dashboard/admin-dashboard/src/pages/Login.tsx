type LoginProps = {
  onLogin: () => void;
};

export default function Login({ onLogin }: LoginProps) {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-3 px-3 py-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 px-3 py-2 border rounded"
        />
        <button
          onClick={onLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}
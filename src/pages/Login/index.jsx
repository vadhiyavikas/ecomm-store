import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loggedInUser } from "../../utils/redux/Slice/usersSlice";
import { setCookie } from "../../utils/cookie/cookies";
import { useNavigate } from "react-router";
import { ClipLoader } from "react-spinners";

/* Assets */
import BgImage from "../../assets/bg-image.jpg";

const LoginPage = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error when user types
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page reload

    if (!formData.username || !formData.password) {
      setError("Please fill in both fields.");
      return;
    }

    setLoading(true); // Start loading

    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username: formData.username,
        password: formData.password,
      });

      const userRes = await axios.get("https://fakestoreapi.com/users/1");

      if (userRes.data) {
        dispatch(loggedInUser(userRes.data));
      }

      if (response.status === 200) {
        setCookie("token", response.data.token);
        navigate("/dashboard");
      }
    } catch (err) {
      setError("Invalid username or password. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${BgImage})` }}
      aria-label="Login Page Background"
    >
      <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-lg">
        <p className="text-3xl font-bold text-center mb-6">Login</p>

        {/* Demo Account Info */}
        <div className="py-2 font-medium text-gray-700 bg-gray-100 p-2 rounded-lg">
          <p className="text-sm">Demo Account</p>
          <p className="text-sm">👤 <strong>Username:</strong> johnd</p>
          <p className="text-sm">🔑 <strong>Password:</strong> m38rmF$</p>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Username Input */}
          <div className="flex flex-col">
            <label htmlFor="username" className="text-lg font-medium">
              Username:
            </label>
            <input
              id="username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg font-medium">
              Password:
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="p-3 rounded-lg bg-blue-500 text-white text-lg font-medium hover:bg-blue-600 transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? <ClipLoader size={20} color="white" /> : "Log In"}
          </button>
        </form>

        {/* Forgot Password & Register Links */}
        <div className="text-center mt-4">
          <p className="text-gray-600 text-sm">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
          <p className="text-gray-600 text-sm">
            <a href="#" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

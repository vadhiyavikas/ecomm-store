import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loggedInUser } from "../../utils/redux/Slice/usersSlice";
import { setCookie } from "../../utils/cookie/cookies";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page reload
    if (!formData.username || !formData.password) {
      alert("Please fill in both fields.");
      return;
    }

    // Here you can send the data to an API (e.g., via fetch or axios)
    const response = await axios.post("https://fakestoreapi.com/auth/login", {
      username: formData.username,
      password: formData.password,
    });
    const res = await axios.get("https://fakestoreapi.com/users/1");
    if (res) {
      dispatch(loggedInUser(res.data));
    }

    if (response.status === 200) {
      setCookie("token", response.data.token);
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col w-1/3 items-center gap-6 bg-white rounded-2xl p-8 shadow-xl min-h-[400px]">
        <p className="text-3xl font-bold">Login</p>
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium">
              Username:
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="border rounded px-3 py-2"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg font-medium">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border rounded px-3 py-2"
              required
            />
          </div>
          <button
            type="submit"
            className="p-3 rounded-xl bg-blue-500 text-white cursor-pointer text-lg font-medium hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

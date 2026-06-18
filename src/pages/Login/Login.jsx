import { useState, useContext } from "react";
import { loginUser } from "../../services/authService";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response =
  await loginUser(formData);

login(response.token);

localStorage.setItem(
  "token",
  response.token
);

// ONLY if backend sends role
localStorage.setItem(
  "role",
  response.role
);

alert("Login Successful");

navigate("/");

    } catch (error) {

      const message =
        error.response?.data ||
        "Invalid Credentials";

      alert(message);

    }

  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-950 text-white">

      <form
        onSubmit={handleSubmit}
        className="
          bg-slate-900
          p-10
          rounded-3xl
          w-[400px]
          border
          border-slate-800
          shadow-2xl
        "
      >

        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="
            w-full
            p-3
            mb-4
            rounded-xl
            bg-slate-800
            outline-none
          "
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="
            w-full
            p-3
            mb-6
            rounded-xl
            bg-slate-800
            outline-none
          "
          required
        />

        <button
          type="submit"
          className="
            w-full
            p-3
            rounded-xl
            bg-gradient-to-r
            from-blue-500
            to-purple-600
            hover:scale-105
            transition
          "
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;
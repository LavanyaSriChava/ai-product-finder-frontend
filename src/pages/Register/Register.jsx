import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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

     const response = await registerUser(formData);

localStorage.setItem("token", response.token);

navigate("/");

    } catch (error) {

  console.error(error);

  const message =
    error.response?.data ||
    "Registration Failed";

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
          Register
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
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
          type="email"
          name="email"
          placeholder="Email Address"
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
          Register
        </button>

        <p className="text-center text-slate-400 mt-5">

          Already have an account?

          <span
            onClick={() => navigate("/login")}
            className="
              text-blue-400
              cursor-pointer
              ml-2
              hover:underline
            "
          >
            Login
          </span>

        </p>

      </form>

    </div>
  );
}

export default Register;
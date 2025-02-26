import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import Person_Icon from "../assets/person_icon01.png";
import Email_Icon from "../assets/email_icon01.png";
import Password_Icon from "../assets/password_icon01.png";

const Login = () => {
  const navigate = useNavigate();

  const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContent);

  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubitHandler = async (e) => {
    try {
      e.preventDefault();

      axios.defaults.withCredentials = true;

      if (state === "Sign Up") {
        const { data } = await axios.post(backendUrl + "/api/auth/register", {
          name,
          email,
          password,
        });

        if (data.success) {
          setIsLoggedin(true);
          getUserData();
          navigate("/");
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/auth/login", {
          email,
          password,
        });

        if (data.success) {
          setIsLoggedin(true);
          getUserData();
          navigate("/");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-[#dadad8] to-[#ececea]">
      <img
        onClick={() => navigate("/")}
        src={assets.logoDark}
        alt="login page logo"
        className="absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer"
      />

      <div className="bg-white p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm">
        <h2 className="text-3xl font-semibold text-black text-center mb-3">
          {state === "Sign Up" ? "New Here?" : "Login"}
        </h2>

        <p className="text-center text-sm mb-6 text-black">
          {state === "Sign Up"
            ? "Create your account"
            : "Login to your account!"}
        </p>

        <form onSubmit={onSubitHandler}>
          {state === "Sign Up" && (
            <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-sm bg-[#fff] border border-black">
              {/* <img src={assets.person_icon} alt="" /> */}
              <img
                src={Person_Icon}
                alt="person icon for full name"
                width={12}
              />
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="bg-transparent outline-none text-black"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>
          )}

          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-sm bg-[#fff] border border-black">
            {/* <img src={assets.mail_icon} alt="" /> */}
            <img src={Email_Icon} alt="" width={13} />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="bg-transparent outline-none text-black"
              type="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-sm bg-[#fff] border border-black">
            {/* <img src={assets.lock_icon} alt="" /> */}
            <img src={Password_Icon} alt="" width={12} />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="bg-transparent outline-none text-black"
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <p
            onClick={() => navigate("/reset-password")}
            className="mb-4 text-[#149e84] cursor-pointer"
          >
            Forgot Password?
          </p>

          <button className="w-full py-2.5 rounded-md bg-gradient-to-r from-[#149e84] to-[#179f85] text-white font-medium">
            {state}
          </button>
        </form>

        {state === "Sign Up" ? (
          <p className="text-center text-xs mt-4 text-black">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-[#149e84] cursor-pointer underline"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="text-black text-center text-xs mt-4">
            Dont have an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-[#149e84] cursor-pointer underline"
            >
              Sign up
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;

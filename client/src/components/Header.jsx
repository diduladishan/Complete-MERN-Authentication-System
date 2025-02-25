import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContent } from "../context/AppContext";

const Header = () => {
  const { userData } = useContext(AppContent);

  return (
    <div className="flex flex-col items-center mt-20 px-4 text-center text-gray-800">
      {/* <img
        src={assets.header_img}
        alt="header img"
        className="w-36 h-36 rounded-full mb-6"
      /> */}

      <h1 className="flex items-center gap-2 text-xl sm:text-3xl font-medium mb-6 text-white">
        Hi{" "}
        <span className="text-[#92e21f]">
          {userData ? userData.name : "Developer"}
        </span>
        <img
          className="w-8 aspect-square"
          src={assets.hand_wave}
          alt="welcome img"
        />
      </h1>

      <h2 className="text-3xl sm:text-5xl font-semibold mb-6 text-white">
        Welcome to our MERN-based authentication system.
      </h2>

      <p className="mb-8 max-w-md text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt.
      </p>

      <button className="border border-white px-8 py-2.5 hover:bg-[#1eaa8f] transition-all rounded-md bg-[#149e84]  text-white font-medium">
        Contact Us
      </button>
    </div>
  );
};

export default Header;

import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div>
      <img
        src={assets.header_img}
        alt="header img"
        className="w-36 h-36 rounded-full mb-6"
      />

      <h1>
        Hey Developer{" "}
        <img
          className="w-8 aspect-square"
          src={assets.hand_wave}
          alt="welcome img"
        />
      </h1>
    </div>
  );
};

export default Header;

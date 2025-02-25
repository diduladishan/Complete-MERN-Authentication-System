import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Home = () => {
  return (
    // <div
    //   className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
    //   style={{ backgroundImage: `url('/bg_img.png')` }}
    // >

    <div className="flex flex-col items-center justify-center min-h-screen bg-[#015963]">
      <Navbar />
      <Header />
    </div>
  );
};

export default Home;

import React from "react";
import Image from "next/image";
import Border from "./border";

const Banner = () => {
  return (
    <div className="bg-gray-400 ml-20 mr-20 rounded-2xl mt-10  flex flex-row  ">
      <div className="  ml-20 w-1/2 flex items-center justify-start font-serif">
        <div className="ml-10 mt-10 space-y-4 mb-10">
          <p className="text-black text-8xl font-bold ">LET'S</p>
          <p className="text-black text-8xl font-bold">EXPLORE</p>
          <p className="text-black text-8xl font-bold">UNIQUE</p>
          <p className="text-black text-8xl font-bold">CLOTHES.</p>
          <p className="text-black text-4xl font-medium text-xl">
            Live for Influential and Innovative fashion!
          </p>
          <button className=" ml-10 -mt-3 bg-black hover:bg-blue-500 text-white py-2 px-4 rounded flex">
            SHOP NOW
          </button>
        </div>
      </div>
      <div className=" w-1/2">
        <img src="/orange.png"></img>
      </div>
    </div>
  );
};

export default Banner;

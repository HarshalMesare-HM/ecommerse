import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Headerfour from "./headerfour";

const Headerthree = () => {
  return (
    <div className="bg-white mt-10 h-screen">
      <div className="text-black mt-20 ml-20 text-3xl font-extrabold">
        Young's Favourite
      </div>
      <div className=" flex flex-row mt-16">
        <Image
          className="ml-52 "
          src="/whitegirl1.png"
          width={600}
          height={400}
          alt="whitegirl1"
        />
        <Image
          className="ml-20 "
          src="/whitegirl2.png"
          width={600}
          height={400}
          alt="whitegirl2"
        />
        {/* ///1/// */}
      </div>
      <div className="ml-40">
        <div className="text-black  text-lg font-semibold">
          Trending on Instagram
        </div>
        <div className="text-gray-500 ">
          Explore Now!
          <FaArrowRight className="text-gray-400 ml-44" />
        </div>
        {/* ////2//// */}
        <div className="text-black text-lg font-semibold">All Under $40</div>
        <div className="text-gray-500 ">
          Explore Now!
          <FaArrowRight className="text-gray-400 ml-44" />
        </div>
      </div>
      <Headerfour />
    </div>
  );
};

export default Headerthree;

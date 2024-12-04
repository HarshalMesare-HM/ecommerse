import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Headertwo from "./headertwo";

const Headerone = () => {
  return (
    <div className="bg-white h-screen w-screen">
      <div className="text-black mt-12 ml-20 text-3xl font-extrabold">
        NEW ARRIVALS
      </div>
      <div className="flex flex-row mt-10">
        <Image
          className="m-10 ml-56"
          src="/girl1.png"
          width={350}
          height={200}
          alt="poster1"
        />
        <Image
          className="m-10"
          src="/girl2.png"
          width={350}
          height={200}
          alt="poster2"
        />
        <Image
          className="m-10"
          src="/girl3.png"
          width={350}
          height={200}
          alt="poster3"
        />
      </div>
      <div className="">
        {/* /1/ */}
        <div className="text-black ml-56 text-lg font-semibold">
          Hoodies & Sweatshirt
        </div>
        <div className="text-gray-500 ml-56">
          Explore Now!
          <FaArrowRight className="text-gray-400 ml-44 " />
        </div>
        {/* //2// */}
        <div className="text-black ml-56 text-lg font-semibold">
          Coats & Parkas
        </div>
        <div className="text-gray-500 ml-56 ">
          Explore Now!
          <FaArrowRight className="text-gray-400 ml-44" />
        </div>
        {/* ///3/// */}
        <div className="text-black ml-56 text-lg font-semibold ">
          Tees & T-Shirt
        </div>
        <div className="text-gray-500 ml-56">
          Explore Now!
          <FaArrowRight className="text-gray-400  ml-44" />
        </div>
      </div>
      <Headertwo />
    </div>
  );
};

export default Headerone;

import React from "react";
import Image from "next/image";
import Headerthree from "./headerthree";

const Headertwo = () => {
  return (
    <div className="bg-yellow-300 mt-10 h-screen">
      <div className=" flex flex-row">
        <Image
          className="ml-20 "
          src="/yellowgirl.png"
          width={800}
          height={800}
          alt="yellowgirl"
        />
        <div className=" flex flex-col ">
          <p className="text-black text-8xl font-extrabold mt-20">PAYDAY</p>
          <p className="text-black text-8xl font-extrabold mt-5">SALE NOW</p>
          <p className="text-gray-900 text-3xl font-semibold mt-14">
            Spend minimal $100 get 30% off
          </p>
          <p className="text-gray-900 text-3xl font-semibold mt-4">
            voucher code for your next purchase
          </p>
          <p className="text-gray-900 text-3xl font-extrabold mt-5">
            1 June - 10 June 2021
          </p>
          <p className="text-gray-900 text-3xl font-semibold mt-4">
            *Terms & Conditions apply
          </p>
          <button className=" mt-10 bg-black hover:bg-blue-500 text-white py-4 px-6  rounded flex">
            SHOP NOW
          </button>
        </div>
      </div>
      <Headerthree />
    </div>
  );
};

export default Headertwo;

import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="">
      <div className="">
        <div>
          <Image
            className="object-contain max-w-7xl mt-5 ml-52 "
            src="/Rec.png "
            layout="fill"
            alt=""
          />
          <div className="absolute top-0 ml-52 w-full h-full flex items-center justify-start font-serif">
            <div className="ml-10 mt-10 space-y-4">
              <p className="text-black text-8xl font-bold">LET'S</p>
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
        </div>
      </div>
    </div>
  );
};

export default Banner;

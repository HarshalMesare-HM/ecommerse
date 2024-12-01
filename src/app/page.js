import React from "react";
import Image from "next/image";
import Banner from "@/components/banner";

const Page = () => {
  return (
    <>
      <div className="bg-white w-screen h-screen">
        <div>
          <div className="flex flex-row items-center">
            <Image
              className="ml-28 mt-10"
              src="/Vector.png"
              width={40}
              height={40}
              alt=""
            />
            <Image
              className="ml-5 mt-10 "
              src="/FASHION.PNG"
              width={160}
              height={160}
              alt=""
            />
            <div className="flex flex-row ml-40 mt-10 font-serif ">
              <div className=" ml-96 text-black flex">CATALOGUE</div>
              <div className=" ml-16 text-black flex">FASHION</div>
              <div className=" ml-16 text-black flex">FAVOURITE</div>
              <div className=" ml-16 text-black flex">LIFESTYLE</div>
              <button className=" ml-10 -mt-3 bg-black hover:bg-blue-500 text-white py-2 px-4 rounded flex">
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Banner />
      </div>
    </>
  );
};

export default Page;

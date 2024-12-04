import React from "react";
import Image from "next/image";
import Headerone from "./headerone";

const Border = () => {
  return (
    <div>
      <div className="flex flex-row w-full items-center justify-center bg-yellow-300 mt-12  ">
        <Image
          className=" ml-40 m-10"
          src="/h&m.png"
          width={150}
          height={100}
          alt="H&M"
        />
        <Image
          className="m-10"
          src="/obey.png"
          width={150}
          height={50}
          alt="Obey"
        />
        <Image
          className="m-10"
          src="/shopify.png"
          width={150}
          height={50}
          alt="Shopify"
        />
        <Image
          className="m-10"
          src="/lacoste.png"
          width={150}
          height={50}
          alt="Lacoste"
        />
        <Image
          className="m-10"
          src="/levis.png"
          width={150}
          height={50}
          alt="Levi's"
        />
        <Image
          className="m-10"
          src="/amazon.png"
          width={150}
          height={50}
          alt="Amazon"
        />
      </div>
      <Headerone />
    </div>
  );
};

export default Border;

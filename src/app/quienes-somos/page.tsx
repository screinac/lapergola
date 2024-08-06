import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoChevronBack } from "react-icons/io5";

const page = () => {
  return (
    <div className="relative bg-[#EFEADE] min-h-screen ">
      <Link href="/" className="fixed top-6 left-6 text-3xl">
        <IoChevronBack />
      </Link>
      <div className="flex flex-col items-center">
        <Image
          src="/quienesSomos.jpg"
          className="w-screen py-24 max-w-3xl"
          width={1400}
          height={2000}
          alt="La pérgola enoteca con etiquetas de autoría de la Chef Maca"
        ></Image>
      </div>
    </div>
  );
};

export default page;

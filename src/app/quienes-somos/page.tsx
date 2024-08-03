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
      <Image
        src="/quienesSomos.jpg"
        className="w-screen py-24"
        width={200}
        height={200}
        alt="La pérgola enoteca con etiquetas de autoría de la Chef Maca"
      ></Image>
    </div>
  );
};

export default page;

import Image from "next/image";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";

const page = () => {
  return (
    <div className="relative bg-[#EFEADE]">
      <Link href="/menu" className="fixed top-6 left-6 text-3xl">
        <IoChevronBack />
      </Link>
      <div className="flex flex-col items-center">
        <Image
          src="/menuComida/menu1.png"
          className="w-screen max-w-3xl"
          width={1400}
          height={2000}
          alt="Menú entradas empanadas, pizzas tradicionales, vinos"
        ></Image>
        <Image
          src="/menuComida/menu2.png"
          className="w-screen max-w-3xl"
          width={1400}
          height={2000}
          alt="Menú entradas empanadas, pizzas tradicionales, vinos"
        ></Image>
      </div>
    </div>
  );
};

export default page;

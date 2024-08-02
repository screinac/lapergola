import Image from "next/image";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";

const page = () => {
  return (
    <div className="relative">
      <Link href="/info/menu" className="fixed top-6 left-6 text-3xl">
        <IoChevronBack />
      </Link>
      <Image
        src="/menuComida/menu2.jpg"
        className="w-screen"
        width={200}
        height={200}
        alt="Menú entradas empanadas, pizzas tradicionales, vinos"
      ></Image>
      <Image
        src="/menuComida/menu3.jpg"
        className="w-screen"
        width={200}
        height={200}
        alt="Menú entradas empanadas, pizzas tradicionales, vinos"
      ></Image>
      <Image
        src="/menuComida/menu4.jpg"
        className="w-screen"
        width={200}
        height={200}
        alt="Menú entradas empanadas, pizzas tradicionales, vinos"
      ></Image>
    </div>
  );
};

export default page;

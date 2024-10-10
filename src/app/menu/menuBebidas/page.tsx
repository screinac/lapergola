import Image from "next/image";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";

const page = () => {
  return (
    <div className="relative bg-[#EFEADE] min-h-screen">
      <Link href="/menu" className="fixed top-6 left-6 text-3xl">
        <IoChevronBack />
      </Link>
      <div className="flex flex-col items-center">
        <Image
          src="/menuBebidas/menu1.png"
          className="w-screen max-w-3xl"
          width={1414}
          height={2000}
          alt="Bebidas cafetería, aromática, agua, soda"
        ></Image>
        <Image
          src="/menuBebidas/menu2.png"
          className="w-screen max-w-3xl"
          width={1414}
          height={2000}
          alt="Cocteles por jarra, por copas, sangría, gintonic"
        ></Image>
        <Image
          src="/menuBebidas/menu3.png"
          className="w-screen max-w-3xl"
          width={1414}
          height={2000}
          alt="Cocteles por jarra, por copas, sangría, gintonic"
        ></Image>
      </div>
    </div>
  );
};

export default page;

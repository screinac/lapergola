import Image from "next/image";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
import menuComidaImg from "../../../../public/menuComida.jpg";

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <Link href="/info" className="absolute top-6 left-6 text-2xl">
        <IoChevronBack />
      </Link>
      <Image
        className="mt-14"
        src="/logo.png"
        alt="La Pergola"
        width={200}
        height={200}
      ></Image>
      <div className="w-full text-white px-10 mt-10">
        <Link
          href="/info/menu/menuComida"
          className="inline-block  py-12 rounded-3xl text-3xl font-medium text-center"
          style={{
            backgroundImage: `url(${menuComidaImg.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
        >
          Menú comida
        </Link>
      </div>
    </div>
  );
};

export default page;

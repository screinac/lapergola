import Image from "next/image";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
import menuComidaImg from "../../../public/menuComida.jpg";
import menuBebidasImg from "../../../public/menuBebidas.jpg";
import menuVinosImg from "../../../public/menuVinos.jpg";

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <Link href="/" className="absolute top-6 left-6 text-3xl">
        <IoChevronBack />
      </Link>
      <Image
        className="mt-14"
        src="/logo.png"
        alt="La Pergola"
        width={200}
        height={200}
        priority
      ></Image>
      <div className="w-full text-white px-10 mt-10 flex flex-col items-center">
        <Link
          href="/menu/menuComida"
          className="inline-block  py-12 rounded-3xl text-3xl font-medium text-center max-w-lg"
          style={{
            backgroundImage: `url(${menuComidaImg.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
        >
          Comida
        </Link>

        <Link
          href="/menu/menuBebidas"
          className="inline-block  py-12 rounded-3xl text-3xl font-medium text-center mt-10 max-w-lg"
          style={{
            backgroundImage: `url(${menuBebidasImg.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
        >
          Bebidas
        </Link>

        <Link
          href="/menu/menuVinos"
          className="inline-block  py-12 rounded-3xl text-3xl font-medium text-center mt-10 max-w-lg mb-20"
          style={{
            backgroundImage: `url(${menuVinosImg.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
        >
          Vinos
        </Link>
      </div>
    </div>
  );
};

export default page;

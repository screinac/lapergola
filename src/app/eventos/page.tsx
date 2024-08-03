import Image from "next/image";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";

import eventosPinturaImg from "../../../public/eventosPintura.jpg";
import eventosCatasImg from "../../../public/eventosCatas.jpg";
import eventosClubImg from "../../../public/eventosClub.jpg";
import eventosMusicaImg from "../../../public/eventosMusica.jpg";

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
      ></Image>
      <div className="w-full text-white px-10 mt-10">
        <Link
          href="/eventos/evento"
          className="inline-block  py-12 rounded-3xl text-3xl font-medium text-center"
          style={{
            backgroundImage: `url(${eventosPinturaImg.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
        >
          Taller de Pintura
        </Link>

        <Link
          href="/info/menu/menuComida"
          className="inline-block  py-12 rounded-3xl text-3xl font-medium text-center mt-10"
          style={{
            backgroundImage: `url(${eventosCatasImg.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
        >
          Catas
        </Link>

        <Link
          href="/info/menu/menuComida"
          className="inline-block  py-12 rounded-3xl text-3xl font-medium text-center mt-10"
          style={{
            backgroundImage: `url(${eventosClubImg.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
        >
          Club
        </Link>

        <Link
          href="/info/menu/menuComida"
          className="inline-block  py-12 rounded-3xl text-3xl font-medium text-center mt-10 mb-24"
          style={{
            backgroundImage: `url(${eventosMusicaImg.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
        >
          Música en Vivo
        </Link>
      </div>
    </div>
  );
};

export default page;

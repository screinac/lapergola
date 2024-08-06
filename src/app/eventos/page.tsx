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
        priority
      ></Image>
      <div className="w-full text-white px-10 mt-10 flex flex-col items-center">
        <Link
          href="/eventos/taller-pintura"
          className="inline-block  py-12 rounded-3xl text-3xl font-medium text-center max-w-lg"
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
          href="/eventos/catas"
          className="inline-block  py-12 rounded-3xl text-3xl font-medium text-center mt-10 max-w-lg"
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
          href="/eventos/club"
          className="inline-block  py-12 rounded-3xl text-3xl font-medium text-center mt-10 max-w-lg"
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
          href="/eventos/musica-en-vivo"
          className="inline-block  py-12 rounded-3xl text-3xl font-medium text-center mt-10 mb-24 max-w-lg"
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

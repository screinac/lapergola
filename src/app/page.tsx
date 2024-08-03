import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-white ">
      <div
        dangerouslySetInnerHTML={{
          __html: `
        <video
        style="height: 100vh; width: 100vw; position: absolute; left: 0; z-index: -10; object-fit: cover; "
        loop
        autoPlay
        muted

        playsinline
        preload="none"
      >
        <source src="/pergolaHome.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      `,
        }}
      ></div>

      <Image
        className="mt-14"
        src="/logo.png"
        alt="La Pergola"
        width={200}
        height={200}
      ></Image>
      <div className="px-4 w-full flex flex-col items-center ">
        <Link
          className="py-3 mt-12 text-center inline-block w-full rounded-full bg-[#251B26] max-w-md"
          href="/info"
        >
          Menú y Reservas
        </Link>
        <Link
          className="py-3 mt-5 text-center inline-block w-full rounded-full bg-[#251B26] max-w-md"
          href="/eventos"
        >
          Eventos del mes
        </Link>
        <Link
          className="py-3 mt-5 text-center inline-block w-full rounded-full bg-[#251B26] max-w-md"
          href="/quienes-somos"
        >
          ¿Quiénes somos?
        </Link>
        <div className="mt-20 ">
          <p className="mb-4 text-center ">Síguenos</p>
          <div className="flex gap-3 mt-2 text-4xl">
            <a
              href="https://www.instagram.com/lapergolawinemarket/"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a href="https://maps.app.goo.gl/2UwBtf7sFT58bHUC9" target="_blank">
              <MdLocationPin />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

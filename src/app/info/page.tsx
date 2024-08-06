import Image from "next/image";
import Link from "next/link";
import { MdOutlineRestaurant } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import { MdLocalActivity } from "react-icons/md";
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
      <div className="px-10">
        <Link
          href="/info/eventos"
          className="w-full mt-12 flex justify-between shadow-md rounded-lg border border-slate-200 "
        >
          <div className="py-5 px-16 font-semibold tracking-wider">
            Eventos del Mes
          </div>
          <div className="flex items-center px-4 border border-slate-200 rounded-lg text-xl">
            <MdLocalActivity />
          </div>
        </Link>

        <a
          href="https://api.whatsapp.com/send?phone=573205950468&text=¡Hola!%20Me%20gustaría%20hacer%20una%20reservación"
          className="w-full mt-8 flex justify-between shadow-md rounded-lg border border-slate-200  "
          target="_blank"
        >
          <div className="py-5 px-16 font-semibold tracking-wider">
            Reservas
          </div>
          <div className="flex items-center px-4 border border-slate-200 rounded-lg text-xl">
            <IoBookSharp />
          </div>
        </a>
      </div>
    </div>
  );
};

export default page;

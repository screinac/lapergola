import Image from "next/image";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";

const page = () => {
  return (
    <div>
      <Link href="/eventos" className="absolute top-6 left-6 text-3xl">
        <IoChevronBack />
      </Link>
      <div className="px-10">
        <h2 className="text-[#812C37] text-4xl font-bold mt-24">
          Taller de Pintura
        </h2>
        <p className="mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          quidem ipsa voluptatem totam. Minima molestias, neque aut expedita
          error, odio sequi rerum architecto quo excepturi, quod laborum
          repudiandae? Autem in hic ad obcaecati veniam non aut repellat itaque
          minus beatae.
        </p>
        <Image
          src="/eventos/tallerPintura.jpg"
          className="w-full mt-8 mb-16"
          width={200}
          height={200}
          alt="Persona pintando en lienzo con pincel"
        ></Image>
      </div>
    </div>
  );
};

export default page;

"use client";
import Image from "next/image";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
import React, { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const [contenido, setContenido] = useState({
    titulo: "",
    parrafo: "",
    imagen: "/logo.png",
  });

  const contenidoArray = [
    {
      titulo: "Talleres de Pintura",
      parrafo: "Talleres pintura",
      imagen: "/eventos/tallerPintura.jpg",
    },
    {
      titulo: "Catas",
      parrafo: "Talleres pintura",
      imagen: "/eventos/catas.jpg",
    },
    {
      titulo: "Club",
      parrafo: "Talleres pintura",
      imagen: "/eventos/club.jpg",
    },
    {
      titulo: "Música en Vivo",
      parrafo: "Talleres pintura",
      imagen: "/eventos/musicaVivo.jpg",
    },
  ];
  useEffect(() => {
    if (params.slug === "taller-pintura") {
      setContenido(contenidoArray[0]);
    } else if (params.slug === "catas") {
      setContenido(contenidoArray[1]);
    } else if (params.slug === "club") {
      setContenido(contenidoArray[2]);
    } else if (params.slug === "musica-en-vivo") {
      setContenido(contenidoArray[3]);
    }
  }, []);
  return (
    <div>
      <Link href="/eventos" className="absolute top-6 left-6 text-3xl">
        <IoChevronBack />
      </Link>
      <div className="px-10 md:flex flex-col items-center">
        <h2 className="text-[#812C37] text-4xl font-bold mt-24">
          {contenido.titulo}
        </h2>
        <p className="mt-8 max-w-lg">{contenido.parrafo}</p>
        <Image
          src={contenido.imagen}
          className="w-full mt-8 mb-16 max-w-lg"
          width={200}
          height={200}
          alt="Persona pintando en lienzo con pincel"
        ></Image>
      </div>
    </div>
  );
}

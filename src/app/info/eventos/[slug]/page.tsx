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
      parrafo:
        "Pregunta por nuestra programación mensual de talleres de arte, ven a desconectarte del mundo y a conectar con tu yo interior, arriésgate a vivir una experiencia distinta. No te quedes por fuera, reserva en la página oficial de proyectarte, pídenos el link en nuestros canales digitales. \n \n ¿En qué consiste? \n \n Son entre dos a tres horas de clase guiada por profesional, donde no se necesita ser un experto, solo tener toda la actitud para divertirse y dejar volar la creatividad, incluye snack de comida y bebida alcohólica o no alcohólica. ",
      imagen: "/eventos/tallerPintura.jpg",
    },
    {
      titulo: "Catas",
      parrafo:
        "Contamos con catas y actividades enfocadas en el mundo del vino, reserva por nuestros canales digitales. \n \n ¿Qué se hace en una cata de vino? \n \n Con mínimo tres vinos se hace una fase visual, una fase olfativa, un análisis de sabor, una evaluación de la textura y cuerpo del vino, y por último una conclusión de cada vino. Las catas están hechas para personas que no necesitan ser expertas para participar, solo deben estar abiertas a experimentar un viaje por diferentes vinos y sus maridajes, aprenderán no solo de su historia, producción sino que también aprenderán a exaltar los sabores de la comida y del vino, haciendo matrimonios perfectos de maridajes.",
      imagen: "/eventos/catas.jpg",
    },
    {
      titulo: "Club de Lectura",
      parrafo:
        "¡Amantes de la lectura, únanse!¿Qué tal sumergirse en páginas llenas de magia, misterio y aventura mientras disfrutas de un ambiente acogedor?\n \n ¡Aquí, la pasión por la lectura se une con el placer de una buena conversación! Únete a una comunidad que comparte tus mismos intereses, disfruta de un espacio de charlas, debates y enriquece tu experiencia literaria junto a otros amantes de los libros. ¡Inscríbete ahora sin costo y forma parte de esta comunidad de lectores apasionados!",
      imagen: "/eventos/club.jpg",
    },
    {
      titulo: "Música en Vivo",
      parrafo:
        "Pregunta por nuestros shows en vivo, ven a disfrutar y a cantar a todo pulmón con las espectaculares y variadas ofertas que tenemos para ti. No te quedes sin mesa, reserva en nuestros canales digitales.",
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
      <Link href="/info/eventos" className="absolute top-6 left-6 text-3xl">
        <IoChevronBack />
      </Link>
      <div className="px-10 md:flex flex-col items-center">
        <h2 className="text-[#812C37] text-4xl font-bold mt-24">
          {contenido.titulo}
        </h2>
        <div>
          <p className="mt-8 max-w-lg" style={{ whiteSpace: "pre-line" }}>
            {contenido.parrafo}
          </p>
          <a
            href={`https://api.whatsapp.com/send?phone=573205950468&text=¡Hola!%20Me%20gustaría%20hacer%20una%20reservación%20para%20el%20evento%20de%20${contenido.titulo}`}
            className="bg-slate-900 text-white inline-block mt-5 px-10 py-1 rounded-lg"
            target="_blank"
          >
            Reserva aquí
          </a>
        </div>
        <Image
          src={contenido.imagen}
          className="w-full mt-8 mb-16 max-w-lg"
          width={1400}
          height={2000}
          alt="Persona pintando en lienzo con pincel"
        ></Image>
      </div>
    </div>
  );
}

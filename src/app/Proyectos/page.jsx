// pages/Proyectos/index.jsx

"use client"

import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import proyectosdatos from "../../Datos/Proyectosdatos";
import Image from "next/image";

const Card = ({ id, img1, title, subtitle1 }) => {
  const { t } = useTranslation("common");

  return (
    <div
      id={id}
      className="flex flex-col h-96 rounded-md drop-shadow-sm shadow-md hover:-translate-y-2 hover:scale-105 transition-transform duration-200 shadow-gray-200"
    >
      <Link key={id} href={`/Proyectos/${id}`} className="h-full w-full">
        <Image
          className="relative w-full h-2/3 rounded-md"
          src={img1}
          alt={t(`${title}.subtitle1`)}
          width={500} height={300} 
        />
        <div className="p-4">
          <h1 className="text-xl font-bold">{t(title)}</h1>
          <p className="font-regular text-sm">{t(subtitle1)}</p>
        </div>
      </Link>
    </div>
  );
};

export default function Proyectos() {
  const { t } = useTranslation("common");

  return (
    <div className="h-auto w-full pb-12 pt-16">
      <div
        className="flex justify-center items-center bg-top w-full h-44 md:h-72 px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 overflow-hidden"
        style={{
          backgroundImage: `url("/Images/Agentes/introimg2.webp")`,
          backgroundSize: 'cover',
        }}
      >
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-between w-full gap-y-4">
          <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-semibold animate__animated animate__fadeInLeft">
            {t("proyectos_title")}
          </h1>
        </div>
      </div>

      <div className="w-full h-auto flex items-center justify-center px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-full">
          {proyectosdatos.map((card) => (
            <Card
              id={card.id}
              key={card.id}
              img1={card.img1}
              title={card.title}
              subtitle1={card.subtitle1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

"use client"

import React, { useEffect, useState, Suspense, lazy } from "react";
import { useTranslation } from 'next-i18next';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Cargando from "../../Components/Cargando";
import Image from "next/image";


//Animacion de AOS
import 'animate.css';
import Aos from "aos";
import 'aos/dist/aos.css';

//importo datos para la linea de tiempos
import lineadetiempodatos from "../../Datos/Lineadetiempo/lineadetiempodatos";

const LineaDeTiempo = lazy(() => import("../../Components/Linea de tiempo"));


export default function Nosotros() {
    const { t } = useTranslation("common");

    let [values, setValues] = useState([]);


    //Funcion para separar palabras recibidas de la traduccion, en especifico valores
    useEffect(() => {
        let valuesText = t('values_text'); // Get the string
        let valuesArray = valuesText.split("\n"); // Split the string into an array
        setValues(valuesArray); // Set the array to state
    }, [t]);


    //Inicio de animación
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])


    return (
        <Suspense fallback={
            <Cargando />
        }>
            <div className="h-auto w-full font-Encode-Sans pt-20 lg:pt-24 xl:pt-0 2xl:pt-0">
                {/* Seccion de nuestra historia */}
                <div className="flex items-center justify-center w-full h-auto xl:h-screen overflow-hidden">
                    <div className="h-full w-auto flex xl:flex-row flex-col items-center px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 pt-10 lg:pt-0 py-0">
                        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10">
                            <div className="flex flex-col items-center justify-center animate__animated animate__fadeInLeft order-2 xl:order-1">
                                <div className="flex items-center justify-center text-left" >
                                    <div className="w-full lg:w-2/3 xl:w-3/4 2xl:w-3/4">
                                        <p className="text-xl xl:text-2xl font-regular text-black/75" lang="de">
                                            {t("born2")}{` `} 
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center animate__animated animate__bounceInRight order-1 xl:order-2">
                                <Image className="w-f h-auto lg:h-3/4 rounded-md " src= "/Images/Homepageimgs/Imagen_de_puerto.jpg" alt="" width={500} height={300} />
                            </div>

                        </div>
                    </div>
                </div>
                {/* Fin de seccion de nuestra historia */}

                {/* Seccion de linea de tiempo */}
                <div className="w-auto h-full pb-6 lg:pb-10 pt-12 px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40">

                    <div className="h-auto w-auto py-0 md:py-8 text-center lg:text-start">
                        <h1 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold">{t("timeline")}</h1>
                    </div>

                    <div className="h-auto w-auto flex flex-col gap-y-6">
                        {
                            lineadetiempodatos.map(props => (
                                <LineaDeTiempo
                                    key={props.id}
                                    titulo={t(props.titulo)}
                                    ano={props.ano}
                                    texto={t(props.texto)}
                                    color_circulo={props.color_circulo}
                                    transicion={props.transicion}
                                />
                            ))}
                    </div>
                </div>
                {/*Fin de Seccion de linea de tiempo */}

                {/* Inicio de seccion de nuestra empresa */}
                <div className="w-full  h-auto xl:h-screen pb-6 lg:pb-10 pt-12 overflow-hidden">
                    <div className="h-full w-auto flex xl:flex-row flex-col items-center px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40">
                        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10">
                            <div className="flex items-center justify-center" data-aos="fade-right">
                                <Image className="w-auto h-auto lg:h-3/4 rounded-md " src="/Images/Nosotros/mclogistics.webp" alt="" width={500} height={300} />
                            </div>
                            <div className="flex flex-col items-center justify-center" data-aos="fade-left">
                                <div className="flex items-center justify-center" >
                                    <div className="w-full xl:w-3/4 2xl:w-3/4">
                                        <p className="text-xl font-regular hyphens-auto text-black/75" lang="de">
                                            {t("the_bussiness_text1")}
                                            <br /><br />{t("the_bussiness_text2")}

                                            <br /><br />{t("the_bussiness_text3")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Fin de seccion de nuestra empresa */}


                <div className="h-auto w-full pb-6 lg:pb-10">
                    <div className="flex h-full bg-center overflow-hidden">
                        <div className="h-auto w-full px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40">

                            <div className="lg:pb-12 pt-10 lg:pt-0 pb-5 text-center" data-aos="fade-down">
                                <h1 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold">{t("us")}</h1>
                            </div>
                            <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-10 gap-5">
                                {/* Mision */}
                                <div className="flex flex-col justify-center items-center row-start-2 xl:row-start-1">
                                    <div className=" w-full md:max-w-[30rem] text-justify" data-aos="fade-right">
                                        <h2 className="font-bold text-4xl">
                                            {t("mision")}
                                        </h2>
                                        <p className="pt-2 md:pt-4 text-sm sm:text-sm md:text-md lg:text-xl max-w-[30rem] text-black/75">
                                            {t("mision_text")}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center" data-aos="fade-left">
                                    <Image className="w-auto h-auto md:h-3/4 rounded-md " src="/Images/Nosotros/Mision.webp" alt="" width={500} height={300} />
                                </div>
                                {/* Fin de mision */}
                                {/* Vision */}

                                <div className="flex items-center justify-center" data-aos="fade-right">
                                    <Image className="w-auto h-auto md:h-3/4 rounded-md " src="/Images/Nosotros/Vision.webp" alt="" width={500} height={300} />
                                </div>
                                <div className="flex flex-col justify-center items-center" data-aos="fade-left">
                                    <div className="w-full md:max-w-[30rem]">
                                        <h2 className="font-bold text-4xl">
                                            {t("vision")}
                                        </h2>
                                        <p className="pt-2 md:pt-4 text-justify text-sm sm:text-sm md:text-md lg:text-xl text-black/75">
                                            {t("vision_text")}
                                        </p>
                                    </div>
                                </div>
                                {/* Vision */}
                                {/* Valores */}
                                <div className="flex flex-col justify-center items-center row-start-6 xl:row-start-3">
                                    <div className="w-full md:max-w-[30rem]" data-aos="fade-right">
                                        <h2 className="font-bold text-4xl w-full xl:min-w-[30rem]">
                                            {t("values")}
                                        </h2>
                                        <ul className="text-sm sm:text-sm md:text-md lg:text-xl list-disc list-inside pt-2 md:pt-4  w-full xl:min-w-[30rem] text-black/75">
                                            {values.map((value, index) => (
                                                <li key={index}>{value}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center" data-aos="fade-left">
                                    <Image className="w-auto h-auto md:h-3/4 rounded-md " src="/Images/Nosotros/Valores.webp" alt="" width={500} height={300} />
                                </div>
                                {/* Fin de Valores */}

                            </div>
                        </div>
                    </div>
                </div>



                <div className="w-full  h-auto xl:h-screen pb-6 lg:pb-10 pt-12 overflow-hidden">
                    <div className="h-auto xl:w-auto w-full text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-black">{t("why_choose_us")}</h1>
                    </div>
                    <div className="h-full w-auto flex xl:flex-row flex-col items-center px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full">
                            <div className="">
                                <Swiper
                                    effect={'fade'}
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay, EffectFade]}
                                    className="mySwiper"
                                    style={{ width: '100%', height: '100%' }}
                                >
                                    <SwiperSlide>
                                        <div
                                            className="flex flex-col items-center justify-center w-full relative bg-no-repeat bg-cover h-[500px] z-0 rounded-xl overflow-hidden brightness-60 backdrop-blur-sm"
                                            style={{ backgroundImage: `url(${"/Images/Homepageimgs/slider_1.jpg"})` }}
                                        >
                                            <div className="h-20 w-20">
                                                <Image className="h-2 w-2 invert" src="/Icons/Tecnologia.png" alt="" width={500} height={300} />
                                            </div>
                                            <div>
                                                <p className="text-2xl pt-2">{t("technology")}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div
                                            className="flex flex-col items-center justify-center w-full relative bg-no-repeat bg-cover h-[500px] z-0 rounded-xl overflow-hidden brightness-60 backdrop-blur-sm"
                                            style={{ backgroundImage: `url(${"/Images/Homepageimgs/slider_2.jpg"})` }}
                                        >
                                            <div className="h-20 w-20">
                                                <Image className="h-2 w-2 invert" src="/Icons/Confiable.png" alt="" width={500} height={300} />
                                            </div>
                                            <div>
                                                <p className="text-2xl pt-2">{t("reliability")}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div
                                            className="flex flex-col items-center justify-center w-full relative bg-no-repeat bg-cover h-[500px] z-0 rounded-xl overflow-hidden brightness-60 backdrop-blur-sm"
                                            style={{ backgroundImage: `url(${"/Images/Homepageimgs/Slider_4.webp"})` }}
                                        >
                                            <div className="h-20 w-20">
                                                <Image className="h-2 w-2 invert" src="/Icons/Flexible.png" alt="" width={500} height={300} />
                                            </div>
                                            <div>
                                                <p className="text-2xl pt-2">{t("flexibility")}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div
                                            className="flex flex-col items-center justify-center w-full relative bg-no-repeat bg-cover h-[500px] z-0 rounded-xl overflow-hidden brightness-60 backdrop-blur-sm"
                                            style={{ backgroundImage: `url(${"/Images/Homepageimgs/slider_3.jpg"})` }}
                                        >
                                            <div className="h-20 w-20">
                                                <Image className="h-2 w-2 invert" src="/Icons/Innovacion.png" alt="" width={500} height={300} />
                                            </div>
                                            <div>
                                                <p className="text-2xl pt-2">{t("innovation")}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>

                            <div className="flex flex-col gap-y-5 lg:gap-y-10 justify-center">
                                <div className="max-w-[40rem]">
                                    <h1 className="font-semibold text-xl xl:text-4xl 2xl:text-4xl">{t("total_connection")}</h1>
                                    <p className="text-lg xl:text-xl 2xl:text-xl">
                                        {t("integration")}
                                    </p>
                                </div>
                                <div className="max-w-[40rem]">
                                    <h1 className="font-semibold text-xl xl:text-4xl 2xl:text-4xl">{t("Loyalty_and_commitment")}</h1>
                                    <p className="text-lg xl:text-xl 2xl:text-xl">
                                        {t("loyalty_commitment")}
                                    </p>
                                </div>
                                <div className="max-w-[40rem]">
                                    <h1 className="font-semibold text-xl xl:text-4xl 2xl:text-4xl">{t("Excellence_and_adaptability")}</h1>
                                    <p className="text-lg xl:text-xl 2xl:text-xl">
                                        {t("quality_service")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    )
}
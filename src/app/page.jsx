"use client";

import React, { useRef, useEffect, useState, useContext } from "react";
import { useTranslation } from 'next-i18next';
import { motion, useTransform, useScroll } from "framer-motion";
import { TrackingContext } from '../../context/TrackingContext';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import Aos from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


//Datos
import serviciosdatos from "../Datos/serviciosdatos";

//Componentes
import NuestrosServicios from "../Components/Nuestros_servicios_card";


//Animacion
import "swiper/swiper-bundle.css";
import "animate.css";
import "animate.css/animate.min.css";
import "aos/dist/aos.css";
import "swiper/css/effect-creative";


//Iconos
import AppMclogs from "../Components/App_Mclogs_descarga";


// ServiceCard Component
const ServiceCard = ({ delay, className, imgSrc, title, description, link, target }) => {


    return (
        <a className="w-full"  href={link} target={target}
        rel="noopener noreferrer">
            <motion.div
                data-aos="fade-down"
                data-aos-delay={delay}
                className="flex flex-col bg-neutral-50 h-[8rem] md:h-[24rem] w-full rounded-md text-center overflow-hidden shadow-md transition-shadow duration-400 ease-in-out hover:shadow-lg"
            >
                <div className="flex justify-center items-center h-10 md:h-64 px-4">
                    <img className={className} src={imgSrc} alt={title} />
                </div>
                <div className="h-auto hidden lg:block">
                    <p className="px-8 lg:text-md xl:text-md 2xl:text-lg font-regular text-slate-900 flex-grow text-base">{description}</p>
                </div>
            </motion.div>
        </a>

    );
};

export default function Homepage() {
    const { scrollYProgress } = useScroll();
    const [opacity, setOpacity] = useState(0);
    const { trackSearch, setTrackSearch, shipName, setShipName } = useContext(TrackingContext);
    const transformedOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
    const ref = useRef(null)
    const { t } = useTranslation("common");
    const [error, setError] = useState(false);
    const router = useRouter();


    // Initialize AOS and set up scroll listener for opacity
    useEffect(() => {
        Aos.init({ duration: 1000 });

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const maxScroll = 300; // The point at which the opacity is 100%
            const newOpacity = Math.min(scrollPosition / maxScroll, 1); // Ensure opacity is between 0 and 1
            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);

    const texts = [
        {
            title: 'MC LOGISTICS',
            subtitle: t("customer_focused"),
            description: t("data_driven"),
        },
        {
            title: '',
            subtitle: t("opportunity_focus"),
            description: t("efficiency_profitability"),
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
                setFade(false);
            }, 500);
        }, 6000);

        return () => clearInterval(interval);
    }, [texts.length]);

    const currentText = texts[currentIndex];

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleScrollVisibility = () => {
        if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const isSectionVisible = rect.top < windowHeight && rect.bottom > 0;
            setIsVisible(isSectionVisible);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrollVisibility);
        handleScrollVisibility();
        return () => window.removeEventListener('scroll', handleScrollVisibility);
    }, []);

    const handleSearchChange = (e) => {
        setTrackSearch(e.target.value);
        setShipName('');
    };

    const handleClearSearch = () => {
        setTrackSearch('');
    };


    const handleSearchValidation = (e) => {
        e.preventDefault();
        if (trackSearch.length === 0) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 5000);
        } else {
        router.push(`/Rastreo`);
        }
    };

    return (
        <div className="w-full h-auto font-Bauhaus overflow-hidden">
            <div ref={sectionRef} className="relative h-screen w-full flex">
                <video
                    className={`${isVisible ? 'fixed' : 'absolute'} inset-0 w-full h-full object-cover brightness-50 z-[-10]`}
                    src="/Videos/Video.mp4"
                    loop
                    autoPlay
                    muted
                    controls={false}
                    onContextMenu={(e) => e.preventDefault()}
                    playsInline
                ></video>
                <div className="flex flex-col xl:flex-row w-full h-full text-white px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 pt-20 items-center justify-center">
                    <div className={`flex flex-col items-start justify-center h-[20rem] xl:h-2/4 w-full max-w-[50rem] text-wrap ${fade ? 'fade-out' : 'fade-in'}`}>
                        <p
                            className="w-full text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-7xl 2xl:text-7xl"
                            data-aos="fade-up"
                            data-aos-duration="400"
                            data-aos-delay="600"
                        >
                            {currentText.subtitle}
                        </p>
                        <p
                            className="text-lg font-semibold py-4 pl-1"
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="1300"
                        >
                            {currentText.description}
                        </p>
                    </div>
                    <div className="w-full xl:w-[56rem] mb-20 xl:pb-10 block" data-aos="fade-up" data-aos-delay="1500">
                        <div
                            className="w-full flex flex-col backdrop-blur h-24 md:h-32 bg-white/15 rounded-lg justify-center px-6 py-4"

                        >
                            <form className="w-full flex flex-row lg:flex-row xl:flex-row text-white gap-2" onSubmit={handleSearchValidation}>
                                <div className="w-full relative">
                                    <input
                                        type="text"
                                        id="track_search"
                                        value={trackSearch}
                                        onChange={handleSearchChange}
                                        className="h-12 w-full rounded-lg px-2 text-black backdrop-blur bg-white-25"
                                        placeholder="CTNR / BL / REF / ORD"
                                    />
                                    {trackSearch?.length !== 0 && (
                                        <button
                                            type="button"
                                            id="track_button"
                                            className="absolute right-0 top-0 p-2 md:w-24 lg:w-24 xl:w-24 rounded-md flex justify-center"
                                            onClick={handleClearSearch}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-gray-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    id="track_button"
                                    className="bg-light_blue hover:bg-blue p-2 w-12 md:w-24 lg:w-24 xl:w-24 rounded-md flex justify-center"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </button>
                            </form>
                            <div className="flex mt-2">
                                <div className="pr-2 hidden md:block lg:block">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                    </svg>
                                </div>
                                <div className="hidden md:block lg:block pt-1">
                                    {error ? (
                                        <p className="text-xs sm:text-sm md:text-normal text-red-500 animate__animated animate__shakeX animation_duration_0.5">
                                            Por favor ingrese datos validos
                                        </p>
                                    ) : (
                                        <p className="text-xs  md:text-normal text-white">
                                            {t("Searchfor")}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Seccion de Somos */}
            <motion.div style={{ opacity: transformedOpacity }} className="h-auto xl:h-screen bg-white flex items-center justify-center flex-col-reverse lg:flex-row px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 gap-10 xl:py-10 py-16 overflow-hidden z-50" ref={ref}>

                <div className="w-full lg:w-1/2 text-left overflow-visible  hover:text-black/75">
                    <Link href="/Nosotros ">
                        <div
                            className="relative flex-col group inline-flex text-left py-2.5 rounded-md font-semibold">
                            <p className="block pt-2 pb-2 text-regular text-md sm:text-xl md:text-lg lg:text-md xl:text-3xl font-Poppins font-regular-400 text-black/75" data-aos="fade-up" data-aos-delay="70">{t("strategic_partner")}</p>
                            <p className="lg:hidden xl:block hidden sm:hidden md:hidden pb-2 text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-2xl text-black/75" data-aos="fade-up" data-aos-delay="85">{t("born")}</p>
                        </div>
                        <button
                            className="relative group inline-flex items-center px-12 py-2.5 overflow-hidden text-lg font-medium textblue border-2 border-blue rounded-lg hover:text-white group hover:bg-gray-50" data-aos="fade-up" data-aos-delay="50">
                            <span
                                className="absolute left-0 block w-full h-0 transition-all bg-blue opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                            <span
                                className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </span>
                            <span className="relative text-base font-semibold transition-all duration-300 group-hover:-translate-x-3 text-blue group-hover:text-white">
                                {t("learn_more")}</span>
                        </button>
                    </Link>
                </div>
                <motion.div
                    className="w-full lg:w-1/2 h-96 xl:h-2/3 overflow-hidden"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        className="h-96 md:h-full w-full object-cover object-center-left xl:object-center rounded-md"
                        src="/Images/Homepageimgs/bote_vertical.webp"
                        alt="Logistics"
                    />
                </motion.div>
            </motion.div>

            {/* Fin de Seccion de Somos */}

            {/* Nuestros Servicios */}
            <div className="w-full h-auto pb-16 bg-white">
                <div className="flex w-full pb-6 pt-12 items-center justify-center px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 text-center">
                    {/* <h3 className="text-4xl md:text-5xl font-bold" data-aos="fade-down">{t("our_services")}</h3> */}
                </div>
                <div className="flex justify-center h-auto w-full lg:pt-8 px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40">
                    <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-auto gap-y-4 lg:gap-y-12 gap-x-6 justify-items-center w-full">
                        {serviciosdatos.map((servicio) => (
                            <NuestrosServicios
                                key={servicio.id}
                                espacio={servicio.espacio}
                                imagen={servicio.imagen}
                                claseImagen={servicio.claseImagen}
                                titulo={servicio.titulo}
                                claselink={servicio.claselink}
                                link={servicio.link}
                                video={servicio.video}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* Fin Nuestros Servicios */}

            {/* Seccion de App */}
            <AppMclogs />
            {/* Fin de Sección de App */}

            {/* Seccion de compañias */}
            <div className="w-full h-auto xl:h-screen bg-white">
                <div className="flex bg-center bg-fixed w-full h-full py-12 md:py-20">
                    <div className="flex flex-col w-full h-full items-center justify-center px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40">
                        <div className="pb-10 text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-black">{t("we_are")}</h1>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-x-10 gap-y-8 w-full h-full justify-items-center items-center">
                            <ServiceCard
                                delay={""}
                                className={"pt-20 w-32 lg:w-64 z-10"}
                                imgSrc="/Images/Homepageimgs/Somos/compañias/figibox-logo.svg"
                                title="FIGIBOX"
                                description={t("figibox_description")}
                                link="https://figibox.do/"
                                target="_blank"
                            />
                            <ServiceCard
                                delay={"200"}
                                className={"pt-10 w-32 lg:w-80 z-10"}
                                imgSrc="/Images/Homepageimgs/Somos/compañias/mainConcilia_logo.png"
                                title="CONSILIA"
                                description={t("consilia_description")}
                                link="https://www.consilialogistics.com/"
                                target="_blank"
                            />
                            <ServiceCard
                                delay={"400"}
                                className={"pt-16 w-20 lg:w-52 z-10"}
                                imgSrc="/Images/Logos/high-performace.png"
                                title="HIGH PERFORMANCE CL"
                                description={t("highperformance_description")}
                                link="/HighPerformance"
                                target=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Fin de Sección de compañias */}

            {/* Seccion de por que elegirnos */}
            <div className="h-auto w-full px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 py-10">
               
                <div className="flex flex-col lg:flex-col xl:flex-row h-full justify-between pt-12">
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center gap-x-8">
                            <a href="https://basc.org.do/" target="_blank" rel="noreferrer">
                                <img className="h-auto w-32 md:h-32 lg:h-32 xl:h-32 md:w-36 lg:w-36 xl:w-36" src="/Images/Homepageimgs/certificaciones/Basc_certificacion.webp" alt="" />
                            </a>
                            <a href="https://oea.aduanas.gob.do/" target="_blank" rel="noreferrer">
                                <img className="h-auto w-32 md:h-20 lg:h-16 xl:h-16 md:w-36 lg:w-36 xl:w-36" src="/Images/Homepageimgs/certificaciones/OEARD.webp" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col text-start xl:text-end">
                        <div className="flex flex-row gap-x-8 items-center">
                            <a href="https://www.asodecrd.com/" target="_blank" rel="noreferrer">
                                <img className="h-auto w-32 md:h-32 lg:h-32 xl:h-32 md:w-36 lg:w-36 xl:w-36" src="/Images/Homepageimgs/Miembros/Asodec.jpeg" alt="" />
                            </a>
                            <a href="https://adaa.do/" target="_blank" rel="noreferrer">
                                <img className="h-auto w-32 md:h-32 lg:h-32 xl:h-32 md:w-36 lg:w-36 xl:w-36" src="/Images/Homepageimgs/Miembros/Adaa.jpeg" alt="" />
                            </a>
                            <a href="https://adacam.org.do/" target="_blank" rel="noreferrer">
                                <img className="h-auto w-32 md:h-32 lg:h-32 xl:h-32 md:w-36 lg:w-36 xl:w-36" src="/Images/Homepageimgs/Miembros/adacam.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            {/* Fin de seccion de por que elegirnos */}
        </div>
    );
}

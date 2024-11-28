"use client"

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "./useScrollAnimation";
import { useTranslation } from "next-i18next";
import Image from "next/image";

import Aos from "aos";
import 'aos/dist/aos.css';




const ServiciosComponentes = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const lclAnimation = useScrollAnimation();
    const fclAnimation = useScrollAnimation();
    const airAnimation = useScrollAnimation();
    const groundAnimation = useScrollAnimation();
    const storageAnimation = useScrollAnimation();
    const customsAnimation = useScrollAnimation();
    const parcelAnimation = useScrollAnimation();
    const inspectionAnimation = useScrollAnimation();
    const insuranceAnimation = useScrollAnimation();



    const { t } = useTranslation("en");

    useEffect(() => {
        const handleHashChange = () => {
          const hash = window.location.hash;
          if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
              const offset = 300;
              requestAnimationFrame(() => {
                setTimeout(() => {
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = element.getBoundingClientRect().top;
                  const elementPosition = elementRect - bodyRect;
                  const offsetPosition = elementPosition - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                  });
                }, 50);
              });
            }
          }
        };
        window.addEventListener('hashchange', handleHashChange);
        handleHashChange();
      
        return () => {
          window.removeEventListener('hashchange', handleHashChange);
        };
      }, []);
      

    return (
        <div className="relative">
            <motion.div className="flex flex-col-reverse xl:flex-row">
                <div className="flex flex-col w-full xl:w-1/2 items-center text-center justify-center">
                    <h1 id="transporte_maritimo" className="text-xl md:text-2xl lg:text-4xl xl:text-4xl w-2/3 font-bold">{t("maritim_transport")}</h1>
                    <div className="w-full lg:w-2/3 xl:w-3/4 2xl:w-3/4">
                        <p className="text-sm md:text-2xl lg:text-2xl xl:text-2xl pt-4 font-normal w-full lg:w-auto text-center text-balance whitespace-normal hyphens-auto break-words">{t("maritim_transport_description")}</p>
                    </div>
                </div>
                <div className="w-full py-4 md:py-10 xl:w-1/2 md:px-8 flex items-center justify-center">
                    <Image className="relative h-full md:h-4/5 w-full md:w-[40rem] object-cover rounded-md" src="/Images/Nuestros_servicios_logisticosimgs/Transporte_maritimo.webp" alt="Transporte Maritimo" width={500} height={300} />
                </div>
            </motion.div>

            <motion.div ref={lclAnimation.ref} style={{ y: lclAnimation.y, opacity: lclAnimation.opacity, scale: lclAnimation.scale, rotate: lclAnimation.rotate }} className="flex flex-col xl:flex-row pt-16">
                <div className="w-full py-4 md:py-10 xl:w-1/2 md:px-8 flex items-center justify-center">
                    <Image className="relative h-full md:h-4/5 w-full md:w-[40rem] object-cover rounded-md" src="/Images/Nuestros_servicios_logisticosimgs/Carga_lcl.jpg" alt="Cargo completo" width={500} height={300}/>
                </div>
                <div className="flex flex-col w-full xl:w-1/2 items-center text-center justify-center">
                    <h1 id="lcl" className="text-xl md:text-2xl lg:text-4xl xl:text-4xl w-full font-bold">{t("loose_cargo")}</h1>
                    <div className="w-full lg:w-2/3 xl:w-3/4 2xl:w-3/4">
                        <p className="text-sm md:text-2xl lg:text-2xl xl:text-2xl pt-4 font-normal w-full lg:w-auto text-center text-balance whitespace-normal hyphens-auto break-words">
                            {t("loose_cargo_description")}
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div ref={fclAnimation.ref} style={{ y: fclAnimation.y, opacity: fclAnimation.opacity, scale: fclAnimation.scale, rotate: fclAnimation.rotate }} className="flex flex-col-reverse xl:flex-row pt-16">
                <div className="flex flex-col w-full xl:w-1/2 items-center text-center justify-center">
                    <h1 id="fcl" className="text-xl md:text-2xl lg:text-4xl xl:text-4xl w-full font-bold">{t("complete_cargo")}</h1>
                    <div className="w-full lg:w-2/3 xl:w-3/4 2xl:w-3/4">
                        <p className="text-sm md:text-2xl lg:text-2xl xl:text-2xl pt-4 font-normal w-full lg:w-auto text-center text-balance whitespace-normal hyphens-auto break-words">
                            {t("complete_cargo_description")}
                        </p>
                    </div>
                </div>
                <div className="w-full py-4 md:py-10 xl:w-1/2 md:px-8 flex items-center justify-center">
                    <Image className="relative h-full md:h-4/5 w-full md:w-[40rem] object-cover rounded-md" src="/Images/Nuestros_servicios_logisticosimgs/Carga_completa.jpg" alt="Carga completa" width={500} height={300}/>
                </div>
            </motion.div>

            <motion.div ref={airAnimation.ref} style={{ y: airAnimation.y, opacity: airAnimation.opacity, scale: airAnimation.scale, rotate: airAnimation.rotate }} className="flex flex-col xl:flex-row pt-16">
                <div className="w-full py-4 md:py-10 xl:w-1/2 md:px-8 flex items-center justify-center">
                    <Image className="relative h-full md:h-4/5 w-full md:w-[40rem] object-cover rounded-md" src="/Images/Nuestros_servicios_logisticosimgs/Transporte_aereo.webp" alt="Transporte Aereo" width={500} height={300}/>
                </div>
                <div className="flex flex-col w-full xl:w-1/2 items-center text-center justify-center">
                    <h1 id="transporte_aereo" className="text-xl md:text-2xl lg:text-4xl xl:text-4xl w-full font-bold">{t("air_transport")}</h1>
                    <div className="w-full lg:w-2/3 xl:w-3/4 2xl:w-3/4">
                        <p className="text-sm md:text-2xl lg:text-2xl xl:text-2xl pt-4 font-normal w-full lg:w-auto text-center text-balance whitespace-normal hyphens-auto break-words">
                            {t("air_transport_description")}
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div ref={groundAnimation.ref} style={{ y: groundAnimation.y, opacity: groundAnimation.opacity, scale: groundAnimation.scale, rotate: groundAnimation.rotate }} className="flex flex-col-reverse xl:flex-row pt-16">
                <div className="flex flex-col w-full xl:w-1/2 items-center text-center justify-center">
                    <h1 id="transporte_terrestre" className="text-xl md:text-2xl lg:text-4xl xl:text-4xl w-full font-bold">{t("ground_transport")}</h1>

                    <div className="w-full lg:w-2/3 xl:w-3/4 2xl:w-3/4">
                        <p className="text-sm md:text-2xl lg:text-2xl xl:text-2xl pt-4 font-normal w-full lg:w-auto text-center text-balance whitespace-normal hyphens-auto break-words">
                            {t("ground_transport_description")}
                        </p>
                    </div>
                </div>
                <div className="w-full py-4 md:py-10 xl:w-1/2 md:px-8 flex items-center justify-center">
                    <Image className="relative h-full md:h-4/5 w-full md:w-[40rem] object-cover rounded-md" src="/Images/Nuestros_servicios_logisticosimgs/transporte_terrestre.jpg" alt="Transporte Terrestre" width={500} height={300}/>
                </div>
            </motion.div>

            <motion.div ref={storageAnimation.ref} style={{ y: storageAnimation.y, opacity: storageAnimation.opacity, scale: storageAnimation.scale, rotate: storageAnimation.rotate }} className="flex flex-col xl:flex-row pt-16">
                <div className="w-full py-4 md:py-10 xl:w-1/2 md:px-8 flex items-center justify-center">
                    <Image className="relative h-full md:h-4/5 w-full md:w-[40rem] object-cover rounded-md" src="/Images/Nuestros_servicios_logisticosimgs/Almacenaje.webp" alt="Almacenaje" width={500} height={300}/>
                </div>
                <div className="flex flex-col w-full xl:w-1/2 items-center text-center justify-center">
                    <h1 id="almacenaje" className="text-xl md:text-2xl lg:text-4xl xl:text-4xl w-full font-bold">{t("storage")}</h1>
                    <div className="w-full lg:w-2/3 xl:w-3/4 2xl:w-3/4">
                        <p className="text-sm md:text-2xl lg:text-2xl xl:text-2xl pt-4 font-normal w-full lg:w-auto text-center text-balance whitespace-normal hyphens-auto break-words">
                            {t("storage_description")}
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div ref={customsAnimation.ref} style={{ y: customsAnimation.y, opacity: customsAnimation.opacity, scale: customsAnimation.scale, rotate: customsAnimation.rotate }} className="flex flex-col-reverse xl:flex-row pt-16">
                <div className="flex flex-col w-full xl:w-1/2 items-center text-center justify-center">
                    <h1 id="gestion_aduanal" className="text-xl md:text-2xl lg:text-4xl xl:text-4xl w-full font-bold">{t("customs_zone")}</h1>
                    <div className="w-full lg:w-2/3 xl:w-3/4 2xl:w-3/4">
                        <p className="text-sm md:text-2xl lg:text-2xl xl:text-2xl pt-4 font-normal w-full lg:w-auto text-center text-balance whitespace-normal hyphens-auto break-words">
                            {t("customs_zone_description")}
                        </p>
                    </div>
                </div>
                <div className="w-full py-4 md:py-10 xl:w-1/2 md:px-8 flex items-center justify-center">
                    <Image className="relative h-full md:h-4/5 w-full md:w-[40rem] object-cover rounded-md" src="/Images/Nuestros_servicios_logisticosimgs/Gestion_aduanal.webp" alt="Gestion aduanal" width={500} height={300}/>
                </div>
            </motion.div>

            <motion.div ref={parcelAnimation.ref} style={{ y: parcelAnimation.y, opacity: parcelAnimation.opacity, scale: parcelAnimation.scale, rotate: parcelAnimation.rotate }} className="flex flex-col xl:flex-row pt-16">
                <div className="w-full py-4 md:py-10 xl:w-1/2 md:px-8 flex items-center justify-center">
                    <Image className="relative h-full md:h-4/5 w-full md:w-[40rem] object-cover rounded-md" src="/Images/Nuestros_servicios_logisticosimgs/Paqueteria.webp" alt="Paqueteria" width={500} height={300}/>
                </div>
                <div className="flex flex-col w-full xl:w-1/2 items-center text-center justify-center">
                    <h1 id="paqueteria" className="text-xl md:text-2xl lg:text-4xl xl:text-4xl w-full font-bold">{t("packaging")}</h1>
                    <div className="w-full lg:w-2/3 xl:w-3/4 2xl:w-3/4">
                        <p className="text-sm md:text-2xl lg:text-2xl xl:text-2xl pt-4 font-normal w-full lg:w-auto text-center text-balance whitespace-normal hyphens-auto break-words">
                            {t("packagin_description")}
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div ref={inspectionAnimation.ref} style={{ y: inspectionAnimation.y, opacity: inspectionAnimation.opacity, scale: inspectionAnimation.scale, rotate: inspectionAnimation.rotate }} className="flex flex-col-reverse xl:flex-row pt-16">
                <div className="flex flex-col w-full xl:w-1/2 items-center text-center justify-center">
                    <h1 id="inspeccion_carga" className="text-xl md:text-2xl lg:text-4xl xl:text-4xl w-full font-bold">{t("cargo_inspection")}</h1>
                    <div className="w-full lg:w-2/3 xl:w-3/4 2xl:w-3/4">
                        <p className="text-sm md:text-2xl lg:text-2xl xl:text-2xl pt-4 font-normal w-full lg:w-auto text-center text-balance whitespace-normal hyphens-auto break-words">
                            {t("cargo_inspection_description")}
                        </p>
                    </div>
                </div>
                <div className="w-full py-4 md:py-10 xl:w-1/2 md:px-8 flex items-center justify-center">
                    <Image className="relative h-full md:h-4/5 w-full md:w-[40rem] object-cover rounded-md" src="/Images/Nuestros_servicios_logisticosimgs/Inspeccion.jpg" alt="Inspeccion de Carga" width={500} height={300}/>
                </div>
            </motion.div>

            <motion.div ref={insuranceAnimation.ref} style={{ y: insuranceAnimation.y, opacity: insuranceAnimation.opacity, scale: insuranceAnimation.scale, rotate: insuranceAnimation.rotate }} className="flex flex-col xl:flex-row pt-16">
                <div className="w-full py-4 md:py-10 xl:w-1/2 md:px-8 flex items-center justify-center">
                    <Image className="relative h-full md:h-4/5 w-full md:w-[40rem] object-cover rounded-md" src="/Images/Nuestros_servicios_logisticosimgs/Seguro.webp" alt="Seguro" width={500} height={300}/>
                </div>
                <div className="flex flex-col w-full xl:w-1/2 items-center text-center justify-center">
                    <h1 id="seguro" className="text-xl md:text-2xl lg:text-4xl xl:text-4xl w-2/3 font-bold">{t("risk_administration")}</h1>
                    <div className="w-full lg:w-2/3 xl:w-3/4 2xl:w-3/4">
                        <p className="text-sm md:text-2xl lg:text-2xl xl:text-2xl pt-4 font-normal w-full lg:w-auto text-center text-balance whitespace-normal hyphens-auto break-words">
                            {t("risk_administration_description")}
                        </p>
                    </div>
                </div>
            </motion.div>


        </div>
    );
};

export default ServiciosComponentes;

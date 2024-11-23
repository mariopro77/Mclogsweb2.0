"use client"

import React, { useState, useEffect } from "react";
import { useTranslation } from 'next-i18next';


export default function NuestrosServicios(props) {
    const { t } = useTranslation("common");
    const [isHover, setHover] = useState(false);
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        let timer;
        if (isHover) {
            setShowVideo(true);
        } else {

            timer = setTimeout(() => setShowVideo(false), 500);
        }
        return () => clearTimeout(timer);
    }, [isHover]);

    return (
        <a
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={props.espacio}
            href={props.link}
        >
            <div className="relative">
                {showVideo && (
                    <video
                        className={`fixed inset-0 w-full h-full object-cover rounded-md brightness-65 z-[-10] ${isHover ? 'animate-circleIn' : 'animate-circleOut'
                            }`}
                        src={props.video}
                        loop
                        autoPlay
                        muted
                        controls={false}
                        onContextMenu={(e) => e.preventDefault()}
                        playsInline
                    ></video>
                )}
            </div>
            <div className="w-auto">
                <div className={props.claseImagen} alt="">
                    {props.imagen}
                </div>
            </div>
            <div className=" py-4 text-center w-full">
                <h1 className="text-xl">{t(props.titulo)}</h1>
            </div>
            <div className="lg:hidden w-auto flex justify-end pr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>

            </div>
        </a>
    );
}

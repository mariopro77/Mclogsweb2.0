import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Botondeasistencia() {
    const router = useRouter();
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [,setIsHovered] = useState(false);

    const variants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    };

    const isHomepage = router.pathname === "/";
    const isCentrodeayuda = router.pathname === "/centrodeayuda";
    const isSoporte = router.pathname === "/soporte";
    const isPreguntasfrecuentes = router.pathname === "/preguntasfrecuentes";

    useEffect(() => {
        if (isHomepage) {
            const handleScroll = () => {
                const position = window.scrollY;
                setScrollPosition(position);
            };

            window.addEventListener("scroll", handleScroll, { passive: true });

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, [isHomepage]);

    const hide = isCentrodeayuda || isSoporte || isPreguntasfrecuentes ? "hidden" : "";

    const ButtonClass = isHomepage
        ? scrollPosition >= 100
            ? "bg-black/50 hover:bg-black/65 h-12 w-12 rounded-full flex items-center justify-center relative"
            : "bg-white/25 hover:bg-white/15 h-12 w-12 rounded-full flex items-center justify-center relative"
        : "bg-black/50 hover:bg-black/65 h-12 w-12 rounded-full flex items-center justify-center relative";

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setIsOptionsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setIsOptionsOpen(false);
    };

    const buttonClose = () => {
        setIsHovered(false);
        setIsOptionsOpen(!isOptionsOpen);
    };

    const navigatetoCentrodeayuda = () => {
        router.push("/centrodeayuda");
    };

    const navigatetoContactos = () => {
        router.push("/contacto");
    };

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={show ? "visible" : "hidden"}
                transition={{ duration: 0.5 }}
                className="flex flex-row fixed right-10 lg:right-16 bottom-10 z-10"
            >
                {isOptionsOpen && show && (
                    <>
                        <a
                            className={`${ButtonClass} ${hide} mb-0 mr-4 `}
                            href="https://wa.me/+18097238838" target="_blank" rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                className="w-8 h-8 text-white"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M 24.503906 7.503906 C 22.246094 5.246094 19.246094 4 16.050781 4 C 9.464844 4 4.101563 9.359375 4.101563 15.945313 C 4.097656 18.050781 4.648438 20.105469 5.695313 21.917969 L 4 28.109375 L 10.335938 26.445313 C 12.078125 27.398438 14.046875 27.898438 16.046875 27.902344 L 16.050781 27.902344 C 22.636719 27.902344 27.996094 22.542969 28 15.953125 C 28 12.761719 26.757813 9.761719 24.503906 7.503906 Z M 16.050781 25.882813 L 16.046875 25.882813 C 14.265625 25.882813 12.515625 25.402344 10.992188 24.5 L 10.628906 24.285156 L 6.867188 25.269531 L 7.871094 21.605469 L 7.636719 21.230469 C 6.640625 19.648438 6.117188 17.820313 6.117188 15.945313 C 6.117188 10.472656 10.574219 6.019531 16.054688 6.019531 C 18.707031 6.019531 21.199219 7.054688 23.074219 8.929688 C 24.949219 10.808594 25.980469 13.300781 25.980469 15.953125 C 25.980469 21.429688 21.523438 25.882813 16.050781 25.882813 Z"
                                ></path>
                            </svg>
                        </a>
                        <button
                            className={`${ButtonClass} ${hide} mb-0 mr-4 `}
                            onClick={navigatetoContactos}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32" className="w-8 h-8 text-white">
                                <path fill="currentColor" d="..." />
                            </svg>
                        </button>
                        <button
                            className={`${ButtonClass} ${hide} mb-0 mr-4`}
                            onClick={navigatetoCentrodeayuda}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32" className="w-8 h-8 text-white">
                                <path fill="currentColor" d="..." />
                            </svg>
                        </button>
                    </>
                )}

                {show && (
                    <button
                        className={`${ButtonClass} ${hide}`}
                        onClick={buttonClose} 
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32" className="h-8 w-8">
                            <path fill="currentColor" d="..." />
                        </svg>
                    </button>
                )}
            </motion.div>
        </div>
    );
}
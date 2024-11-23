import React, { useRef, useEffect, useState } from 'react';


const VideoSection = ({ currentText, fade }) => {
    const sectionRef = useRef(null);
    const [isFixed, setIsFixed] = useState(true);

    const handleScroll = () => {
        if (sectionRef.current) {
            const sectionTop = sectionRef.current.getBoundingClientRect().top;
            setIsFixed(sectionTop >= 0);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={sectionRef} className="relative h-screen w-full">
        <video
            className={`${
                isFixed ? 'fixed' : 'absolute'
            } inset-0 w-full h-full object-cover brightness-50 z-[-10]`}
            src={"/Videos/Video1.mp4"}
            loop
            autoPlay
            muted
            controls={false}
            onContextMenu={(e) => e.preventDefault()}
            playsInline
        ></video>
        <div className="flex w-full h-full text-white px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 pt-20 items-center">
            <div className={`h-auto w-auto text-wrap ${fade ? 'fade-out' : 'fade-in'}`}>
                <p
                    className="w-3/4 text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl"
                    data-aos="fade-up"
                    data-aos-duration="400"
                    data-aos-delay="600"
                >
                    {currentText.subtitle}
                </p>
                <p
                    className="text-lg font-semibold py-4"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="1300"
                >
                    {currentText.description}
                </p>
            </div>
        </div>
    </div>
    );
};

export default VideoSection;

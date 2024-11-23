import { useTranslation } from "react-i18next";
import confiable from "../Icons/Confiable.png";
import innovacion from "../Icons/Innovacion.png";
import flexible from "../Icons/Flexible.png";
import tecnologia from "../Icons/Tecnologia.png";
import Image from "next/image";

const ScrollingText = () => {
    const { t } = useTranslation();

    // Create a list of spans with "Gravitas" repeated
    const spans = Array.from({ length: 50 }, (_, i) => (
        <span key={i} className="text-span flex flex-row items-center text-xl font-bold pr-14 text-blue-900">

            <div className="w-auto px-5">
                <div className="bg-blue rounded-full h-2 w-2"></div>
            </div>

            <div className="flex flex-row pr-16 items-center">
                <Image className="h-8 w-8 lg:h-12 lg:w-12" src={confiable} alt="" width={500} height={300} />
                <p className="text-xs pl-2">{t("reliability")}</p>
            </div>

            <div className="w-auto px-5">
                <div className="bg-bluemunsell rounded-full h-2 w-2"></div>
            </div>

            <div className="flex flex-row pr-16 items-center">
                <Image className="h-8 w-8 lg:h-12 lg:w-12" src={innovacion} alt="" width={500} height={300} />
                <p className="text-xs">{t("innovation")}</p>
            </div>

            <div className="w-auto px-5">
                <div className="bg-oldgold rounded-full h-2 w-2"></div>
            </div>

            <div className="flex flex-row pr-16 items-center">
                <Image className="h-8 w-8 lg:h-12 lg:w-12" src={flexible} alt="" width={500} height={300} />
                <p className="text-xs">{t("flexibility")}</p>
            </div>

            <div className="w-auto px-5">
                <div className="bg-slate-400 rounded-full h-2 w-2"></div>
            </div>

            <div className="flex flex-row items-center">
                <Image className="h-8 w-8 lg:h-12 lg:w-12" src={tecnologia} alt="" width={500} height={300} />
                <p className="text-xs">{t("technology")}</p>
            </div>


        </span>
    ));

    return (
        <div className="overflow-hidden relative">
            <div className="marquee-container">
                <div className="animate-marquee flex items-center whitespace-nowrap">
                    {spans}
                    {spans}
                </div>
            </div>
        </div>
    );
};

export default ScrollingText;

"use client"

import { useTranslation } from "next-i18next";
import Image from "next/image";



export default function HighPerformance() {
    const { t } = useTranslation("common");
    return (
        <div className="h-screen w-full pt-24 font-Encode-Sans">
            <div className="flex flex-col items-center justify-center w-full h-full px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40">
                <div className="pb-20 flex justify-center flex-col items-center">
                <img  className="h-96 w-96" src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd25wZ25zaWl3dDZoejlsYTF1eXI3MW1jajduaTc2bnJneTRmbHRmZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QyOMgIp6wqpFwY9V3u/giphy.gif" alt=""/>
                <h1 className="text-4xl">{t("In_construction")}</h1>
                </div>
            </div>
        </div>
    )
}
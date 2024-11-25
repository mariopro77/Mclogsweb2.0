'use client'

import React from "react";
import { useTranslation } from "next-i18next";
import Link from 'next/link';


// import imagen_background from "../Images/CentroDeayuda/Centrodeayuda.jpg";

export default function CentrodeAyuda() {
    const { t } = useTranslation("common");


    return (
        <div className="h-auto w-full font-Encode-Sans pb-12 pt-16 ">
            <div className="flex justify-center items-center bg-top w-full h-44 md:h-72 px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 overflow-hidden" style={{ backgroundImage: `url('https://images.pexels.com/photos/8867213/pexels-photo-8867213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`, backgroundSize: 'cover', backgroundPosition: "bottom" }}>
                <div className="flex flex-col items-center justify-between w-full gap-y-8 text-center">
                    <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-semibold animate__animated animate__fadeInLeftBig">{t("Howcanwehelp")}</h1>
                </div>
            </div>
            <div className="h-auto py-20 w-full px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10 justify-items-center">

                    <Link href="/Soporte" className="flex flex-col justify-center items-center border-2 h-56 border-slate-200 rounded-md hover:bg-slate-100 w-full">
                        <div className="h-16 w-16 my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path fill="#038EA3ff" d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z" />
                            </svg>
                        </div>
                        <div className="text-center">
                            <h1 className="text-bluemunsell font-bold text-2xl ">{t("support")}</h1>
                            <p className="text-gray-400 p-4">{t("support_description")}</p>
                        </div>
                    </Link>

                    <Link href="tel:18095653265" className="flex flex-col justify-center items-center border-2 h-56 border-slate-200 rounded-md p-4 hover:bg-slate-100 w-full">
                        <div className="h-16 w-16 my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="#A6A403ff" d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" />
                            </svg>
                        </div>
                        <div className="text-center">
                            <h1 className="text-oldgold font-bold text-2xl ">{t("call_us")}</h1>
                            <p className="text-gray-400 p-4">{t("call_us_description")}</p>
                        </div>

                    </Link>

                    <Link href="/PreguntasFrecuentes" className="flex flex-col justify-center items-center border-2 h-56 border-slate-200 rounded-md p-4 hover:bg-slate-100 w-full">
                        <div className="h-16 w-16 my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="#038EA3ff" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                            </svg>
                        </div>
                        <div className="text-center">
                            <h1 className="text-bluemunsell font-bold text-2xl ">{t("frequent_questions")}</h1>
                            <p className="text-gray-400 pt-2">{t("frequent_questions_description")}</p>
                        </div>

                    </Link>


                    <Link href="https://wa.me/18097238838" target="_blank" rel="noreferrer" className="flex flex-col justify-center items-center border-2 h-56 border-slate-200 rounded-md p-4 hover:bg-slate-100 w-full">
                        <div className="h-16 w-16 my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32" className="h-16 w-16 text-oldgold">
                                <path fill="currentColor" fillRule="evenodd" d="M 24.503906 7.503906 C 22.246094 5.246094 19.246094 4 16.050781 4 C 9.464844 4 4.101563 9.359375 4.101563 15.945313 C 4.097656 18.050781 4.648438 20.105469 5.695313 21.917969 L 4 28.109375 L 10.335938 26.445313 C 12.078125 27.398438 14.046875 27.898438 16.046875 27.902344 L 16.050781 27.902344 C 22.636719 27.902344 27.996094 22.542969 28 15.953125 C 28 12.761719 26.757813 9.761719 24.503906 7.503906 Z M 16.050781 25.882813 L 16.046875 25.882813 C 14.265625 25.882813 12.515625 25.402344 10.992188 24.5 L 10.628906 24.285156 L 6.867188 25.269531 L 7.871094 21.605469 L 7.636719 21.230469 C 6.640625 19.648438 6.117188 17.820313 6.117188 15.945313 C 6.117188 10.472656 10.574219 6.019531 16.054688 6.019531 C 18.707031 6.019531 21.199219 7.054688 23.074219 8.929688 C 24.949219 10.808594 25.980469 13.300781 25.980469 15.953125 C 25.980469 21.429688 21.523438 25.882813 16.050781 25.882813 Z M 21.496094 18.445313 C 21.199219 18.296875 19.730469 17.574219 19.457031 17.476563 C 19.183594 17.375 18.984375 17.328125 18.785156 17.625 C 18.585938 17.925781 18.015625 18.597656 17.839844 18.796875 C 17.667969 18.992188 17.492188 19.019531 17.195313 18.871094 C 16.894531 18.722656 15.933594 18.40625 14.792969 17.386719 C 13.90625 16.597656 13.304688 15.617188 13.132813 15.320313 C 12.957031 15.019531 13.113281 14.859375 13.261719 14.710938 C 13.398438 14.578125 13.5625 14.363281 13.710938 14.1875 C 13.859375 14.015625 13.910156 13.890625 14.011719 13.691406 C 14.109375 13.492188 14.058594 13.316406 13.984375 13.167969 C 13.910156 13.019531 13.3125 11.546875 13.0625 10.949219 C 12.820313 10.367188 12.574219 10.449219 12.390625 10.4375 C 12.21875 10.429688 12.019531 10.429688 11.820313 10.429688 C 11.621094 10.429688 11.296875 10.503906 11.023438 10.804688 C 10.75 11.101563 9.980469 11.824219 9.980469 13.292969 C 9.980469 14.761719 11.050781 16.183594 11.199219 16.382813 C 11.347656 16.578125 13.304688 19.59375 16.300781 20.886719 C 17.011719 21.195313 17.566406 21.378906 18 21.515625 C 18.714844 21.742188 19.367188 21.710938 19.882813 21.636719 C 20.457031 21.550781 21.648438 20.914063 21.898438 20.214844 C 22.144531 19.519531 22.144531 18.921875 22.070313 18.796875 C 21.996094 18.671875 21.796875 18.597656 21.496094 18.445313 Z"></path>
                            </svg>
                        </div>
                        <div className="text-center">
                            <h1 className="text-oldgold font-bold text-2xl ">{t("write_to_us")}</h1>
                            <p className="text-gray-400 pt-2">{t("write_to_us_description")}</p>
                        </div>

                    </Link>
                </div>
            </div>
        </div>
    )
}

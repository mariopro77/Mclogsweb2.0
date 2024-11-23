// Proyecto_plantilla_1.js
import React from 'react';
import proyectosdatos from '../Datos/Proyectosdatos';
import Image from "next/image";

export default function ProyectoPlantilla1({ id, t }) {

    const content = proyectosdatos.find(item => item.id === parseInt(id));

    if (!content) {
        return <div>{t("proyectos.not_found")}</div>;
    }

    

    return (
        <div id={content.id} className='pt-28 pb-20 px-4 h-auto w-full flex flex-col items-center justify-center'>
            <div className='max-w-sm md:max-w-4xl xl:max-w-6xl'>
                <div className='h-auto text-left'>
                    <h1 className='text-3xl md:text-4xl xl:text-5xl font-bold'>{t(content.title)}</h1>
                </div>
                <div className='pt-8'>
                    <Image className="h-[30rem] w-full rounded-md object-cover" src={content.img1} alt={t(`${content.title}.subtitle1`)} width={500} height={300}/>
                </div>
                <div className='pt-12'>
                    <div>
                        <p className='font-bold text-xl text-slate-700'>{t(content.subtitle1)}</p>
                    </div>
                    <div className='pt-6 text-justify'>
                        <p className='font-regular text-slate-500 leading-loose'>{t(content.paragraph1)}</p>
                    </div>
                </div>
                <div className={`grid grid-cols-1 xl:grid-cols-2 h-auto w-full pt-10 gap-10 ${content.subtitle2 ? "block":"hidden"}`}>
                    <div>
                        <Image className="rounded-md h-80" src={content.img2} alt={t(`${content.title}.subtitle2`)} width={500} height={300}/>
                    </div>
                    <div>
                        <div>
                            <div>
                                <p className='font-bold text-xl text-slate-700'>{t(content.subtitle2)}</p>
                            </div>
                            <div className='pt-6 text-justify'>
                                <p className='font-regular text-slate-500 leading-loose'>{t(content.paragraph2)}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`pt-12  ${content.subtitle3 ? "block":"hidden"}`}>
                    <div>
                        <p className='font-bold text-xl text-slate-700'>{t(content.subtitle3)}</p>
                    </div>
                    <div className='pt-6 text-justify font-regular text-slate-500 leading-loose'>
                        <p className='font-regular text-slate-500 leading-loose'>{t(content.paragraph3)}</p>
                    </div>
                </div>
                <div className={`grid grid-cols-1 xl:grid-cols-2 h-auto w-full pt-10 gap-10 ${content.subtitle4 ? "block":"hidden"}`}>
                    <div>
                        <Image className="rounded-md h-80" src={content.img4} alt={t(`${content.title}.subtitle4`)} width={500} height={300}/>
                    </div>
                    <div>
                        <div>
                            <div>
                                <p className='font-bold text-xl text-slate-700'>{t(content.subtitle4)}</p>
                            </div>
                            <div className='pt-6'>
                                <p className='font-regular text-slate-500 leading-loose'>{t(content.paragraph4)}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`pt-12 ${content.subtitle5 ? "block":"hidden"}`}>
                    <div>
                        <p className='font-bold text-xl text-slate-700'>{t(content.subtitle5)}</p>
                    </div>
                    <div className='pt-6 font-regular text-slate-500 leading-loose' >
                        <p className='font-regular text-slate-500 leading-loose'>{t(content.paragraph5)}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

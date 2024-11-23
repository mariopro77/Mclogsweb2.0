import React from "react";
import { useTranslation } from "react-i18next";

export default function PreguntasyRespuestas() {
    const { t } = useTranslation();

    const preguntas_y_respuestas = [
        {
            id: 1,
            titulo: "¿Cómo puedo rastrear mi orden?",
            respuesta: "En esta plataforma, haz click en la opción de rastreo, ahí podrás ingresar el numero contenedor, Conocimiento de embarque, Referencia u Orden, luego haz click al botón con una lupa y en breve le mostrará el estado de su orden y más información."

        },
        {
            id: 2,
            titulo: "¿Cuáles son los tiempos estimados de llegada al puerto para las órdenes?",
            respuesta: "Depende el origen de donde está zarpando, también depende de las condiciónes meteorológicas"

        },
        {
            id: 3,
            titulo: "¿Cómo puedo contactar al servicio de atención al cliente?",
            respuesta: "Para contactar al servicio de atención al cliente llama al +1 (809)-732-8838"

        },
        {
            id: 4,
            titulo: "¿Cómo puedo obtener una cotización de una o varias órdenes?",
            respuesta: "Para obtener la cotización de una orden, debe de contactar a uno de nuestros representantes, +1 (809)-732-8838"

        },
        {
            id: 5,
            titulo: "¿Si tengo un problema, como puedo reportarlo?",
            respuesta: "Haz click en la opción 'Centro de Ayuda', haz click en la opción de soporte, te aparecerá un formulario, por favor, llénalo para dejarnos saber cual es tu problema, una vez le de click al botón de enviar, se mostrará en pantalla el numero de ticket generado y un link para darle seguimiento, por favor guarde ese link, en el caso de que sea una emergencia, no dudes en llamarnos"

        },
      

    ]
    return (
        <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
            <div className="flex flex-col items-center">
                <h2 className="font-bold text-5xl mt-5 tracking-tight">
                    FAQ
                </h2>
                <p className="text-neutral-500 text-xl mt-3">
                    {t("FAQ")}
                </p>
            </div>
            <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
                {preguntas_y_respuestas.map(({id, titulo, respuesta}) => (
                    <div className="py-5" key={id}>
                    <details className="group">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span>{titulo}</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        {respuesta}
                        </p>
                    </details>
                </div>
                ))}
            </div>

            <div className="pt-10">
                <div className="w-full text-center">
                    <a className="underline underline-offset-2 text-sky-600" href="https://wa.me/+18097238838">¿No encuentras la respuesta a tu pregunta?</a>
                </div>
            </div>
        </div>
    )
}


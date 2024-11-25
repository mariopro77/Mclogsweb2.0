import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Footer() {
  const { t } = useTranslation("common");
   const router = useRouter();

  const currentYear = new Date().getFullYear();

  const Acceso_rapido = [
    { name: t("us"), link: "/Nosotros" },
    { name: t("services"), link: "/Servicios" },
    { name: t("agents"), link: "/Agentes" },
    { name: t("news"), link: "/Noticias" },
    { name: t("tracking"), link: "/Rastreo" },
    { name: t("contacts"), link: "/Contacto" },
    { name: t("myaccount"), link: "https://my.mclogs.com/auth/login" },
  ];

  const Enlaces = [
    { name: t("security_policy"), link: "/PrivacidadySeguridad" },
    { name: t("terminos_de_uso"), link: "/Terminos" },
    { name: t("centro_de_ayuda"), link: "/Centrodeayuda" },
  ];

 

const handleChange = (newLang) => {
  const { pathname, asPath, query } = router;
  router.push({ pathname, query }, asPath, { locale: newLang });
};


  return (
    <footer className="px-10 sm:px-10 md:px-20 lg:px-30 2xl:px-40">
      <hr className="bg-slate-50/50" />
      <div className="max-w-screen-2xl py-12 mx-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
          <div>
            <Link href="/">
              <Image className="w-52" src="/Images/Logos/logo.png" alt="MC Logo" 
               width={100}  // Proporción original
               height={52} 
              />
            </Link>

            <div className="mt-4 grid grid-cols-4 gap-y-4 text-gray-600">
              <a
                className="hover:opacity-75"
                href="https://www.google.com/maps/place/M.C.+Logistics+SRL/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Location</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </a>
              <a className="hover:opacity-75" href="tel:8095653265">
                <span className="sr-only"> WhatsApp </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </a>
              <a className="hover:opacity-75" href="mailto:info@mclogs.com">
                <span className="sr-only"> Email </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </a>
              <a className="hover:opacity-75" href="https://wa.me/18095653265">
                <Image src="/Icons/Whatsapp.png" alt="WhatsApp"
                 width={20}  // Proporción original
                 height={20}  
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.mclogs.www"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:opacity-75 col-span-2"
              >
                <Image className="h-5 w-5" src="/Icons/Android.png" alt="Google Play"
                width={20}  // Proporción original
                height={20}  
                />
                <p className="font-normal text-sm text-gray-500 hover:text-gray-400 pt-1">Google Play</p>
              </a>
              <a
                href="https://apps.apple.com/do/app/mclogs/id1504701375"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:opacity-75 col-span-2"
              >
                <Image className="h-5 w-5" src="/Icons/Apple.png" alt="Apple Store" 
                width={20}  // Proporción original
                height={20}  
                />
                <p className="font-normal text-sm text-gray-500 hover:text-gray-400 pt-1">Apple Store</p>
              </a>
            </div>
          </div>
          <div>
            <p className="font-medium text-lg">{t("footer_acces")}</p>
            <nav className="grid grid-cols-2 mt-4 gap-y-2 text-sm text-gray-500">
              {Acceso_rapido.map((link, id) => (
                <Link href={link.link} key={id}>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="font-medium text-lg">{t("footer_links")}</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              {Enlaces.map((link, id) => (
                <Link href={link.link} key={id}>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="font-medium text-lg">{t("contact_us_open")}</p>
            <nav className="flex flex-col mt-4 text-sm text-gray-500">
              <p className="text-md text-black opacity-70 font-medium">
                {t("offices")}
              </p>
              <p className="text-sm pt-1">{t("contact_us_hours1")}</p>
              <p className="text-sm pt-1">{t("contact_us_hours2")}</p>
            </nav>
          </div>
        </div>
      </div>

      <div>
        <hr className=" bg-slate-200 w-full " />
      </div>

      <div className="flex justify-between py-6 text-center">
        <p className="text-xs text-gray-500">
          {t("rights_first_half")} {currentYear} {t("rights_second_half")}
        </p>
        <div className="language-switcher text-xs">
          <button onClick={() => handleChange("en")} className="px-4 text-gray-500">
            English
          </button>
          <button onClick={() => handleChange("es")} className="px-4  text-gray-500">
            Español
          </button>
        </div>
      </div>
    </footer>
  );
}

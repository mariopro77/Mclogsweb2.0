// src/app/Providers.js
'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollToTopButton from "../Components/ScrolltoTopButton"; // Asegúrate de que la ruta sea correcta
import "../styles/slider.css";
import "../styles/globals.css";

export default function Providers({ children }) {
  const [activeLink, setActiveLink] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => window.scrollTo(0, 0);

    // Escuchar cambios de ruta para scroll
    router.events?.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events?.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    // Agregar scripts de Botpress
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v2.1/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src =
      "https://mediafiles.botpress.cloud/0ccbe189-4b6d-4af3-b55c-420d27d5cc72/webchat/v2.1/config.js";
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <NavBar activeLink={activeLink} setActiveLink={setActiveLink} />
      {children}
      <ScrollToTopButton />
      <Footer setActiveLink={setActiveLink} />
    </I18nextProvider>
  );
}

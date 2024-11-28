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
    // Load the inject.js script
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    script1.async = true;
  
    script1.onload = () => {
      // Now load the configuration script
      const script2 = document.createElement("script");
      script2.src = "https://files.bpcontent.cloud/2024/11/27/16/20241127160310-731MLXW9.js";
      script2.async = true;
      document.body.appendChild(script2);
  
      // Cleanup for script2
      return () => {
        document.body.removeChild(script2);
      };
    };
  
    document.body.appendChild(script1);
  
    // Cleanup for script1
    return () => {
      document.body.removeChild(script1);
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

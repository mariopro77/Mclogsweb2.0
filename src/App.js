// pages/_app.js

import { useEffect, useState } from "react";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import "default-passive-events";
import "../i18n";

function MyApp({ Component, pageProps }) {
  const [activeLink, setActiveLink] = useState("");
  const [trackSearch, setTrackSearch] = useState('');

  useEffect(() => {
    if (typeof window !== "undefined") {
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
    }
  }, []);

  return (
    <>
      <NavBar activeLink={activeLink} setActiveLink={setActiveLink} />
      <Component
        {...pageProps}
        setTrackSearch={setTrackSearch}
        trackSearch={trackSearch}
        setShipName={setShipName}
      />
      <ScrollToTopButton />
      <Footer setActiveLink={setActiveLink} />
    </>
  );
}

export default MyApp;

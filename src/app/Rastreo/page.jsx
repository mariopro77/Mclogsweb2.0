'use client'

import React, { useState, useEffect, useRef, useContext } from 'react';
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from 'framer-motion';
import { TrackingContext } from '../../../context/TrackingContext';

export default function Tracking() {

  const { trackSearch, setTrackSearch, shipName, setShipName } = useContext(TrackingContext);

  const { t, i18n } = useTranslation("common");
  const locale = i18n.language;
  const [iframeSrc, setIframeSrc] = useState("");
  const [mmsi, setMmsi] = useState(null);
  const [trackResult, setTrackResult] = useState(null);
  const [error, setError] = useState(null);
  const [isContainer, setIsContainer] = useState(false);
  const [, setMovementType] = useState('');
  const [, setFetchSuccessful] = useState(false);
  const scrollRef = useRef(null);
  const [valid, setValid] = useState(false);
  const [shipFetchError, setShipFetchError] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Estado local para la entrada del usuario
  const [inputValue, setInputValue] = useState('');

  // Inicializar inputValue con trackSearch al montar el componente
  useEffect(() => {
    setInputValue(trackSearch);
  }, [trackSearch]); // Asegura que si trackSearch cambia inicialmente, inputValue también lo haga

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [shipFetchError]);

  useEffect(() => {
    if (trackSearch === '') {
      setTrackResult(null);
      setError(null);
      setShipFetchError(false); // Resetear estado de error cuando se limpia la búsqueda
    }
  }, [trackSearch]);

  useEffect(() => {
    if ((trackResult || error) && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [trackResult, error]);

  useEffect(() => {
    if (trackResult && trackResult.Summary) {
      let foundShipName = null;
      for (let i = trackResult.Summary.length - 1; i >= 0; i--) {
        const summary = trackResult.Summary[i];
        if (summary.Ship) {
          foundShipName = summary.Ship;
          break;
        }
      }

      setShipName(foundShipName);
    }
  }, [trackResult, setShipName]);

  useEffect(() => {
    if (shipName && shipName.length > 0) {
      setValid(true);
      setShipFetchError(false);
    } else {
      setValid(false);
    }
  }, [shipName]);

  useEffect(() => {
    if (mmsi) {
      let src = document.location.protocol === "https:" ? 'https://www.marinetraffic.com/' : 'http://www.marinetraffic.com/';

      const latitude = window.latitude || 0;
      const longitude = window.longitude || 0;


      if (typeof window.mtembedcode !== "undefined") {
        src += `en/ais/embed/zoom:13/centery:36/centerx:23/maptype:4/shownames:false/mmsi:${mmsi || '0'}/shipid:0/fleet:/fleet_id:/vtypes:/showmenu:/remember:false`;
      } else {
        src += `en/ais/embed/centerx:${longitude}/centery:${latitude}/zoom:5/maptype:1/shownames:true/mmsi:${mmsi}/showmenu:false`;
      }

      setIframeSrc(src);
    }
  }, [mmsi]);

  useEffect(() => {
    if (trackResult && valid) {
      handleViewShipLocation(trackResult, valid);
    }
  }, [trackResult, valid]);

  // Función separada para realizar el fetch
  const performFetch = async (searchTerm) => {
    setShipFetchError(false); // Resetear estado de error
    setIsVisible(true); // Resetear visibilidad
    setShipName(''); // Resetear nombre del barco

    try {
      const response = await fetch(`https://api.mclogs.com/odata/public/GetOrderByText(Value='${searchTerm}')?$select=Oid,State,ETD,ETA,TelexRelease,TransportMode,MovementType,Freights,Summary&$expand=Freights,Summary`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      setTrackResult(data);
      setMovementType(data.MovementType);
      setIsContainer(/^([A-Z]{3})([UJZ])([0-9]{6})([0-9])$/.test(searchTerm));

      if (data.Summary && isContainer && (data.MovementType === 'Consolidation' || data.MovementType === 'LCL/LCL')) {
        data.Summary = data.Summary.filter(x => !['EnCoordinacion', 'En Coordinación', 'En Transito', 'EnTransito'].includes(x.Status));
      }

      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('No se encontraron resultados');
      setTrackResult(null);
    }
  };

  useEffect(() => {
    if (trackSearch) {
      performFetch(trackSearch);
    }
  }, [trackSearch]);

  const handleButtonClick = () => {
    // Solo actualizar trackSearch cuando el usuario realiza una búsqueda explícita
    setTrackSearch(inputValue);
  };

  const handleViewShipLocation = async (trackResult) => {
    setShipFetchError(false);
    if (valid) {
      try {
        const response = await fetch(`https://support.consilialogistics.com/mclogs/vessels?search=${shipName}`);
        if (response.ok) {
          const data = await response.json();
          if (data && data.length > 0 && data[0].mmsi) {
            const mmsi = data[0].mmsi;
            setMmsi(mmsi);
            setFetchSuccessful(true);
          } else {
            setFetchSuccessful(false);
            const summary = trackResult.Summary;
            if (summary.length > 0 && summary[summary.length - 1].MMSI) {
              const lastMmsi = summary[summary.length - 1].MMSI;
              setMmsi(lastMmsi);
            } else {
              setShipFetchError(true);
            }
          }
        } else {
          setFetchSuccessful(false);
          const summary = trackResult.Summary;
          if (summary.length > 0 && summary[summary.length - 1].MMSI) {
            const lastMmsi = summary[summary.length - 1].MMSI;
            setMmsi(lastMmsi);
          } else {
            setShipFetchError(true);
          }
        }
      } catch (error) {
        console.error('Error fetching ship location:', error);
        setFetchSuccessful(false);
        const summary = trackResult.Summary;
        if (summary.length > 0 && summary[summary.length - 1].MMSI) {
          const lastMmsi = summary[summary.length - 1].MMSI;
          setMmsi(lastMmsi);
        } else {
          setShipFetchError(true);
        }
      }
    }
  };

  const handleClearSearch = () => {
    setInputValue(''); // Limpiar el campo de búsqueda
    setTrackSearch(''); // Limpiar trackSearch en el contexto
    setTrackResult(null); // Limpiar resultado de la búsqueda
    setShipName(''); // Limpiar nombre del barco
    window.scrollTo({ top: 20, behavior: 'smooth' });
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleButtonClick();
    }
  };

  const handleSearchChange = (e) => {
    setInputValue(e.target.value);
    setShipName(''); // Opcional: Resetear el nombre del barco al cambiar la búsqueda
  };

  const formatDateClass = (dateString, isClosest) => {
    const date = new Date(dateString);
    const currentDate = new Date();
    const isToday = date.toDateString() === currentDate.toDateString();
    const isFuture = date > currentDate;

    let borderClass = 'border-oldgold';
    let bgClass = 'bg-oldgold';
    let textClass = 'text-bluemunsell';

    if (isFuture) {
      borderClass = 'border-slate-400';
      bgClass = 'bg-slate-400';
      textClass = 'text-slate-400';
      if (isClosest) {
        borderClass = 'animate-pulse';
      }
    }

    return { borderClass, bgClass, textClass };
  };

  const renderSummary = () => {
    if (!trackResult || !trackResult.Summary) return null;

    const currentDate = new Date();
    const closestDateInfo = trackResult.Summary.reduce((closest, item) => {
      const dateObj = new Date(item.Date);
      const dateDiff = Math.abs(dateObj - currentDate);

      if (dateDiff < closest.diff) {
        return { date: item.Date, diff: dateDiff };
      }

      return closest;
    }, { date: null, diff: Infinity });

    return trackResult.Summary.slice().reverse().map((x, index) => {
      const isClosest = x.Date === closestDateInfo.date;
      const { borderClass, bgClass, textClass } = formatDateClass(x.Date, isClosest);
      const isLastItem = index === trackResult.Summary.length - 1;
      return (
        <div className="flex gap-x-3 justify-center w-full" key={index}>
          <div className=" p-2 text-start">
            <span className="text-xs text-gray-500 dark:text-neutral-400">
              <p className='w-28'>{`${new Date(x.Date).toLocaleDateString(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`}, {`${new Date(x.Date).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}`}
              </p>
            </span>
          </div>

          <div className='flex flex-col items-center'>
            <div className={`rounded-full h-5 w-5 border-2 py-2 ${borderClass}`}></div>

            {!isLastItem && (
              <div className={`h-full w-0.5 ${bgClass}`}></div>
            )}

          </div>

          <div className="w-36 pb-8">
            <h3 className={`flex gap-x-1.5 font-semibold ${textClass}`}>
              {t(`${x.Status.toLowerCase().replace(/ /g, "_")}`)}
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              {t(`${x.Description.toLowerCase().replace(/ /g, "_")}`)} 
              <p className='text-gray-300'>({x.ActivityPlace})</p>
            </p>
            <div className="mt-1 -ms-1 p-1 inline-flex flex-col text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700">
              <p className="w-auto"> {x.Ship || '-'}</p>
              <p>({x.TravelNumber || '-'})</p>
            </div>
          </div>
        </div >
      );
});
  };

const renderImages = () => {
  if (!trackResult || !trackResult.State) return null;

  let imageUrl = '';

  switch (trackResult.State) {
    case 'Despachado':
    case 'En Puerto':
    case 'EnPuerto':
      imageUrl = trackResult.TransportMode === 'Maritimo' ? 'lifeline-barco-03.svg' : 'lifeline-avion-03.svg';
      break;
    case 'En Despacho Solicitado Maritimo':
    case 'En Despacho Solicitado':
    case 'DespachoSolicitado':
      imageUrl = trackResult.TransportMode === 'Maritimo' ? 'lifeline-barco-03.svg' : 'lifeline-avion-03.svg';
      break;
    case 'En Transito':
    case 'EnTransito':
      trackResult.State = 'En Transito';
      imageUrl = trackResult.TransportMode === 'Maritimo' ? 'lifeline-barco-02.svg' : 'lifeline-avion-02.svg';
      break;
    case 'EnCoordinacion':
    case 'En Coordinación':
      imageUrl = trackResult.TransportMode === 'Maritimo' ? 'lifeline-barco-01.svg' : 'lifeline-avion-01.svg';
      break;
    default:
      return null;
  }

  return (
    <img src={`https://www.mclogs.com/assets/images/status_orders/${imageUrl}`} alt="Status" className="imageNow h-full" />
  );
};

const currentDate = new Date();
const etaDate = trackResult ? new Date(trackResult.ETA) : null;
const isAfterEta = etaDate && currentDate > etaDate;

const shouldShowIframe = trackResult && trackResult.Summary && !trackResult.Summary.some(
  summary => ["EnPuerto", "enpuerto", "En Puerto", "en puerto", "Liberado", "liberado", "Despachado", "despachado", "retornado", "Retornado"].includes(summary.Status) && new Date(summary.Date) <= currentDate
);

return (
  <div className='h-full w-full font-Encode-Sans pt-20'>
    <div className='relative flex flex-col px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 h-screen items-center justify-center overflow-hidden'>
      <video className="absolute z-[-10] inset-0 w-full h-full object-cover brightness-50" src="/Videos/Video2.mp4" loop autoPlay muted controls={false} onContextMenu={(e) => e.preventDefault()} playsInline ></video>
      <div className='w-full h-2/3 flex flex-col items-center justify-start'>
        <div className="w-full text-center pb-24">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-7xl font-bold text-white animate__animated animate__bounceInDown">{t("track")}</h1>
        </div>
        <div className="w-full backdrop-blur h-28 md:h-44 bg-white/40 rounded-lg items-center p-8 animate__animated animate__bounceInUp">
          <div className="w-full flex flex-row lg:flex-row xl:flex-row text-white gap-2 ">
            <div className='w-full relative'>
              <input
                type="text"
                id="track_search"
                value={inputValue}
                onChange={handleSearchChange}
                onKeyDown={handleEnter}
                className="h-12 w-full rounded-lg px-2 text-black bg-gray-100"
                placeholder={t("track_placeholder")}
              />
              {inputValue.length !== 0 && (
                <button
                  type="button"
                  id="track_button"
                  className="absolute right-0 top-0 p-2 md:w-24 lg:w-24 xl:w-24 rounded-md flex justify-center"
                  onClick={handleClearSearch}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            <button
              id="track_button"
              className="bg-light_blue hover:bg-blue p-2 w-12 md:w-24 lg:w-24 xl:w-24 rounded-md flex justify-center"
              onClick={handleButtonClick}
              disabled={inputValue.trim() === ''}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>

          </div>
          <div className="flex m-4">
            <div className="pr-2 hidden md:block lg:block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-white w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
            </div>
            <div className='hidden md:block lg:block'>
              <p className="text-xs sm:text-sm md:text-normal text-white">
                {t("track_guide")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {error && <div className="track_no_result_section h-screen flex items-center justify-center" ref={scrollRef}>
      <div>
        <h1 className='text-3xl sm:text-4xl md:text-4xl lg:text-7xl px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40'>{error}</h1>
        <div className='w-full flex items-center justify-center pt-16'>
          <button onClick={handleClearSearch} className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-slate-300 rounded hover:bg-white group py-1.5 px-2.5">
            <span className="w-56 h-48 rounded bg-oldgold absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-bluemunsell transition-colors duration-300 ease-in-out group-hover:text-white">Limpiar búsqueda</span>
          </button>
        </div>
      </div>
    </div>}

    {trackResult && (
      <div className="relative track_result_section px-10 sm:px-10 md:px-20 lg:px-30 xl:px-40 2xl:px-64 h-auto py-16 " ref={scrollRef}>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-10 pt-6' >
          <div className='flex flex-col  '>
            <div className='rounded-md border-2'>
              <div className="imagesContainer text-center mt-8  rounded-md">
                <div className='w-full h-24 flex justify-center py-4'>
                  {renderImages()}
                </div>
                <div className='text-center py-4'>
                  <h1 className="text-2xl font-semibold text-Estadoverde ">{trackResult.State && <p>{t(`state.${trackResult.State.toLowerCase().replace(/ /g, "_")}`)}</p>}</h1>
                </div>
              </div>
              <div className='px-4'>
                <hr />
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-2'>
                {/* Fecha de llegada/ETA */}
                <div className="flex flex-col items-center justify-center lg:border-r text-center h-28 w-full p-4 border-slate-200">
                  <div className=''>
                    {trackResult.ActivityPlace === "CAUCEDO" || isAfterEta ? (
                      <h1 className="font-semibold text-md xl:text-lg text-bluemunsell">{t("eta_past")} </h1>
                    ) : (
                      <h1 className="font-semibold text-md xl:text-lg text-bluemunsell">{t("eta_future")}:</h1>
                    )}
                  </div>
                  <div>
                    <p className='pl-2 text-md xl:text-lg font-bold text-gray-500'>{etaDate.toLocaleDateString('en-GB')}</p>
                  </div>
                </div>
                {/* Fecha de llegada/ETA fin */}

                <div className="flex flex-col md:flex-row items-center justify-center text-center h-28 w-full p-4">
                  <div className=''>
                    <p className=" font-semibold text-bluemunsell text-md xl:text-lg">{t("hbl_state")}:</p>
                  </div>
                  <div className="flex-non py-2">
                    {trackResult.TelexRelease === true ?
                      <img className="ml-4 h-24 w-30" src="/Icons/telexRelease_hbl.png" alt="TELEX RELEASE" />
                      :
                      <img className="ml-4 h-24 w-30" src="/Icons/copia_hbl.png" alt="COPIA BL" />
                    }
                  </div>
                </div>

              </div>
              {!shipFetchError && valid && shouldShowIframe && (
                <div className="relative flex flex-col items-center justify-center text-center h-[40rem] p-4  w-full">
                  <div className="w-full h-full">
                    <iframe
                      title="MarineTraffic"
                      width="100%"
                      height="100%"
                      scrolling="no"
                      frameBorder="0"
                      src={iframeSrc}
                      className="clicked rounded-md overflow-hidden"
                    >
                      Browser does not support embedded objects.<br />Visit directly <a href="http://www.marinetraffic.com/">www.marinetraffic.com</a>
                    </iframe>
                  </div>
                </div>
              )}
              <AnimatePresence>
                {shipFetchError && isVisible && shouldShowIframe && (
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    animate={{
                      scale: 1,
                    }}
                    exit={{
                      scale: 0,
                      transition: { duration: 1, ease: 'easeInOut' }
                    }}
                    transition={{
                      duration: 1,
                      ease: 'easeInOut'
                    }}
                    className="flex flex-col items-center justify-center text-center h-40 w-full p-4 gap-y-2 mt-4"
                  >
                    <h1 className="font-semibold text-white text-2xl bg-red-400 h-40 w-full text-center flex justify-center items-center rounded-md">
                      No se encontró registros de este barco
                    </h1>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          <div className='border-2 border-slate-200 rounded-md flex flex-col items-center'>
            <div className='pt-8 pb-2'>
              <h1 className='text-center text-2xl font-bold text-blue'>Historial</h1>

            </div>
            <div className='pb-8 w-full flex items-center justify-center'>
              <hr className='w-5/6 ' />
            </div>
            <div>
              {renderSummary()}
            </div>
          </div>
        </div>
        <div className='w-full flex items-center justify-center pt-16'>
          <button onClick={handleClearSearch} className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-slate-300 rounded hover:bg-white group py-1.5 px-2.5">
            <span className="w-56 h-48 rounded bg-oldgold absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-bluemunsell transition-colors duration-300 ease-in-out group-hover:text-white">{t("clean_search_btn")}</span>
          </button>
        </div>
      </div>
    )}
  </div>
);
}

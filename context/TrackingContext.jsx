'use client';
// context/TrackingContext.js
import { createContext, useState } from 'react';

export const TrackingContext = createContext();

export const TrackingProvider = ({ children }) => {
  const [trackSearch, setTrackSearch] = useState('');
  const [shipName, setShipName] = useState('');

  return (
    <TrackingContext.Provider value={{ trackSearch, setTrackSearch, shipName, setShipName }}>
      {children}
    </TrackingContext.Provider>
  );
};

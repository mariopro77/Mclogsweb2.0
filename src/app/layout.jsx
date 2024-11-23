import '../styles/globals.css';
import '../styles/slider.css';
import Providers from './Providers'; // Importamos el proveedor de cliente
import { TrackingProvider } from '../../context/TrackingContext';

export const metadata = {
  title: 'MCLogistics SRL',
};

export const viewport = 'width=device-width, initial-scale=1';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <TrackingProvider>
          <Providers>
            {children}
          </Providers>
        </TrackingProvider>
      </body>
    </html>
  );
}

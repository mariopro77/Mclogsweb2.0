import React from 'react';
import CompartirBoton from '../Components/BotonCompartir';


export default async function ArticulosPagina({ contenido }) {



  function formatDate(dateString) {
    const date = new Date(dateString);
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  }

  return (
    <div className='h-full w-full relative font-Encode-Sans pt-32 px-10 max-w-8xl overflow-hidden'>
      <div className='flex flex-col justify-center items-center pb-12 w-full'>
        <div className='w-full text-start'>
          <p className="text-sm text-slate-500">{contenido.type}</p>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className='w-full text-start'>
            <h1 className="text-md sm:text-md md:text-4xl lg:text-4xl font-semibold mb-2">{contenido.title}</h1>
          </div>
          <div className='flex flex-row justify-between py-4 w-full'>
            <div className='flex flex-col w-full'>
              <div>
                <p className="text-md text-slate-500">{formatDate(contenido.create_in)}</p>
              </div>
              <div className='flex flex-wrap gap-2 py-4'>
                {contenido.tags.split(',').map((tag, index) => (
                  <div key={index} className='rounded-full bg-slate-100 text-center px-4 py-1'>
                    <p className='text-sm'>{tag.trim()}</p>
                  </div>
                ))}
              </div>
            </div>
                <CompartirBoton contenido={contenido}/>
          </div>
          <div className='h-full w-full flex justify-center items-center'>
            <img className="relative h-[38rem] w-[100rem] mb-2 object-cover " src={`https://support.consilialogistics.com/public/${contenido.image}`} alt="" />
          </div>
          <p className="text-sm text-slate-500 mb-2">{contenido.subtitle}</p>
          <div className='h-auto w-full'>
            <p className="mt-5" style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: contenido.text }} />
            <p className="text-xl text-slate-500 pt-5">{contenido.author}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

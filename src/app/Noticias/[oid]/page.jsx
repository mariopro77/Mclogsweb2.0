// // app/[locale]/Noticias/[id]/page.jsx
// import { notFound } from 'next/navigation';
// import Articulo from '../../../Components/Articulo';

// // Move fetchNoticias outside so it can be used by both functions
// async function fetchNoticias() {
//   const res = await fetch("https://support.consilialogistics.com/mclogs/news?search=", {
//     cache: 'no-cache', // Avoid caching to get fresh data
//   });
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

// export async function generateMetadata({ params }) {
//   const { oid } = await params;

//   const noticias = await fetchNoticias();
//   const contenido = noticias.find((noticia) => noticia.oid === oid);

//   return {
//     title: contenido?.title || 'Default Title',
//     description: contenido?.subtitle || 'Default Description',
//   };
// }

// export default async function Page({ params }) {
//   const { oid } = await params;

//   const noticias = await fetchNoticias();
//   const contenido = noticias.find((noticia) => noticia.oid === oid);

//   if (!contenido) {
//     notFound(); // Redirect to 404 page if content not found
//   }

//   // Pass 'contenido' as a prop to the Articulo component
//   return <Articulo contenido={contenido} />;
// }


// app/[locale]/Noticias/[id]/page.jsx
import { notFound } from 'next/navigation';
import Articulo from '../../../Components/Articulo';

// Move fetchNoticias outside so it can be used by both functions
async function fetchNoticias() {
  const res = await fetch("https://support.consilialogistics.com/mclogs/news?search=", {
    cache: 'no-cache', // Avoid caching to get fresh data
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function generateMetadata({ params }) {
  const { oid } = params;

  const noticias = await fetchNoticias();
  const contenido = noticias.find((noticia) => noticia.oid === oid);

  // Default metadata if no content is found
  if (!contenido) {
    return {
      title: contenido?.title ,
      description: contenido?.description,
      openGraph: {
        title: contenido?.title,
        description: contenido?.description,
        url: `https://yourdomain.com/${params.locale}/Noticias/${oid}`,
        images: [
          {
            url: `https://support.consilialogistics.com/public/${contenido.image}` || 'favicon.ico',
            width: 300,
            height: 200,
            alt: 'Default Image',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Default Title',
        description: 'Default Description',
        images: [`https://support.consilialogistics.com/public/${contenido.image}`],
      },
    };
  }

  // Metadata for the specific content
  return {
    title: contenido.title,
    description: contenido.subtitle,
    openGraph: {
      title: contenido.title,
      description: contenido.subtitle,
      url: `https://yourdomain.com/${params.locale}/Noticias/${oid}`,
      images: [
        {
          url: `https://support.consilialogistics.com/public/${contenido.image}` || 'favicon.ico', // Ensure 'contenido.image' is valid
          width: 300,
          height: 200,
          alt: contenido.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: contenido.title,
      description: contenido.subtitle,
      images: [`https://support.consilialogistics.com/public/${contenido.image}` || 'favicon.ico'],
    },
  };
}

export default async function Page({ params }) {
  const { oid } = params;

  const noticias = await fetchNoticias();
  const contenido = noticias.find((noticia) => noticia.oid === oid);

  if (!contenido) {
    notFound(); // Redirect to 404 page if content not found
  }

  // Pass 'contenido' as a prop to the Articulo component
  return <Articulo contenido={contenido} />;
}


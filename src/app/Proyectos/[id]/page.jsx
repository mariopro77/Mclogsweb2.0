// app/[locale]/proyectos/[id]/page.js

import { serverTranslation } from '../../../../lib/serverTranslation';
import ProyectoPlantilla1 from '../../../Components/Proyecto_plantilla_1';
import proyectosdatos from '../../../Datos/Proyectosdatos';

export async function generateMetadata({ params }) {
  const { locale, id } = await params;
  const { t } = await serverTranslation(locale);

  const content = proyectosdatos.find(item => item.id === parseInt(id));

  return {
    title: t(content.title),
    description: t(content.paragraph1),
  };
}

export default async function Page({ params }) {
  const { locale, id } = await params;
  const { t } = await serverTranslation(locale);

  return <ProyectoPlantilla1 id={id} t={t} />;
}

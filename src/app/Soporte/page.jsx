'use client'

import dynamic from 'next/dynamic';

const FormsSoporte = dynamic(() => import('../../Components/FormsSoporte'), { ssr: false });

export default function Soporte() {
    return (
        <div className="h-auto w-full">
            <FormsSoporte />
        </div>
    );
}

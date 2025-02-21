'use client';

import { useState } from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';

const SolucionesHover = () => {
  const [hoverValue, setHoverValue] = useState<number>(0); // Valor por defecto: el primer índice

  const soluciones = [
    'Tratamiento de residuos orgánicos y restos de poda',
    'Tratamiento de residuos reciclables',
    'Tratamiento de residuos de gran tamaño',
    'Limpieza y sanitización',
    'Mantención de arbustos y arbolado',
    'Autonomía energética y sostenibilidad ambiental'
  ];

  const descripciones = [
    'Nada se pierde cuando se transforma en energía, fertilidad y desarrollo.',
    'Redefiniendo los desechos y transformando lo reciclable en oportunidades sostenibles.',
    'Gestión eficiente de grandes residuos con tecnología al servicio de la limpieza urbana.',
    'Limpieza profesional con tecnología móvil y versátil para cualquier necesidad.',
    'Cuidado del arbolado urbano para lograr equilibrio entre naturaleza y el urbanismo.',
    'Energía sostenible para ciudades más inteligentes, avanzando hacia la autosuficiencia.'
  ];

  return (
    <section className="mx-20 mb-10">
      <h2 className="text-2xl mb-5 tracking-widest">SOLUCIONES</h2>
      <div className="w-full flex justify-between">
        {/* Lista de soluciones */}
        <div className="w-3/6">
          {soluciones.map((solucion, index) => (
            <div
              key={index}
              className={`flex justify-between py-5 px-4 border-b border-slate-300
                ${hoverValue === index && 'bg-gray-300 '}`}
              onMouseEnter={() => setHoverValue(index)}
            >
              <h4 className="text-lg">{solucion}</h4>
              <HiArrowLongRight className="text-3xl" />
            </div>
          ))}
        </div>

        {/* Contenido dinámico basado en hoverValue */}
        <div className="w-3/6 pl-14 ">
          <div className="bg-gray-300 w-full h-full flex justify-center items-center p-10 ">
            <p className="text-white text-5xl font-bold">
              {descripciones[hoverValue]}
            </p>
          </div>
        </div>
      </div>

      {/* Botón */}
      <div className="flex justify-end mt-7">
        <button className="text-[#c4262e] flex items-center text-xl border border-[#c4262e] py-3 px-5 rounded-full hover:bg-[#b01c1c] hover:text-white hover:underline">
          VER TODOS <HiArrowLongRight className="ml-3" />
        </button>
      </div>
    </section>
  );
};

export default SolucionesHover;
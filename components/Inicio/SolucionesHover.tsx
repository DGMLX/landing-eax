'use client';

import Link from 'next/link';
import {  useState, useRef, useEffect  } from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';

const SolucionesHover = () => {
  const [hoverValue, setHoverValue] = useState<number>(0); // Valor por defecto: el primer índice
  const [solucionesVisible,setSolucionesVisible] = useState(false);
  const myRef = useRef<any | null>(null);

  useEffect(()=>{

    const observer = new IntersectionObserver((entries)=>{
      const entry = entries[0]
      setSolucionesVisible(entry.isIntersecting)

    })
   
  
    observer.observe(myRef.current)
  },[]);

  const soluciones = [
    'Tratamiento de residuos orgánicos y restos de poda',
    'Tratamiento de residuos reciclables',
    'Tratamiento de residuos de gran tamaño',
    'Limpieza y sanitización',
    'Mantención de arbustos y arbolado',
    'Autonomía energética y sostenibilidad ambiental'
  ];

  const descripciones = [
    'Transformando residuos en nuevas formas de energía y valor.',
    'Revalorizando los desechos y transformando lo reciclable en oportunidades sostenibles.',
    'Gestión eficiente de grandes residuos con tecnología al servicio de la limpieza urbana.',
    'Cuidando nuestros espacios con tecnología móvil y versátil para una limpieza eficiente.',
    'Conservando el equilibrio entre naturaleza y urbanismo con el cuidado del arbolado urbano.',
    'Avanzando hacia la independencia energética de forma sostenible.'
  ];

  const imagenes = [
    '/inicio/tratamiento_residuos_organicos.jpg',
    '/inicio/pellet.jpg',
    '/inicio/residuos_gran_tamanio.jpg',
    '/inicio/limpieza_sanitizacion.jpg',
    '/inicio/mantencion_arbustos.jpg',
    '/inicio/autonomia_energetica.webp'
  ]

  const urls = [
    "",
    "",
    "https://landing-eax.vercel.app/eliet",
    "https://ecoalliance.cl/solucion-limpieza-sanitizacion-desinfeccion-urbana/",
    "https://ecoalliance.cl/solucion-mantencion-de-arbustos-y-arbolado/",
    ""
  ]

  return (
    <section ref={myRef} className={`mx-5 md:mx-20 mb-10 transition-opacity duration-[1200ms] opacity-0 ${solucionesVisible && 'opacity-100'}`}>
      <h2 className="text-2xl mb-5 tracking-widest">SOLUCIONES</h2>
      <div className="w-full flex justify-between">
        {/* Lista de soluciones */}
        <div className="w-full lg:w-3/6">
          {soluciones.map((solucion, index) => (
            <div
              key={index}
              className={`flex justify-between py-5 px-4 border-b border-slate-300
                ${hoverValue === index && 'bg-gray-300 '}`}
              onMouseEnter={() => setHoverValue(index)}
            >
              <Link href={urls[index]} className="text-lg">{solucion}</Link>
              <HiArrowLongRight className="text-3xl" />
            </div>
          ))}
        </div>

        {/* Contenido dinámico basado en hoverValue */}
        <div className={`w-3/6 pl-14 hidden lg:block `}>
          <div className=" bg-black/20  w-full h-full flex justify-center items-center p-10 " style={{
            backgroundImage:imagenes[hoverValue] !== '' ? `url(${imagenes[hoverValue]})` : 'bg-gray-300',
            backgroundBlendMode:"darken",
            backgroundRepeat:"no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            
          }}>
            <p className="text-white lg:text-3xl lg:pr-24 xl:text-[44px] xl:leading-[44px] xl:pr-44 font-bold ">
              {descripciones[hoverValue]}
            </p>
          </div>
        </div>
      </div>

      {/* Botón */}
      <div className="flex justify-end mt-7">
        <Link href="https://ecoalliance.cl/soluciones/">
          <button className="text-[#c4262e] flex items-center text-xl border border-[#c4262e] py-3 px-5 rounded-full hover:bg-[#b01c1c] hover:text-white hover:underline">
            VER TODOS <HiArrowLongRight className="ml-3" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SolucionesHover;
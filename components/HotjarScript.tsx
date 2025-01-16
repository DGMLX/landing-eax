'use client'

import { useEffect } from 'react';
import Head from 'next/head';


const HotjarScript = () => {
  useEffect(() => {
    // Esto asegura que el script se cargue solo en el navegador
    (function(h:Window, o:Document, t:string, j:string ) {
      h.hj = h.hj || function() { (h.hj.q = h.hj.q || []).push(arguments) };
      h._hjSettings = { hjid: 5270142, hjsv: 6 };
      const a = o.getElementsByTagName('head')[0];
       if (a) {
        // Si a es válido (es decir, no es null), continuamos con la inserción del script
        const r:HTMLScriptElement = o.createElement('script');
        r.async = true;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r); // Insertamos el script en el <head>
      } else {
        // Si no se encuentra el <head>, mostramos un error en la consola
        console.error('No se encontró el elemento <head> en el documento.');
      }
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    
  }, []);

  return (
    <Head>
      <title>Mi Página</title>
      {/* Otras etiquetas <head> que puedas tener */}
    </Head>
  );
};

export default HotjarScript;
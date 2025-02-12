'use client'
import { textoCapitalizado } from "@/lib/helpers";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { BsGeoAltFill } from "react-icons/bs";
import { FaBloggerB, FaFacebookF, FaLinkedinIn, FaPhone, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { SiGmail } from "react-icons/si";



const FormularioHubspot = () => {

    const params = useParams()
    const modelo = params.modelo as string

    useEffect(() => {
      // Cargar el script de HubSpot
      const script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/embed/v2.js';
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
  
      script.onload = () => {
        // Una vez que el script se haya cargado, inicializar el formulario de HubSpot
        if (typeof window !== "undefined" && window.hbspt) {
          window.hbspt.forms.create({
            portalId: '6221998',
            formId: '81e23d44-e9d3-4008-8f0b-35e7747f8e74',
            target: '#hubspot-form', // Este es el id donde se mostrará el formulario
          });
        }
      };
  
      // Limpieza del script al desmontar el componente
      return () => {
        document.body.removeChild(script);
      };
    }, []);

  return (  
    <div className="mx-10 lg:mx-20 mb-10 flex justify-center border-r-2 md:border-r-0">
        <div id="hubspot-form" className="w-full md:w-2/5 p-10 border-t-2 border-l-2 border-b-2">
          {/* Aquí se cargará el formulario de HubSpot */}
        </div>

       
    
  
      <div className="hidden md:block p-5 pt-10  md:w-1/2 lg:w-3/5 bg-gradient-to-r from-white to-slate-400 border-t-2 border-b-2 border-r-2">
          <h3 className="hidden lg:block text-3xl">
          {
            modelo !== undefined ?  `¿Te interesa la  ${textoCapitalizado( modelo.replace(/-/g,' '))}?` : '¡Estamos aquí para ayudarte!'
          }
         </h3>
         <h3 className="hidden lg:block pb-10 text-3xl">Ponte en contacto con nosotros.</h3>
          <h3  className="pb-5 text-3xl lg:hidden text-center">¡Estamos aquí para ayudarte!</h3>
          <p className="text-sm lg:text-md text-center md:text-start">Utiliza nuestro formulario de contacto para cualquier consulta o, si prefieres, contáctanos directamente a través de la información que aparece a continuación.</p>

          <div className="block sm:flex md:block lg:flex mt-5 lg:mt-10">
              <div className="sm:w-1/2 md:w-full lg:w-1/2">
                  <h3 className="text-center sm:text-start text-md lg:text-xl font-bold lg:font-normal">Teléfono</h3>
                  <p className="justify-center sm:justify-start mt-2 lg:mt-5 flex"><FaPhone className="text-xl sm:text-2xl mr-3"/>+56-32-269-0691</p>
              </div>
              <div className="sm:w-1/2 md:w-full lg:w-1/2 mt-5 sm:mt-0">
                  <h3 className="text-center sm:text-start mt-0 md:mt-3 lg:mt-0 text-md lg:text-xl font-bold lg:font-normal">Ubicación</h3>
                  <p className="text-center sm:text-start justify-center sm:justify-start mt-2 lg:mt-5 flex text-sm lg:text-md"><BsGeoAltFill className="text-xl sm:text-4xl mr-3"/>Casa central: 1/2 oriente 831 oficina 408, Viña del mar, Chile</p>
              </div>
          </div>
          
          <div className="block sm:flex md:block mt-5 lg:flex lg:mt-10">
              <div className="sm:w-1/2">
                  <h3 className="text-center sm:text-start text-md lg:text-xl font-bold lg:font-normal">Correo</h3>
                  <p className="justify-center items-center sm:justify-start mt-2 lg:mt-5 flex underline"><IoMdMail className="text-xl sm:text-2xl mr-3"/>ventas@ecoalliance.cl</p>
              </div>
              <div className="sm:w-1/2 mt-5 sm:mt-0 md:mt-3 lg:mt-0 ">
                  <h3 className="text-center sm:text-start text-md lg:text-xl font-bold lg:font-normal">Redes sociales</h3>
                  <div className="flex justify-center sm:justify-start  mt-2 md:mt-5">
                      <a href=""> <SiGmail className="text-white mr-3 text-xl"/></a>
                      <a href="https://api.whatsapp.com/send?phone=56322690691&text=Hola!%20Solicito%20mas%20informacion%20de%20los%20siguientes%20productos:" target="_blank"> <FaWhatsapp className="text-white mr-3 text-xl"/></a>
                      <a href="https://ecoalliance.cl/blog/" target="_blank"> <FaBloggerB className="text-white mr-3 text-xl"/></a>
                      <a href="https://www.facebook.com/EcoAllianceEAX" target="_blank"> <FaFacebookF className="text-white mr-3 text-xl"/></a>
                      <a href="https://www.linkedin.com/company/ecoalliance-spa/" target="_blank"> <FaLinkedinIn className="text-white mr-3 text-xl"/></a>
                      <a href="https://www.youtube.com/channel/UCkNCjH3z4eyPPzgCBwveUZg" target="_blank"> <FaYoutube className="text-white text-xl"/></a>
                  </div>
              </div>
          </div>
          
          </div>
            {/* <div className="md:w-1/2 lg:w-2/6 hidden xl:block ">
                <Image src={urlImagen} alt="Contacta nuestros servicios" width={1000} height={1000} className="w-full h-full"/>
            </div> */}
          
    </div>
  );
};

export default FormularioHubspot;
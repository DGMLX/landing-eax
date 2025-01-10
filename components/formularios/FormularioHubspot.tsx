'use client'
import Image from "next/image";
import Script from "next/script";
import { BsGeoAltFill } from "react-icons/bs";
import { FaBloggerB, FaFacebookF, FaLinkedinIn, FaPhone, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { SiGmail } from "react-icons/si";

type Props = {
  urlImagen: string;
}
const FormularioHubspot:React.FC<Props> = ({urlImagen}) => {
  
  return (  
    <div className="mx-10 lg:mx-20 mb-10 flex justify-center">
      
      <Script
          src="https://js.hsforms.net/forms/embed/48703151.js"
          defer
          strategy="afterInteractive"
        />
      <div className="hs-form-frame w-full md:w-2/5 md:border-r" data-region="na1" data-form-id="4e8b21ba-1c39-4580-b0ce-4e11e73116f7" data-portal-id="48703151"></div>
  
      <div className="hidden md:block p-5 pt-10  md:w-1/2 lg:w-3/5 bg-gradient-to-r from-white to-slate-400">
          <h3 className="hidden lg:block pb-10 text-3xl">¡Estamos aquí para ayudarte! <br/>
          Ponte en contacto con nosotros.</h3>
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
                  <p className="justify-center items-center sm:justify-start mt-2 lg:mt-5 flex underline"><IoMdMail className="text-xl sm:text-2xl mr-3"/>Ventas@ecoalliance.cl</p>
              </div>
              <div className="sm:w-1/2 mt-5 sm:mt-0 md:mt-3 lg:mt-0 ">
                  <h3 className="text-center sm:text-start text-md lg:text-xl font-bold lg:font-normal">Redes sociales</h3>
                  <div className="flex justify-center sm:justify-start  mt-2 md:mt-5">
                      <a href=""> <SiGmail className="text-white mr-3 text-xl"/></a>
                      <a href=""> <FaWhatsapp className="text-white mr-3 text-xl"/></a>
                      <a href=""> <FaBloggerB className="text-white mr-3 text-xl"/></a>
                      <a href=""> <FaFacebookF className="text-white mr-3 text-xl"/></a>
                      <a href=""> <FaLinkedinIn className="text-white mr-3 text-xl"/></a>
                      <a href=""> <FaYoutube className="text-white text-xl"/></a>
                  </div>
              </div>
          </div>
          
          </div>
            <div className="md:w-1/2 lg:w-2/6 hidden xl:block ">
                <Image src={urlImagen} alt="Contacta nuestros servicios" width={1000} height={1000} className="w-full h-full"/>
            </div>
          
    </div>
  );
};

export default FormularioHubspot;
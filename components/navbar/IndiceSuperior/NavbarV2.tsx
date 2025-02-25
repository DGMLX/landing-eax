'use client'

import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { LuBookText } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";
import IndiceSuperior from "./IndiceSuperior";
import SubNavegacionProductosV2 from "./SubNavegacionProductosV2";
import SubNavegacionSolucionesV2 from "./SubNavegacionSolucionesV2";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // Puedes agregar más pesos
  display: "swap",
});


const NavbarV2 = () => {

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const [hoverSubProductos,setHoverSubProductos] = useState(false)
    const [hoverSubSoluciones,setHoverSubSoluciones] = useState(false)
    // SUB PRODUCTOS
    const [hoverMultiproposito,setHoverMultiproposito] = useState(false);
    const [hoverTratamientoResiduos,setHoverTratamientoResiduos] = useState(false);
    const [hoverAseoUrbano,setHoverAseoUrbano] = useState(false);
    const [hoverMantenimientoUrbano,setHoverMantenimientoUrbano] = useState(false);
    const [hoverEspaciosPublicos,setHoverEspaciosPublicos] = useState(false);
    // SUB SOLUCIONES
    const [hoverSolucionAseo,setHoverSolucionAseo] = useState(false);
    const [hoverSolucionMantenimiento,setHoverSolucionMantenimiento] = useState(false);
    // SUB CHIPEADORAS Y SUB CAMIONES
    const [hoverSubChipeadoras,setHoverSubChipeadoras] = useState(false);
    const [hoverSubCamiones,setHoverSubCamiones] = useState(false);


    const onHoverProducto = ()=> {
        setHoverSubProductos(true);
        setHoverSubSoluciones(false);
        setHoverSolucionAseo(false);
        setHoverSolucionMantenimiento(false);
    }

    const onHoverSoluciones = ()=> {
        setHoverSubProductos(false);
        setHoverSubSoluciones(true);
        setHoverMultiproposito(false);
        setHoverTratamientoResiduos(false);
        setHoverAseoUrbano(false);
        setHoverMantenimientoUrbano(false);
        setHoverEspaciosPublicos(false);
        setHoverSubChipeadoras(false);
        setHoverSubCamiones(false)
        setHoverSubChipeadoras(false);
        setHoverSubCamiones(false);
    }

    const onHoverNav = () =>{
        setHoverSubProductos(false);
        setHoverSubSoluciones(false);
        setHoverMultiproposito(false);
        setHoverTratamientoResiduos(false);
        setHoverAseoUrbano(false);
        setHoverMantenimientoUrbano(false);
        setHoverEspaciosPublicos(false);
        setHoverSubChipeadoras(false);
        setHoverSubCamiones(false)
        setHoverSubChipeadoras(false);
        setHoverSubCamiones(false);
    }

    useEffect(() => {
            const handleScroll = () => {
              if (window.scrollY > lastScrollY && window.scrollY > 100) {
                setIsVisible(false); // Oculta el menú al hacer scroll hacia abajo
              } else {
                setIsVisible(true); // Muestra el menú al hacer scroll hacia arriba
              }
              setLastScrollY(window.scrollY);
            };
        
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);    
          }, [lastScrollY]);

    return(
        <>
            <header className={`w-screen fixed top-0 z-40  transition-transform duration-300 ${openSans.className} ${
        isVisible ? "translate-y-0" : "-translate-y-16"}`}>
                <IndiceSuperior/>

                <div className="hidden lg:block">

                    <div className=" w-[3px] absolute  left-[130px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  left-[133px] h-[86.5px] bg-[#824624]"></div>
                    <div className=" w-[3px] absolute  left-[136px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  left-[139px] h-[86.5px] bg-[#824624]"></div>
                    <div className=" w-[3px] absolute  left-[142px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  left-[145px] h-[86.5px] bg-[#824624]"></div>
                    <div className=" w-[3px] absolute  left-[148px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  left-[151px] h-[86.5px] bg-[#824624]"></div>
                    <div className=" w-[3px] absolute  left-[154px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  left-[157px] h-[86.5px] bg-[#824624]"></div>
                    <div className=" w-[3px] absolute  left-[160px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  left-[163px] h-[86.5px] bg-[#824624]"></div>
                    <div className=" w-[3px] absolute  left-[166px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  left-[169px] h-[86.5px] bg-[#824624]"></div>
                    <div className=" w-[3px] absolute  left-[172px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  left-[175px] h-[86.5px] bg-[#824624]"></div>
                    <div className=" w-[3px] absolute  left-[178px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  left-[181px] h-[86.5px] bg-[#824624]"></div>
                    <div className=" w-[3px] absolute  left-[184px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  left-[187px] h-[86.5px] bg-[#824624]"></div>
                    <div className=" w-[3px] absolute  left-[190px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  left-[193px] h-[86.5px] bg-[#824624]"></div>
                    <div className=" w-[3px] absolute  left-[196px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  left-[199px] h-[86.5px] bg-[#824624]"></div>
                    <div className=" w-[3px] absolute  left-[202px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  left-[205px] h-[86.5px] bg-[#824624]"></div>
                    <div className=" w-[3px] absolute  left-[208px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  left-[211px] h-[86.5px] bg-[#824624]"></div>
                </div>

                
                <div className="hidden lg:block ">

                    <div className=" w-[3px] absolute  right-[17px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  right-[20px] h-[86.5px] bg-[#824624]"></div>
                    <div className=" w-[3px] absolute  right-[23px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  right-[26px] h-[86.5px] bg-[#824624]"></div>
                    <div className=" w-[3px] absolute  right-[29px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  right-[32px] h-[86.5px] bg-[#824624]"></div>
                    <div className=" w-[3px] absolute  right-[35px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  right-[38px] h-[86.5px] bg-[#824624]"></div>
                    <div className=" w-[3px] absolute  right-[41px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  right-[44px] h-[86.5px] bg-[#824624]"></div>
                    <div className=" w-[3px] absolute  right-[47px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  right-[50px] h-[86.5px] bg-[#824624]"></div>
                    <div className=" w-[3px] absolute  right-[53px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  right-[56px] h-[86.5px] bg-[#824624]"></div>
                    <div className=" w-[3px] absolute  right-[59px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  right-[62px] h-[86.5px] bg-[#824624]"></div>
                    <div className=" w-[3px] absolute  right-[65px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  right-[68px] h-[86.5px] bg-[#824624]"></div>
                    <div className=" w-[3px] absolute  right-[71px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  right-[74px] h-[86.5px] bg-[#824624]"></div>
                    <div className=" w-[3px] absolute  right-[77px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  right-[80px] h-[86.5px] bg-[#824624]"></div>
                    <div className=" w-[3px] absolute  right-[83px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  right-[86px] h-[86.5px] bg-[#824624]"></div>
                    <div className=" w-[3px] absolute  right-[89px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  right-[92px] h-[86.5px] bg-[#824624]"></div>
                    <div className=" w-[3px] absolute  right-[95px] h-[86.5px] bg-[#8F5434]"></div>
                    <div className=" w-[3px] absolute  right-[98px] h-[86.5px] bg-[#824624]"></div>

                </div>

                <div className="hidden lg:flex lg:bg-[#303030] py-6 px-5 h-[87px]  items-center justify-between z-40">
                    <nav className="flex">
                        <a href="https://ecoalliance.cl/"><Image src="/logos_generales/eax.png" width={80} height={80} alt="Logo EAX" className="lg:mr-10 xl:mr-[104px] w-[96px] h-[39px]"/></a>
                        <ul className="flex items-center">
                        
                            <li onMouseEnter={()=>onHoverNav()} >
                                <a href="https://ecoalliance.cl/" className="text-white text-sm mr-5 ">INICIO</a>
                            </li>
                            <li onMouseEnter={()=>onHoverProducto()}>
                                <a href="https://ecoalliance.cl/productos/" className="text-white text-sm mr-5 flex mt-1">PRODUCTOS <IoMdArrowDropdown className="ml-1 text-lg text-white"/></a>
                            </li>
                            <li onMouseEnter={()=>onHoverSoluciones()}>
                                <a href="https://ecoalliance.cl/soluciones/" className="text-white text-sm mr-5 flex mt-1">SOLUCIONES <IoMdArrowDropdown className="ml-1 text-lg text-white"/></a>
                            </li>
                            <li onMouseEnter={()=>onHoverNav()}>
                                <a href="https://ecoalliance.cl/servicios/" className="text-white text-sm mr-5">SERVICIOS</a>
                            </li>
                            <li onMouseEnter={()=>onHoverNav()}>
                                <a href="https://ecoalliance.cl/acerca-de-eax/" className="text-white text-sm mr-5">ACERCA DE EAX</a>
                            </li>
                            <li onMouseEnter={()=>onHoverNav()}>
                                <a href="https://ecoalliance.cl/contacto/" className="text-white text-sm mr-5">CONTACTO</a>
                            </li>
                        
                        </ul>
                    </nav>
                    <div className="flex z-40">
                        <a href="https://ecoalliance.cl/contacto/"><IoMdMail className=" text-white text-lg mr-5" /></a>
                        <a href="https://api.whatsapp.com/send?phone=56322690691&text=Hola!%20Solicito%20mas%20informacion%20de%20los%20siguientes%20productos:" target="_blank"><FaWhatsapp className="text-white text-lg mr-5"/>
                        </a>
                        <a href="https://www.facebook.com/EcoAllianceEAX" target="_blank"><FaFacebook className="text-white text-lg mr-5"/></a>
                        <a href="https://www.youtube.com/channel/UCkNCjH3z4eyPPzgCBwveUZg" target="_blank"><FaYoutube className="text-white text-lg mr-5"/></a>
                        
                                
                        <a href="https://ecoalliance.cl/blog/" target="_blank"><LuBookText className="text-white text-lg mr-5"/></a>
                        <a href="https://www.linkedin.com/company/ecoalliance-spa/" target="_blank"><FaLinkedin className="text-white text-lg mr-5"/></a>
                        <a href="https://www.instagram.com/ecoalliancespa_chile/" target="_blank"><FaInstagram className="text-white text-lg mr-4"/></a>

                    
                        
                    </div>
                </div>
            </header>

            <SubNavegacionProductosV2 isVisible={isVisible} hoverSubProductos={hoverSubProductos} setHoverSubProductos={setHoverSubProductos} hoverMultiproposito={hoverMultiproposito} hoverTratamientoResiduos={hoverTratamientoResiduos} hoverAseoUrbano={hoverAseoUrbano} hoverMantenimientoUrbano={hoverMantenimientoUrbano} hoverEspaciosPublicos={hoverEspaciosPublicos} setHoverMultiproposito={setHoverMultiproposito} setHoverTratamientoResiduos={setHoverTratamientoResiduos} setHoverAseoUrbano={setHoverAseoUrbano} setHoverMantenimientoUrbano={setHoverMantenimientoUrbano} setHoverEspaciosPublicos={setHoverEspaciosPublicos} hoverSubChipeadoras={hoverSubChipeadoras} hoverSubCamiones={hoverSubCamiones} setHoverSubChipeadoras={setHoverSubChipeadoras} setHoverSubCamiones={setHoverSubCamiones} />

            <SubNavegacionSolucionesV2 isVisible={isVisible}  hoverSubSoluciones={hoverSubSoluciones} setHoverSubSoluciones={setHoverSubSoluciones} hoverSolucionAseo={hoverSolucionAseo} hoverSolucionMantenimiento={hoverSolucionMantenimiento} setHoverSolucionAseo={setHoverSolucionAseo} setHoverSolucionMantenimiento={setHoverSolucionMantenimiento}/>


        </>
    )
}

export default NavbarV2;
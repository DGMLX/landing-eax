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
import { useState } from "react";
import { SubNavegacionProductos } from "./SubNavegacionProductos";
import SubNavegacionSoluciones from "./SubNavegacionSoluciones";

const Navbar = () => {

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

    return(
        <>
            <header className="hidden lg:flex lg:bg-[#303030]  py-6 px-5  items-center justify-between w-screen fixed top-0">
                
                <nav className="flex">
                    <a href="https://ecoalliance.cl/"><Image src="/logos_generales/eax.png" width={80} height={80} alt="Logo EAX" className="lg:mr-10 xl:mr-[104px]"/></a>
                    <ul className="flex items-center">
                        <li >
                            <a href="https://ecoalliance.cl/" className="text-white text-xs mr-5 ">INICIO</a>
                        </li>
                        <li onMouseEnter={()=>onHoverProducto()}>
                            <a href="https://ecoalliance.cl/productos/" className="text-white text-xs mr-5 flex mt-1">PRODUCTOS <IoMdArrowDropdown className="ml-1 text-lg text-white"/></a>
                        </li>
                        <li onMouseEnter={()=>onHoverSoluciones()}>
                            <a href="https://ecoalliance.cl/soluciones/" className="text-white text-xs mr-5 flex mt-1">SOLUCIONES <IoMdArrowDropdown className="ml-1 text-lg text-white"/></a>
                        </li>
                        <li>
                            <a href="https://ecoalliance.cl/servicios/" className="text-white text-xs mr-5">SERVICIOS</a>
                        </li>
                        <li>
                            <a href="https://ecoalliance.cl/acerca-de-eax/" className="text-white text-xs mr-5">ACERCA DE EAX</a>
                        </li>
                        <li>
                            <a href="https://ecoalliance.cl/contacto/" className="text-white text-xs mr-5">CONTACTO</a>
                        </li>
                    </ul>
                </nav>
                <div className="flex ">
                    <a href="https://ecoalliance.cl/contacto/"><IoMdMail className=" text-white text-lg mr-5" /></a>
                    <a href="https://api.whatsapp.com/send?phone=56322690691&text=Hola!%20Solicito%20mas%20informacion%20de%20los%20siguientes%20productos:" target="_blank"><FaWhatsapp className="text-white text-lg mr-5"/>
                    </a>
                    <a href="https://www.facebook.com/EcoAllianceEAX" target="_blank"><FaFacebook className="text-white text-lg mr-5"/></a>
                    <a href="https://www.youtube.com/channel/UCkNCjH3z4eyPPzgCBwveUZg" target="_blank"><FaYoutube className="text-white text-lg mr-5"/></a>
                    <a href="https://ecoalliance.cl/blog/" target="_blank"><LuBookText className="text-white text-lg mr-5"/></a>
                    <a href="https://www.linkedin.com/company/ecoalliance-spa/" target="_blank"><FaLinkedin className="text-white text-lg mr-5"/></a>
                    <a href="https://www.instagram.com/ecoalliancespa_chile/" target="_blank"><FaInstagram className="text-white text-lg mr-4"/></a>
                </div>

            </header>

            <SubNavegacionProductos hoverSubProductos={hoverSubProductos} setHoverSubProductos={setHoverSubProductos} hoverMultiproposito={hoverMultiproposito} hoverTratamientoResiduos={hoverTratamientoResiduos} hoverAseoUrbano={hoverAseoUrbano} hoverMantenimientoUrbano={hoverMantenimientoUrbano} hoverEspaciosPublicos={hoverEspaciosPublicos} setHoverMultiproposito={setHoverMultiproposito} setHoverTratamientoResiduos={setHoverTratamientoResiduos} setHoverAseoUrbano={setHoverAseoUrbano} setHoverMantenimientoUrbano={setHoverMantenimientoUrbano} setHoverEspaciosPublicos={setHoverEspaciosPublicos} hoverSubChipeadoras={hoverSubChipeadoras} hoverSubCamiones={hoverSubCamiones} setHoverSubChipeadoras={setHoverSubChipeadoras} setHoverSubCamiones={setHoverSubCamiones} />

            <SubNavegacionSoluciones  hoverSubSoluciones={hoverSubSoluciones} setHoverSubSoluciones={setHoverSubSoluciones} hoverSolucionAseo={hoverSolucionAseo} hoverSolucionMantenimiento={hoverSolucionMantenimiento} setHoverSolucionAseo={setHoverSolucionAseo} setHoverSolucionMantenimiento={setHoverSolucionMantenimiento}/>


        </>
    )
}

export default Navbar;
'use client'

import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { LuBookText } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const NavbarMovil = () =>{

    const [openNavbar,setOpenNavbar] = useState(false);
    const [openSubProductos,setOpenSubProductos] = useState(false);
    const [openSubSoluciones,setOpenSubSoluciones] = useState(false);
    const [openSubMultiproposito,setOpenSubMultiproposito] = useState(false);
    const [openSubTratamientoResiduos,setOpenSubTratamientoResiduos] = useState(false);
    const [openSubAseoUrbano,setOpenSubAseoUrbano] = useState(false);
    const [openSubMantenimientoUrbano,setOpenSubMantenimientoUrbano] = useState(false);
    const [openSubEspaciosPublicos,setOpenSubEspaciosPublicos] = useState(false);


    const cerrarNavMovil = () => {
        setOpenNavbar(!openNavbar)
        setOpenSubProductos(false)
        setOpenSubSoluciones(false)
        setOpenSubMultiproposito(false)
        setOpenSubTratamientoResiduos(false)
        setOpenSubAseoUrbano(false)
        setOpenSubMantenimientoUrbano(false)
        setOpenSubEspaciosPublicos(false)
    }

    return(
        <header className=" lg:hidden items-center justify-between w-screen fixed top-0">
            <div className="flex items-center justify-between w-full  bg-[#303030]  py-6 px-5">

                {
                    openNavbar ? 
                        <IoMdClose className="text-white text-3xl" onClick={()=>cerrarNavMovil()}/>
                        :
                        <GiHamburgerMenu className="text-white text-3xl" onClick={()=>setOpenNavbar(!openNavbar)}/>
                }
                   
                
                
                
                
                <a href="https://ecoalliance.cl/"><Image src="/logos_generales/eax.png" width={80} height={80} alt="Logo EAX" className="mr-10 xl:mr-[104px] "/></a>
                
             
                <div className="hidden sm:flex">
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

            {/* **************************************************************************************** */}


            <nav className={`bg-black ${openNavbar ? 'block' : 'hidden'}`}>
                <a href="https://ecoalliance.cl/" className="text-white text-center py-3 block text-xs border-b border-slate-500">INICIO</a>
                <p onClick={()=>setOpenSubProductos(!openSubProductos)} className="text-white text-center py-3  justify-center text-xs border-b border-slate-500 flex items-center">PRODUCTOS  <IoMdArrowDropdown className="ml-2 text-xl" /></p>
                {
                    openSubProductos &&
                        <>
                            <p onClick={()=>setOpenSubMultiproposito(!openSubMultiproposito)} className="text-white text-center py-3  justify-center text-xs border-b border-slate-500 flex items-center">MULTIPROPÓSITO<IoMdArrowDropdown className="ml-2 text-xl" /></p>

                            {
                                openSubMultiproposito &&  
                                <a href="https://ecoalliance.cl/productos/" className="text-white text-center py-3  justify-center text-xs border-b border-slate-500 flex items-center">CAMIÓN MULTIPROPÓSITO<IoMdArrowDropdown className="ml-2 text-xl" /></a>

                            }

                            <p onClick={()=>setOpenSubTratamientoResiduos(!openSubTratamientoResiduos)} className="text-white text-center py-3  justify-center text-xs border-b border-slate-500 flex items-center">TRATAMIENTO DE RESIDUOS<IoMdArrowDropdown className="ml-2 text-xl" /></p>
                            {
                                openSubTratamientoResiduos && 
                                <>
                                    <a href="https://ecoalliance.cl/productos/" className="text-white text-center py-3  justify-center text-xs border-b border-slate-500 flex items-center">CHIPEADORAS<IoMdArrowDropdown className="ml-2 text-xl" /></a>
                                    <a href="https://ecoalliance.cl/briquetadoras/" className="text-white text-center py-3  justify-center text-xs border-b border-slate-500 flex items-center">BRIQUETADORAS</a>
                                    <a href="https://ecoalliance.cl/productos/" className="text-white text-center py-3  justify-center text-xs border-b border-slate-500 flex items-center">TRITURADORAS</a>
                                    <a href="https://ecoalliance.cl/productos/" className="text-white text-center py-3  justify-center text-xs border-b border-slate-500 flex items-center">CRIBAS</a>
                                    <a href="https://ecoalliance.cl/productos/" className="text-white text-center py-3  justify-center text-xs border-b border-slate-500 flex items-center">COMPOST</a>
                                </>
                            }


                            <p onClick={()=>setOpenSubAseoUrbano(!openSubAseoUrbano)} className="text-white text-center py-3  justify-center text-xs border-b border-slate-500 flex items-center">ASEO URBANO<IoMdArrowDropdown className="ml-2 text-xl" /></p>


                            {
                                openSubAseoUrbano &&
                                <>
                                    <a href="https://ecoalliance.cl/productos/" className="text-white text-center py-3  justify-center text-xs border-b border-slate-500 flex items-center">BARREDORAS DE CALLE</a>
                                    <a href="https://ecoalliance.cl/productos/" className="text-white text-center py-3  justify-center text-xs border-b border-slate-500 flex items-center">CONTENEDORES CAMPANA</a>
                                    <a href="https://ecoalliance.cl/productos/" className="text-white text-center py-3  justify-center text-xs border-b border-slate-500 flex items-center">CONTENEDORES METÁLICOS</a>
                                </>
                            }


                            <p onClick={()=>setOpenSubMantenimientoUrbano(!openSubMantenimientoUrbano)} className="text-white text-center py-3  justify-center text-xs border-b border-slate-500 flex items-center">MANTENIMIENTO URBANO<IoMdArrowDropdown className="ml-2 text-xl" /></p>
                            {
                                openSubMantenimientoUrbano && 
                                <>
                                    <a href="https://ecoalliance.cl/productos/" className="text-white text-center py-3  justify-center text-xs border-b border-slate-500 flex items-center">HIDROELEVADOR</a>
                                    <a href="https://ecoalliance.cl/productos/" className="text-white text-center py-3  justify-center text-xs border-b border-slate-500 flex items-center">BACHEADORAS</a>
                                    <a href="https://ecoalliance.cl/productos/" className="text-white text-center py-3  justify-center text-xs border-b border-slate-500 flex items-center">AMPLIROLL</a>
                                </>
                            }
                            
                            <p onClick={()=>setOpenSubEspaciosPublicos(!openSubEspaciosPublicos)} className="text-white text-center py-3  justify-center text-xs border-b border-slate-500 flex items-center">ESPACIOS PUBLICOS<IoMdArrowDropdown className="ml-2 text-xl" /></p>
                            {
                                openSubEspaciosPublicos &&
                                <a href="https://ecoalliance.cl/productos/" className="text-white text-center py-3  justify-center text-xs border-b border-slate-500 flex items-center">BASUREROS PÚBLICOS</a>
                            }
                        </>
                }
                <p onClick={()=>setOpenSubSoluciones(!openSubSoluciones)} className="text-white text-center py-3 flex justify-center text-xs border-b border-slate-500">SOLUCIONES <IoMdArrowDropdown className="ml-2 text-xl" /></p>
                {
                    openSubSoluciones && 
                        <>
                            <a href="https://ecoalliance.cl/productos/" className="text-white text-center py-3  justify-center text-xs border-b border-slate-500 flex items-center">SOLUCIONES MULTIPROPÓSITO<IoMdArrowDropdown className="ml-2 text-xl" /></a>
                            <a href="https://ecoalliance.cl/productos/" className="text-white text-center py-3  justify-center text-xs border-b border-slate-500 flex items-center">TRATAMIENTO DE RESIDUOS<IoMdArrowDropdown className="ml-2 text-xl" /></a> 
                            <a href="https://ecoalliance.cl/productos/" className="text-white text-center py-3  justify-center text-xs border-b border-slate-500 flex items-center">ASEO URBANO<IoMdArrowDropdown className="ml-2 text-xl" /></a>
                            <a href="https://ecoalliance.cl/productos/" className="text-white text-center py-3  justify-center text-xs border-b border-slate-500 flex items-center">MANTENIMIENTO URBANO<IoMdArrowDropdown className="ml-2 text-xl" /></a>
                            <a href="https://ecoalliance.cl/productos/" className="text-white text-center py-3  justify-center text-xs border-b border-slate-500 flex items-center">ESPACIOS PÚBLICOS<IoMdArrowDropdown className="ml-2 text-xl" /></a>
                        </>
                }
                
                <a href="https://ecoalliance.cl/" className="text-white text-center py-3 block text-xs border-b border-slate-500">SERVICIOS</a>
                <a href="https://ecoalliance.cl/" className="text-white text-center py-3 block text-xs border-b border-slate-500">ACERCA DE EAX</a>
                <a href="https://ecoalliance.cl/" className="text-white text-center py-3 block text-xs">CONTACTO</a>
                
            </nav>

        </header>
    )
}

export default NavbarMovil;
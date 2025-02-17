'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const NavbarMovilActualizada = () =>{

    const [openNavbar,setOpenNavbar] = useState(false);
    const [openNavbarProductos,setOpenNavbarProductos] = useState(false);
    const [openNavbarSoluciones,setOpenNavbarSoluciones] = useState(false);

    const cerrarMenu = () =>{
        setOpenNavbarProductos(false)
        setOpenNavbarSoluciones(false)
        setOpenNavbar(false)
    }



    return(
        <>
            <header className=" lg:hidden items-center justify-between w-screen  top-0 z-50 fixed">
                <div className="flex items-center justify-between w-full  bg-[#303030]  py-6 px-5">
                    <GiHamburgerMenu className="text-white text-3xl" onClick={()=>setOpenNavbar(!openNavbar)}/>
                    <a href="https://ecoalliance.cl/"><Image src="/logos_generales/eax.png" width={80} height={80} alt="Logo EAX" className="mr-10 xl:mr-[104px] "/></a>
                </div>
               
                <nav className={` pt-6 pb-48 bg-[#313131] text-[#FBFBFB] top-0 z-50 w-[218px] absolute rounded-tr-xl rounded-br-xl h-auto ${openNavbar ? 'block' : 'hidden'}`}>
                    <div className="flex justify-between px-5">
                        <IoIosArrowBack onClick={()=>{
                            setOpenNavbarProductos(false)
                            setOpenNavbarSoluciones(false)
                        }} className={`text-[#FBFBFB] text-xl ${openNavbarProductos || openNavbarSoluciones ? 'block' : 'hidden'}`}/>
                        <Image src="/LOGO-EAX.png" alt="Logotipo EAX" width={50} height={50} className={`${openNavbarProductos || openNavbarSoluciones ? 'mx-0' : 'ml-[62px]'  }`}/>
                        <IoMdClose className="text-[#FBFBFB] text-2xl" onClick={()=>cerrarMenu()}/>
                    </div>
                    <div className="pl-7">
                        {
                            openNavbarProductos === false && openNavbarSoluciones === false &&
                            <>
                                <button onClick={()=>{
                                    setOpenNavbarProductos(true)
                                    setOpenNavbarSoluciones(false)
                                }} 
                                className="flex items-center text-[16px] mt-16">Productos<IoIosArrowForward className="text-xl ml-1"/></button>

                                <button onClick={()=>{
                                    setOpenNavbarSoluciones(true)
                                    setOpenNavbarProductos(false)
                                }}
                                
                                className="flex items-center text-[16px]    mt-10">Soluciones<IoIosArrowForward className="text-xl ml-1" /></button>
                                <h3 className="text-[16px] mt-10">Servicios</h3>
                                <h3 className="text-[16px] mt-10">Contacto</h3>
                                <h3 className="text-[16px] mt-10">Acerca de EAX</h3>
                            </>
                        }
                        {
                            openNavbarProductos && openNavbarSoluciones == false &&
                            <>
                                
                                <h3 className="text-[16px] mt-10">Productos</h3>

                                <h3 className="text-[14px] mt-10 opacity-70">Multipropósito</h3>
                                    <p className="text-[12px] opacity-70 mt-3 hidden md:block">Camiones multipropósito</p>
                                    <p className="text-[12px] opacity-70 mt-3 hidden md:block">Accesorios multipropósito</p>

                                <h3 className="text-[14px] mt-10 opacity-70">Mantenimiento urbano</h3>
                                    <p className="text-[12px] opacity-70 mt-3 hidden md:block">Hidroelevador</p>
                                    <p className="text-[12px] opacity-70 mt-3 hidden md:block">Bacheadoras</p>
                                    <p className="text-[12px] opacity-70 mt-3 hidden md:block">Ampliroll</p>

                                <h3 className="text-[14px] mt-10 opacity-70">Tratamiento de residuos</h3>
                                    <p className="text-[12px] opacity-70 mt-3 hidden md:block">Chipeadoras</p>
                                    <p className="text-[12px] opacity-70 mt-3 hidden md:block">Briquetadoras</p>
                                    <p className="text-[12px] opacity-70 mt-3 hidden md:block">Trituradora</p>
                                    <p className="text-[12px] opacity-70 mt-3 hidden md:block">Cribas</p>
                                    <p className="text-[12px] opacity-70 mt-3 hidden md:block">Compost</p>
                                    
                                <h3 className="text-[14px] mt-10 opacity-70">Aseo urbano</h3>
                                    <p className="text-[12px] opacity-70 mt-3 hidden md:block">Barredoras de calle</p>
                                    <p className="text-[12px] opacity-70 mt-3 hidden md:block">Contenedores campana</p>
                                    <p className="text-[12px] opacity-70 mt-3 hidden md:block">Contenedores metálicos</p>

                                <h3 className="text-[14px] mt-10 opacity-70">Espacios públicos</h3>
                                    <p className="text-[12px] opacity-70 mt-3 hidden md:block">Basureros urbanos</p>
                            </>
                        }

                        {
                            openNavbarSoluciones && openNavbarProductos == false &&
                            <>  
                                <h3 className="text-[16px] mt-10">Soluciones</h3>
                                <h3 className="text-[14px] mt-10 opacity-70">Tratamiento de residuos</h3>
                                    <p className="text-[12px] opacity-70 mt-3 hidden md:block">Planta de compostaje</p>
                                    <p className="text-[12px] opacity-70 mt-3 hidden md:block">Planta de briquetas</p>
                                    <p className="text-[12px] opacity-70 mt-3 hidden md:block">Planta de mulch</p>
                                    <p className="text-[12px] opacity-70 mt-3 hidden md:block">Planta de pellet</p>
                                    <p className="text-[12px] opacity-70 mt-3 hidden md:block">Ver todo</p>
                                <h3 className="text-[14px] mt-10 opacity-70">Mantenimiento urbano</h3>
                                    <p className="text-[12px] opacity-70 mt-3 hidden md:block">Hidroelevador</p>
                                    <p className="text-[12px] opacity-70 mt-3 hidden md:block">Bacheadoras</p>
                                    <p className="text-[12px] opacity-70 mt-3 hidden md:block">Ampliroll</p>
                                <h3 className="text-[14px] mt-10 opacity-70">Aseo urbano</h3>
                                <h3 className="text-[14px] mt-10 opacity-70">Espacios públicos</h3>
                                    <p className="text-[12px] opacity-70 mt-3 hidden md:block">Limpieza, sanitización y desinfección urbana</p>
                                

                            </>
                        }
                    </div>
                </nav>
                

            
            
            </header>
        </>
    )
}


export default NavbarMovilActualizada
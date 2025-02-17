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



    return(
        <>
            <header className=" lg:hidden items-center justify-between w-screen  top-0 z-40 fixed">
                <div className="flex items-center justify-between w-full  bg-[#303030]  py-6 px-5">
                    <GiHamburgerMenu className="text-white text-3xl" onClick={()=>setOpenNavbar(!openNavbar)}/>
                </div>
               
                <nav className={` pt-6 pb-48 bg-[#313131] text-[#FBFBFB] top-0 z-50 w-[218px] absolute rounded-tr-xl rounded-br-xl ${openNavbar ? 'block' : 'hidden'}`}>
                    <div className="flex justify-between px-5">
                        <IoIosArrowBack className="text-[#FBFBFB] text-xl hidden"/>
                        <Image src="/LOGO-EAX.png" alt="Logotipo EAX" width={50} height={50} className="ml-16"/>
                        <IoMdClose className="text-[#FBFBFB] text-2xl" onClick={()=>setOpenNavbar(false)}/>
                    </div>
                    <div className="pl-7">
                        {
                            openNavbarProductos === false && openNavbarSoluciones === false ?
                            <>
                                <button onClick={()=>setOpenNavbarProductos(true)} className="flex items-center text-[16px] mt-10">Productos<IoIosArrowForward className="text-xl ml-1"/></button>
                                <button onClick={()=>setOpenNavbarSoluciones(true)} className="flex items-center text-[16px]    mt-10">Soluciones<IoIosArrowForward className="text-xl ml-1" /></button>
                                <h3 className="text-[16px] mt-10">Servicios</h3>
                                <h3 className="text-[16px] mt-10">Contacto</h3>
                                <h3 className="text-[16px] mt-10">Acerca de EAX</h3>
                            </>
                            :
                            ''
                        }
                    </div>
                </nav>
                

            
            
            </header>
        </>
    )
}


export default NavbarMovilActualizada
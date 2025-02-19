import Image from "next/image";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const NavbarActualizada = () =>{
    return(
        <>
         <header className="hidden lg:flex lg:bg-[#303030]  py-6 px-5  items-center justify-between w-screen fixed top-0 z-50">
                        
            <nav className="flex items-center justify-between w-full lg:mx-2 xl:mx-20">
                <a href="https://ecoalliance.cl/"><Image src="/logos_generales/eax.png" width={80} height={80} alt="Logo EAX" className=" w-auto"/></a>
                <ul className="flex items-center justify-between">
                  
                    <li >
                        <a href="https://ecoalliance.cl/productos/" className="text-white text-xs mr-5 flex mt-1">PRODUCTOS <IoIosArrowDown  className="ml-1 text-lg text-white"/></a>
                    </li>
                    <li >
                        <a href="https://ecoalliance.cl/soluciones/" className="text-white text-xs mr-5 flex mt-1">SOLUCIONES <IoIosArrowDown  className="ml-1 text-lg text-white"/></a>
                    </li>
                    <li >
                        <a href="https://ecoalliance.cl/servicios/" className="text-white text-xs mr-5">SERVICIOS</a>
                    </li>
                  
                    <li>
                        <a href="https://ecoalliance.cl/contacto/" className="text-white text-xs mr-5">CONTACTO</a>
                    </li>

                    <li>
                        <a href="https://ecoalliance.cl/acerca-de-eax/" className="text-white text-xs mr-5">ACERCA DE EAX</a>
                    </li>
                    
                </ul>
                <div className="w-2/6 flex items-center">

                    <input type="text" className="rounded-tl-full rounded-bl-full w-full py-1 px-4" placeholder="Buscar"/>
                    <div className="bg-white py-[6px] pr-2 rounded-tr-full rounded-br-full">
                        <IoSearchSharp className="text-black text-xl"/>

                    </div>
                </div>
                
            </nav>
        </header>
        </>
    )
}

export default NavbarActualizada;
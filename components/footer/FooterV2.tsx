import Image from "next/image"
import { FaPhoneAlt,FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io"
import { BsGeoAltFill } from "react-icons/bs"
export const FooterV2 = () =>{
    return(
        <footer className="bg-[#1E1E1E]">
            <div className=" justify-center flex-col md:flex-row hidden md:flex">
               <div className="text-[#D9D9D9] mt-10">
                    <h3 className="mb-5 text-xl font-bold">Enlaces</h3>
                    <p className="mb-5 ">Inicio</p>
                    <p className="mb-5 ">Soluciones</p>
                    <p className="mb-5 ">Productos</p>
                    <p className="mb-5 ">Acerca de EAX</p>
                    <p className="mb-5 ">Blog</p>
                    <p className="mb-5 ">Tienda</p>
                </div>
               <div className="text-[#D9D9D9] xl:mr-32 xl:ml-32 mt-10">
                    <h3 className="mb-5 text-xl font-bold text-justify">Contáctanos</h3>
                    <p className="mb-5 flex "><BsGeoAltFill className="text-xl mr-4"/>Casa central: 1/2 oriente 831, oficina 408, <br />Viña del mar, Chile</p>
                    <p className="mb-5 flex"><FaPhoneAlt className="text-xl mr-4"/> +56-32-269-0691</p>
                    <p className="mb-5 flex"><IoMdMail className="text-xl mr-4"/>ventas@ecoalliance.cl</p>
                    <p className="mb-5 flex"><FaWhatsapp className="text-2xl mr-4"/>+56-32-269-061</p>
                </div>
               <div className="text-[#D9D9D9] mt-10">
                    <p className="mt-10 flex mb-10"><BsGeoAltFill className="text-xl mr-4"/>Oficina europea: Charlotenburg 1407, Berlín, Alemania</p>
                    <p className="flex"><FaPhoneAlt className="text-xl mr-4"/>+49(0) 3056597754</p>
                </div>
            </div>
            <div className="mb-10 justify-center hidden md:flex">
                <div className="flex m-5">
                    <p className="text-[#D9D9D9] mr-5 hidden xl:block">Síguenos en</p>
                    <div className="flex items-center">
                        <a href="https://api.whatsapp.com/send?phone=56322690691&text=Hola!%20Solicito%20mas%20informacion%20de%20los%20siguientes%20productos:" target="_blank"><Image width={28} height={28} className="w-7 h-7 mr-2" src="/footer/logo_wsp.png" alt="Logo whatsApp" /></a>
                        <Image width={28} height={28} className="w-7 h-7 mr-2" src="/footer/logo_gmail.png" alt="Logo Gmail" />
                        <a href="https://www.facebook.com/EcoAllianceEAX" target="_blank"><Image width={28} height={28} className="w-7 h-7 mr-2" src="/footer/logo_fb.png" alt="Logo Facebook" /></a>
                        <a href="https://www.youtube.com/channel/UCkNCjH3z4eyPPzgCBwveUZg" target="_blank"><Image width={28} height={28} className="w-7 h-7 mr-2" src="/footer/logo_youtube.png" alt="Logo Youtube" /></a>
                        <a href="https://ecoalliance.cl/blog/" target="_blank"><Image width={28} height={28} className="w-7 h-7 mr-2" src="/footer/logo_blog.png" alt="Logo Blog" /></a>
                        <a href="https://www.linkedin.com/company/ecoalliance-spa/" target="_blank"><Image width={28} height={28} className="w-7 h-7 mr-2" src="/footer/logo_linkedin.png" alt="Logo Linkedin" /></a>
                        <a href="https://www.instagram.com/ecoalliancespa_chile/" target="_blank"><Image width={28} height={28} className="w-7 h-7" src="/footer/logo_instagram.png" alt="Logo Instagram" /></a>
                    </div>
                </div>
                <div className="flex ml-10 mr-10">
                    <Image width={346} height={40} src="/footer/logo_objetivos_sustentables.png" alt="Logo objetivos sustentables" />
                </div>
                <div className="flex  items-center justify-center  mt-8 lg:mt-0">
                    <Image width={73} height={63} src="/footer/logo_desafio10x.png"  alt="Logo desafio 10x"/>
                    <p className="text-[#D9D9D9] pl-2">EcoAlliance participa en Desafío 10X</p>
                </div>
            </div>
            <div className="border border-white mx-10 md:mx-20 lg:mx-80"></div>
            <div className="mt-3 flex justify-around items-center xs:flex-col sm:flex-row px-10 md:px-60 ">
                <div className="flex-col md:flex-row  md:flex justify-around gap-5">
                    <div className="flex justify-center md:block">
                    <Image width={75} height={75} src="/footer/logo_eax.png" alt="Logo EAX" className="mr-5 md:w-[35px] md:h-[35px] w-[75px] h-[75px]" />
                    </div>
                    <p className="flex items-center text-center text-[#D9D9D9] text-sm">EcoAlliance © 2025 - Transformando el entorno</p>
                </div>
                <div className="justify-around gap-5 flex-col sm:flex-row hidden md:flex">
                    <p className="flex items-center text-center text-[#D9D9D9] text-sm">informacion Corporativa</p>
                    <p className="flex items-center text-center text-[#D9D9D9] text-sm">informacion Legal</p>
                    <p className="flex items-center text-center text-[#D9D9D9] text-sm">Mapa del Sitio</p>
                </div>
            </div>
        </footer>
    )
}
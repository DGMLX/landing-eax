import Image from "next/image"
import { FaPhoneAlt,FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io"
import { BsGeoAltFill } from "react-icons/bs"


export const Footer = () =>{
    return(
        <footer className="bg-[#1E1E1E] pb-16 pt-16 ">
            <div className="flex pb-20 justify-center lg:justify-between px-44 sm:px-60">
               
                <div className="text-[#D9D9D9]">
                    <h3 className="mb-5 text-xl font-bold text-start">Contáctanos</h3>
                    <p className="mb-5 flex"><BsGeoAltFill className="text-xl mr-4"/>Casa central: 1/2 oriente 831, oficina 408, <br />Viña del mar, Chile</p>
                    <p className="mb-5 flex"><FaPhoneAlt className="text-xl mr-4"/> +56-32-269-0691</p>
                    <p className="mb-5 flex"><IoMdMail className="text-xl mr-4"/>ventas@ecoalliance.cl</p>
                    <p className="mb-5 flex"><FaWhatsapp className="text-2xl mr-4"/>+56-32-269-061</p>
                </div>


                <div className="text-[#D9D9D9]">
                    <p className="mt-10 flex mb-10"><BsGeoAltFill className="text-xl mr-4"/>Oficina europea: Charlotenburg 1407, Berlín, Alemania</p>
                    <p className="flex"><FaPhoneAlt className="text-xl mr-4"/>+49(0) 3056597754</p>
                </div>
            </div>

            <div className="block lg:flex mb-10 md:items-center md:justify-between px-5 xl:px-28">
                <div className="flex justify-center">
                    <p className="text-[#D9D9D9] mr-5 block lg:hidden xl:block">Síguenos en</p>
                    <div className="flex items-center">
                        <Image width={28} height={28} className="w-7 h-7 mr-2" src="/footer/logo_wsp.png" alt="Logo whatsApp" />
                        <Image width={28} height={28} className="w-7 h-7 mr-2" src="/footer/logo_gmail.png" alt="Logo Gmail" />
                        <Image width={28} height={28} className="w-7 h-7 mr-2" src="/footer/logo_fb.png" alt="Logo Facebook" />
                        <Image width={28} height={28} className="w-7 h-7 mr-2" src="/footer/logo_youtube.png" alt="Logo Youtube" />
                        <Image width={28} height={28} className="w-7 h-7 mr-2" src="/footer/logo_blog.png" alt="Logo Blog" />
                        <Image width={28} height={28} className="w-7 h-7 mr-2" src="/footer/logo_linkedin.png" alt="Logo Linkedin" />
                        <Image width={28} height={28} className="w-7 h-7" src="/footer/logo_instagram.png" alt="Logo Instagram" />
                    </div>
                </div>
                
                <div className="lg:mr-2 xl:mr-5 flex justify-center mt-8 lg:mt-0">
                    <Image width={346} height={40} src="/footer/logo_objetivos_sustentables.png" alt="Logo objetivos sustentables" />
                </div>
                <div className="flex  items-center justify-center  mt-8 lg:mt-0">
                    <Image width={73} height={63} src="/footer/logo_desafio10x.png"  alt="Logo desafio 10x"/>
                    <p className="text-[#D9D9D9]">EcoAlliance participa en Desafío 10X</p>
                </div>
            </div>
           
            <div className="border border-white mx-10 md:mx-20 lg:mx-40"></div>

            <div className="mt-3 flex justify-center  px-10 md:px-60">
                <div className="flex items-center">
                    <Image width={35} height={35} src="/footer/logo_eax.png" alt="Logo EAX" className="mr-5" />    
                    <p className="flex items-center text-[#D9D9D9] text-sm">EcoAlliance © 2025 - Transformando el entorno</p>
                </div>

            </div>
            
        </footer>
    )
}
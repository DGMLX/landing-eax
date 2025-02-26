import Image from "next/image"
import { FaPhoneAlt,FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io"
import { BsGeoAltFill } from "react-icons/bs"
export const FooterV2 = () =>{
    return(
        <footer className="bg-[#303030]">
            {/* <div className="hidden 2xl:block">
                <div className=" w-[3px] absolute  left-[130px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  left-[133px] h-[509px] bg-[#824624]"></div>
                <div className=" w-[3px] absolute  left-[136px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  left-[139px] h-[509px] bg-[#824624]"></div>
                <div className=" w-[3px] absolute  left-[142px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  left-[145px] h-[509px] bg-[#824624]"></div>
                <div className=" w-[3px] absolute  left-[148px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  left-[151px] h-[509px] bg-[#824624]"></div>
                <div className=" w-[3px] absolute  left-[154px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  left-[157px] h-[509px] bg-[#824624]"></div>
                <div className=" w-[3px] absolute  left-[160px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  left-[163px] h-[509px] bg-[#824624]"></div>
                <div className=" w-[3px] absolute  left-[166px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  left-[169px] h-[509px] bg-[#824624]"></div>
                <div className=" w-[3px] absolute  left-[172px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  left-[175px] h-[509px] bg-[#824624]"></div>
                <div className=" w-[3px] absolute  left-[178px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  left-[181px] h-[509px] bg-[#824624]"></div>
                <div className=" w-[3px] absolute  left-[184px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  left-[187px] h-[509px] bg-[#824624]"></div>
                <div className=" w-[3px] absolute  left-[190px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  left-[193px] h-[509px] bg-[#824624]"></div>
                <div className=" w-[3px] absolute  left-[196px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  left-[199px] h-[509px] bg-[#824624]"></div>
                <div className=" w-[3px] absolute  left-[202px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  left-[205px] h-[509px] bg-[#824624]"></div>
                <div className=" w-[3px] absolute  left-[208px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  left-[211px] h-[509px] bg-[#824624]"></div>
            </div>
            <div className="hidden 2xl:block ">
                <div className=" w-[3px] absolute  right-[17px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  right-[20px] h-[509px] bg-[#824624]"></div>
                <div className=" w-[3px] absolute  right-[23px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  right-[26px] h-[509px] bg-[#824624]"></div>
                <div className=" w-[3px] absolute  right-[29px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  right-[32px] h-[509px] bg-[#824624]"></div>
                <div className=" w-[3px] absolute  right-[35px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  right-[38px] h-[509px] bg-[#824624]"></div>
                <div className=" w-[3px] absolute  right-[41px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  right-[44px] h-[509px] bg-[#824624]"></div>
                <div className=" w-[3px] absolute  right-[47px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  right-[50px] h-[509px] bg-[#824624]"></div>
                <div className=" w-[3px] absolute  right-[53px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  right-[56px] h-[509px] bg-[#824624]"></div>
                <div className=" w-[3px] absolute  right-[59px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  right-[62px] h-[509px] bg-[#824624]"></div>
                <div className=" w-[3px] absolute  right-[65px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  right-[68px] h-[509px] bg-[#824624]"></div>
                <div className=" w-[3px] absolute  right-[71px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  right-[74px] h-[509px] bg-[#824624]"></div>
                <div className=" w-[3px] absolute  right-[77px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  right-[80px] h-[509px] bg-[#824624]"></div>
                <div className=" w-[3px] absolute  right-[83px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  right-[86px] h-[509px] bg-[#824624]"></div>
                <div className=" w-[3px] absolute  right-[89px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  right-[92px] h-[509px] bg-[#824624]"></div>
                <div className=" w-[3px] absolute  right-[95px] h-[509px] bg-[#8F5434]"></div>
                <div className=" w-[3px] absolute  right-[98px] h-[509px] bg-[#824624]"></div>
            </div> */}
<section className="elementor-container elementor-column-gap-default hidden md:block">
<div className="elementor-container elementor-column-gap-default flex justify-center gap-10">
{/* seccion enlaces */}
    <div className="text-[#D9D9D9] mt-10">
        <h3 className="text-xl  font-bold">Enlaces</h3>
            <a href="https://ecoalliance.cl/"><p className="mt-5">Inicio</p></a>
            <a href="https://ecoalliance.cl/soluciones/"><p className="mt-5">Soluciones</p></a>
            <a href="https://ecoalliance.cl/productos/"><p className="mt-5">Productos</p></a>
            <a href="https://ecoalliance.cl/acerca-de-eax/"><p className="mt-5">Acerca de EAX</p></a>
            <a href="https://ecoalliance.cl/blog/"><p className="mt-5">Blog</p></a>
            <a href="https://ecoalliance.cl/camion-multiproposito/"><p className="mt-5">Tienda</p></a>
    </div>
 {/* seccion contactos */}
    <div className="text-[#D9D9D9] mt-10">
        <h3 className="text-xl font-bold text-justify">Contáctanos</h3>
            <p className="flex mt-5"><BsGeoAltFill className="text-xl"/>Casa central: 1/2 oriente 831, oficina 408, <br />Viña del mar, Chile</p>
            <p className="flex mt-5"><FaPhoneAlt className="text-xl"/> +56-32-269-0691</p>
            <a href="https://ecoalliance.cl/contacto/"><p className="flex mt-5"><IoMdMail className="text-xl"/>ventas@ecoalliance.cl</p></a>
            <a href="https://api.whatsapp.com/send?phone=56322690691&text=Hola!%20Solicito%20mas%20informacion%20de%20los%20siguientes%20productos:"><p className="flex mt-5"><FaWhatsapp className="text-2xl"/>+56-32-269-061</p></a>
    </div>
    {/* seccion europa */}
    <div className="text-[#D9D9D9] mt-10">
        <p className="flex mt-5"><BsGeoAltFill className="text-xl"/>Oficina europea: Charlotenburg 1407, Berlín, Alemania</p>
        <p className="flex mt-5"><FaPhoneAlt className="text-xl"/>+49(0) 3056597754</p>
    </div>
</div>
</section>
        {/* imagenes */}
        <div className="elementor-container elementor-column-gap-default md:flex items-center justify-center gap-5 hidden mb-10">
            <div className="flex">
            <p className="text-[#D9D9D9] mr-1">Síguenos en</p>
                <a href="https://api.whatsapp.com/send?phone=56322690691&text=Hola!%20Solicito%20mas%20informacion%20de%20los%20siguientes%20productos:" target="_blank"><Image width={28} height={28} className="w-7 h-7 mr-2" src="/footer/logo_wsp.png" alt="Logo whatsApp" /></a>
                    <Image width={28} height={28} className="w-7 h-7 mr-2" src="/footer/logo_gmail.png" alt="Logo Gmail" />
                <a href="https://www.facebook.com/EcoAllianceEAX" target="_blank"><Image width={28} height={28} className="w-7 h-7 mr-2" src="/footer/logo_fb.png" alt="Logo Facebook" /></a>
                <a href="https://www.youtube.com/channel/UCkNCjH3z4eyPPzgCBwveUZg" target="_blank"><Image width={28} height={28} className="w-7 h-7 mr-2" src="/footer/logo_youtube.png" alt="Logo Youtube" /></a>
                <a href="https://ecoalliance.cl/blog/" target="_blank"><Image width={28} height={28} className="w-7 h-7 mr-2" src="/footer/logo_blog.png" alt="Logo Blog" /></a>
                <a href="https://www.linkedin.com/company/ecoalliance-spa/" target="_blank"><Image width={28} height={28} className="w-7 h-7 mr-2" src="/footer/logo_linkedin.png" alt="Logo Linkedin" /></a>
                <a href="https://www.instagram.com/ecoalliancespa_chile/" target="_blank"><Image width={28} height={28} className="w-7 h-7" src="/footer/logo_instagram.png" alt="Logo Instagram" /></a>
            </div>
            <div>
                    <Image width={296} height={40} src="/footer/logo_objetivos_sustentables.png" alt="Logo objetivos sustentables" className="justify-center"/>
            </div>
            <div className="flex items-center">
                    <Image width={73} height={63} src="/footer/logo_desafio10x.png"  alt="Logo desafio 10x " className="mr-1"/>
                    <p className="text-[#D9D9D9]">EcoAlliance participa en Desafío 10X</p>
            </div>
</div>
<div className="border border-white  md:mx-20 lg:mx-70"></div>
            <div className="mt-3 flex justify-center gap-52 items-center xs:flex-col sm:flex-row px-10 md:px-60 ">
                <div className="flex-col md:flex-row  md:flex justify-around m-5">
                    <div className="flex justify-center md:block">
                    <Image width={75} height={75} src="/footer/logo_eax.png" alt="Logo EAX" className="mr-5 md:w-[35px] md:h-[35px] w-[75px] h-[75px]" />
                    </div>
                    <p className="flex items-center text-center text-[#D9D9D9] text-sm">EcoAlliance © 2025 - Transformando el entorno</p>
                </div>
                <div className="justify-around lg:gap-20 lg:flex-row flex-col hidden md:flex gap-5">
                <a href="https://ecoalliance.cl/informacion-corporativa/"><p className="flex items-center text-[#D9D9D9] text-sm">informacion Corporativa</p></a>
                <a href="https://ecoalliance.cl/informacion-legal/"><p className="flex items-center text-[#D9D9D9] text-sm">informacion Legal</p></a>
                <a href=""><p className="flex items-center text-[#D9D9D9] text-sm">Mapa del Sitio</p></a>
                </div>
            </div>
        </footer>
    )
}
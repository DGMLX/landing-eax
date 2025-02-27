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
<div className="elementor-container elementor-column-gap-default flex justify-center gap-20">
{/* seccion enlaces */}
    <div className="text-[#D9D9D9] mt-10 mr-28 m-40">
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
            <a href="https://maps.app.goo.gl/FVeDiYA7TCzX8PWM8"><p className="flex mt-5 text-[14px]"><BsGeoAltFill className="text-xl mr-5"/>Casa central: 1/2 oriente 831, oficina 408,<br />Viña del mar, Chile</p></a>
            <p className="flex mt-5 text-[14px]"><FaPhoneAlt className="text-xl mr-5"/> +56-32-269-0691</p>
            <a href="https://ecoalliance.cl/contacto/"><p className="flex mt-5 text-[14px]"><IoMdMail className="text-xl mr-5"/>ventas@ecoalliance.cl</p></a>
            <a href="https://api.whatsapp.com/send?phone=56322690691&text=Hola!%20Solicito%20mas%20informacion%20de%20los%20siguientes%20productos:"><p className="flex mt-5 text-[14px]"><FaWhatsapp className="text-2xl mr-5"/>+56-32-269-061</p></a>
    </div>
    {/* seccion europa */}
    <div className="text-[#D9D9D9] mt-10 ml-10 m-40">
        <p className="flex mt-12"><BsGeoAltFill className="text-xl mr-5"/>Oficina europea: Charlotenburg 14057, <br className=""/> Berlín, Alemania</p>
        <p className="flex mt-5"><FaPhoneAlt className="text-xl mr-5"/>+49(0) 3056597754</p>
    </div>
</div>
</section>
        {/* imagenes */}
        <div className="elementor-container elementor-column-gap-default md:flex items-center justify-center gap-5 hidden mb-10 -mt-32 ">
            <div className="hidden  ml-32 items-center xl:flex">
            <p className="text-[#D9D9D9] mr-2 hidden lg:block">Síguenos</p>
                <a href="https://api.whatsapp.com/send?phone=56322690691&text=Hola!%20Solicito%20mas%20informacion%20de%20los%20siguientes%20productos:" target="_blank"><Image width={28} height={28} className="w-7 h-7 m-2" src="/footer/logo_wsp.png" alt="Logo whatsApp" /></a>
                    <Image width={28} height={28} className="w-7 h-7 m-2" src="/footer/logo_gmail.png" alt="Logo Gmail" />
                <a href="https://www.facebook.com/EcoAllianceEAX" target="_blank"><Image width={28} height={28} className="w-7 h-7 m-2" src="/footer/logo_fb.png" alt="Logo Facebook" /></a>
                <a href="https://www.youtube.com/channel/UCkNCjH3z4eyPPzgCBwveUZg" target="_blank"><Image width={28} height={28} className="w-7 h-7 m-2" src="/footer/logo_youtube.png" alt="Logo Youtube" /></a>
                <a href="https://ecoalliance.cl/blog/" target="_blank"><Image width={28} height={28} className="w-7 h-7 m-2" src="/footer/logo_blog.png" alt="Logo Blog" /></a>
                <a href="https://www.linkedin.com/company/ecoalliance-spa/" target="_blank"><Image width={28} height={28} className="w-7 h-7 m-2" src="/footer/logo_linkedin.png" alt="Logo Linkedin" /></a>
                <a href="https://www.instagram.com/ecoalliancespa_chile/" target="_blank"><Image width={28} height={28} className="w-7 h-7 m-2" src="/footer/logo_instagram.png" alt="Logo Instagram" /></a>
            </div>
            <div className="">
                    <Image width={296} height={40} src="/footer/logo_obj_sustentables_obtimizado.svg" alt="Logo objetivos sustentables" className="justify-center md:w-[500px]"/>
            </div>
            <div className="flex items-end">
                    <Image width={73} height={63} src="/footer/logo_desafio10x.png"  alt="Logo desafio 10x " className="mr-1 "/>
                    <p className="text-[#D9D9D9]">EcoAlliance participa en Desafío 10X</p>
            </div>
</div>
<hr className="border-t border-slate-400 mb-10 mx-56"/>
            <div className="lg:mt-3 flex gap-10 xl:gap-96 justify-center items-center">
                <div className="flex justify-around m-5 flex-col lg:flex-row items-center gap-2">
                    <div className="flex justify-center ">
                    <Image width={75} height={75} src="/footer/logo_eax.png" alt="Logo EAX" className="mr-5 md:w-[35px] md:h-[35px] w-[75px] h-[75px] mb-2" />
                    </div>
                    <p className="flex text-center text-[#D9D9D9] text-sm">EcoAlliance © 2025 - Transformando el entorno</p>
                </div>
                <div className="hidden md:flex gap-2 md:flex-col lg:flex-row">
                    <a href="https://ecoalliance.cl/informacion-corporativa/"><p className="flex items-center text-[#D9D9D9] text-sm">informacion Corporativa</p></a>
                    <a href="https://ecoalliance.cl/informacion-legal/"><p className="flex items-center text-[#D9D9D9] text-sm">informacion Legal</p></a>
                    <a href=""><p className="flex items-center text-[#D9D9D9] text-sm">Mapa del Sitio</p></a>
                </div>
            </div>
        </footer>
    )
}
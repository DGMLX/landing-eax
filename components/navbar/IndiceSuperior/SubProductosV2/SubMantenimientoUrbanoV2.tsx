import { Dispatch, SetStateAction } from "react";

type Props = {
    hoverMantenimientoUrbano: boolean;
    setHoverMantenimientoUrbano:Dispatch<SetStateAction<boolean>>;
    setHoverSubProductos:Dispatch<SetStateAction<boolean>>;
    isVisible:boolean
}


const SubMantenimientoUrbanoV2:React.FC<Props> = ({hoverMantenimientoUrbano,setHoverMantenimientoUrbano,setHoverSubProductos,isVisible}) =>{

    const outHover = ()=>{
        setHoverMantenimientoUrbano(false)
        setHoverSubProductos(false)
    }

    return(
        <>
            <div className={` text-white md:ml-10 lg:ml-[436px] xl:ml-[515px] mr-96 ${hoverMantenimientoUrbano ? 'flex' : 'hidden'}`} onMouseLeave={()=>outHover()}>
                <div className={`z-50  bg-[#1E1E1E] fixed ${isVisible ? 'top-[272px]' : 'top-[215px]'} `}>
                    <a href="https://ecoalliance.cl/accesorio-hidroelevador/" className="text-white text-xs pt-4 pb-[18.5px] flex border-b border-slate-600 pl-10 pr-5 ">HIDROELEVADOR</a>
                    <a href="https://ecoalliance.cl/bacheadoras/" className="text-white text-xs pt-4 pb-[26px] flex border-b border-slate-600 pl-10 pr-5 ">BACHEADORAS</a>
                    <a href="https://ecoalliance.cl/accesorio-ampliroll/" className="text-white text-xs py-4 flex pl-10 pr-5 ">AMPLIROLL</a>
                </div>
            </div>
        </>
    )
}

export default SubMantenimientoUrbanoV2
import { Dispatch, SetStateAction } from "react";

type Props = {
    hoverMantenimientoUrbano: boolean;
    setHoverMantenimientoUrbano:Dispatch<SetStateAction<boolean>>;
    setHoverSubProductos:Dispatch<SetStateAction<boolean>>
}


const SubMantenimientoUrbano:React.FC<Props> = ({hoverMantenimientoUrbano,setHoverMantenimientoUrbano,setHoverSubProductos}) =>{

    const outHover = ()=>{
        setHoverMantenimientoUrbano(false)
        setHoverSubProductos(false)
    }

    return(
        <>
            <div className={` text-white md:ml-10 lg:ml-[440px] xl:ml-[504px] mr-96 ${hoverMantenimientoUrbano ? 'flex' : 'hidden'}`} onMouseLeave={()=>outHover()}>
                <div className="z-30  bg-[#1E1E1E] fixed top-[217.5px] ">
                    <a href="https://ecoalliance.cl/accesorio-hidroelevador/" className="text-white text-xs py-4 flex border-b border-slate-600 pl-10 pr-5 ">HIDROELEVADOR</a>
                    <a href="https://ecoalliance.cl/bacheadoras/" className="text-white text-xs py-4 flex border-b border-slate-600 pl-10 pr-5 ">BACHEADORAS</a>
                    <a href="https://ecoalliance.cl/accesorio-ampliroll/" className="text-white text-xs py-4 flex border-b border-slate-600 pl-10 pr-5 ">AMPLIROLL</a>
                </div>
            </div>
        </>
    )
}

export default SubMantenimientoUrbano
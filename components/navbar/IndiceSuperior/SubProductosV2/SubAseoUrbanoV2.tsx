import { Dispatch, SetStateAction } from "react";

type Props = {
    hoverAseoUrbano: boolean;
    setHoverAseoUrbano:Dispatch<SetStateAction<boolean>>;
    setHoverSubProductos:Dispatch<SetStateAction<boolean>>
}

const SubAseoUrbanoV2:React.FC<Props>= ({hoverAseoUrbano,setHoverAseoUrbano,setHoverSubProductos}) =>{
    
    const outHover = ()=>{
        setHoverAseoUrbano(false)
        setHoverSubProductos(false)
    }
    
    return(
        <>
            <div className={` text-white md:ml-10 lg:ml-[436px] xl:ml-[515px] mr-96 ${hoverAseoUrbano ? 'flex' : 'hidden'}`} onMouseLeave={()=>outHover()}>
                <div className="z-50  bg-[#1E1E1E] fixed top-[222px] ">
                    <a href="https://ecoalliance.cl/barredoras-de-calle/" className="text-white text-xs pt-4 pb-[17.5px] flex border-b border-slate-600 pl-10 pr-5 ">BARREDORAS DE CALLE</a>
                    <a href="https://ecoalliance.cl/contenedores-campana/" className="text-white text-xs pt-4 pb-[18px] flex border-b border-slate-600 pl-10 pr-5 ">CONTENEDORES CAMPANA</a>
                    <a href="https://ecoalliance.cl/contenedores-metalicos/" className="text-white text-xs pt-4 pb-[28px] flex pl-10 pr-5 ">CONTENEDORES METÁLICOS</a>
                </div>
            </div>
    </>
    )
}

export default SubAseoUrbanoV2
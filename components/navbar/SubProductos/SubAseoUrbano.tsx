import { Dispatch, SetStateAction } from "react";

type Props = {
    hoverAseoUrbano: boolean;
    setHoverAseoUrbano:Dispatch<SetStateAction<boolean>>;
    setHoverSubProductos:Dispatch<SetStateAction<boolean>>
}

const SubAseoUrbano:React.FC<Props>= ({hoverAseoUrbano,setHoverAseoUrbano,setHoverSubProductos}) =>{
    
    const outHover = ()=>{
        setHoverAseoUrbano(false)
        setHoverSubProductos(false)
    }
    
    return(
        <>
            <div className={` text-white md:ml-10 lg:ml-[436px] xl:ml-[499px] mr-96 ${hoverAseoUrbano ? 'flex' : 'hidden'}`} onMouseLeave={()=>outHover()}>
                <div className="z-30  bg-[#1E1E1E] fixed top-[166px] ">
                    <a href="https://ecoalliance.cl/barredoras-de-calle/" className="text-white text-xs py-4 flex border-b border-slate-600 pl-10 pr-5 ">BARREDORAS DE CALLE</a>
                    <a href="https://ecoalliance.cl/contenedores-campana/" className="text-white text-xs pt-4 pb-[18.5px] flex border-b border-slate-600 pl-10 pr-5 ">CONTENEDORES CAMPANA</a>
                    <a href="https://ecoalliance.cl/contenedores-metalicos/" className="text-white text-xs pt-4 pb-[18px] flex border-b border-slate-600 pl-10 pr-5 ">CONTENEDORES METÁLICOS</a>
                </div>
            </div>
    </>
    )
}

export default SubAseoUrbano
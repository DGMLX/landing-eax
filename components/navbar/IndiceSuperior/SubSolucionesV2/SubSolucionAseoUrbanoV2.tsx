import { Dispatch, SetStateAction } from "react";

type Props = {
    hoverSolucionAseo: boolean;
    setHoverSolucionAseo:Dispatch<SetStateAction<boolean>>;
    setHoverSubSoluciones:Dispatch<SetStateAction<boolean>>
}

const SubSolucionAseoUrbanoV2:React.FC<Props> = ({hoverSolucionAseo,setHoverSolucionAseo,setHoverSubSoluciones}) =>{
    
    const outHover = ()=>{
        setHoverSolucionAseo(false)
        setHoverSubSoluciones(false)
    }
    
    return(
        <>
        <div className={` text-white md:ml-10 lg:ml-[556px] xl:ml-[629px] mr-96 ${hoverSolucionAseo ? 'flex' : 'hidden'}`} onMouseLeave={()=>outHover()}>
            <div className="z-50  bg-[#1E1E1E] fixed top-[217px]">
                <a href="https://ecoalliance.cl/solucion-limpieza-sanitizacion-desinfeccion-urbana/" className="text-white text-xs pt-[18px] pb-[18px] flex  pl-10 pr-5 ">LIMPIEZA, SANITIZACIÓN Y DESINFECCIÓN URBANA</a>
            </div>
        </div>
        </>
    )
}

export default SubSolucionAseoUrbanoV2
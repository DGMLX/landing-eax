import { Dispatch, SetStateAction } from "react";

type Props = {
    hoverSolucionMantenimiento:boolean;
    setHoverSolucionMantenimiento:Dispatch<SetStateAction<boolean>>;
    setHoverSubSoluciones:Dispatch<SetStateAction<boolean>>
}

const SubSolucionMantenimiento:React.FC<Props> = ({hoverSolucionMantenimiento,setHoverSolucionMantenimiento,setHoverSubSoluciones}) =>{
       
    const outHover = ()=>{
        setHoverSolucionMantenimiento(false)
        setHoverSubSoluciones(false)
    }

    return(
        <>
        <div className={` text-white md:ml-10 lg:ml-36 xl:ml-[616px] mr-96 ${hoverSolucionMantenimiento ? 'flex' : 'hidden'}`} onMouseLeave={()=>outHover()}>
            <div className="z-30  bg-[#1E1E1E] fixed top-[211px]">
                <a href="https://ecoalliance.cl/solucion-mantencion-de-arbustos-y-arbolado/" className="text-white text-xs py-4 flex border-b border-slate-600 pl-10 pr-5 ">MANTENICIÓN DE ARBUSTOS Y ABOLADO</a>
            </div>
        </div>
        </>
    )
}

export default SubSolucionMantenimiento
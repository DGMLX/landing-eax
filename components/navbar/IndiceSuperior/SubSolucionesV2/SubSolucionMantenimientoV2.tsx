import { Dispatch, SetStateAction } from "react";

type Props = {
    hoverSolucionMantenimiento:boolean;
    setHoverSolucionMantenimiento:Dispatch<SetStateAction<boolean>>;
    setHoverSubSoluciones:Dispatch<SetStateAction<boolean>>
    isVisible:boolean
}

const SubSolucionMantenimientoV2:React.FC<Props> = ({hoverSolucionMantenimiento,setHoverSolucionMantenimiento,setHoverSubSoluciones,isVisible}) =>{
       
    const outHover = ()=>{
        setHoverSolucionMantenimiento(false)
        setHoverSubSoluciones(false)
    }

    return(
        <>
        <div className={` text-white md:ml-10 lg:ml-[556px] xl:ml-[629px] mr-96 ${hoverSolucionMantenimiento ? 'flex' : 'hidden'}`} onMouseLeave={()=>outHover()}>
            <div className={`z-50  bg-[#1E1E1E] fixed ${isVisible ? 'top-[269px]' : 'top-[211px]'}`}>
                <a href="https://ecoalliance.cl/solucion-mantencion-de-arbustos-y-arbolado/" className="text-white text-xs pt-[18px] pb-[17px] flex  pl-10 pr-5 ">MANTENICIÓN DE ARBUSTOS Y ABOLADO</a>
            </div>
        </div>
        </>
    )
}

export default SubSolucionMantenimientoV2
'use client'

import { Dispatch, SetStateAction, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import SubSolucionAseoUrbano from "./SubSoluciones/SubSolucionAseoUrbano";
import SubSolucionMantenimiento from "./SubSoluciones/SubSolucionMantenimiento";

type Props = {
  hoverSubSoluciones: boolean;
  hoverSolucionAseo:boolean;
  hoverSolucionMantenimiento:boolean;
  setHoverSolucionAseo:Dispatch<SetStateAction<boolean>>;
  setHoverSolucionMantenimiento:Dispatch<SetStateAction<boolean>>;
  setHoverSubSoluciones:Dispatch<SetStateAction<boolean>>
}

export const SubNavegacionSoluciones:React.FC<Props> = ({setHoverSubSoluciones,hoverSubSoluciones,hoverSolucionAseo,hoverSolucionMantenimiento,setHoverSolucionAseo,setHoverSolucionMantenimiento  }) =>{



  
  const outHover = ()=>{
    if(hoverSolucionAseo || hoverSolucionMantenimiento){
      setHoverSubSoluciones(true)
    }else{
      setHoverSolucionAseo(false)
      setHoverSubSoluciones(false)
      setHoverSolucionMantenimiento(false)
    }


    
  }

  const onHoverSolucionAseo = () =>{
    setHoverSubSoluciones(true)
    setHoverSolucionAseo(true)
    setHoverSolucionMantenimiento(false)
   
  }
  const onHoverSolucionMantenimiento = () =>{
    setHoverSolucionMantenimiento(true)
    setHoverSubSoluciones(true)
    setHoverSolucionAseo(false)
  }

  
  const hoverNav =()=>{
    setHoverSolucionAseo(false)
    setHoverSolucionMantenimiento(false)
  }

    return(
        <>

          <div className={` text-white md:ml-10 lg:ml-[310px]  xl:ml-[368px] mr-96 ${hoverSubSoluciones ? 'flex' : 'hidden'}`} onMouseLeave={()=>outHover()} >
              <div className="z-30 bg-[#1E1E1E] fixed top-[63px] ">
                <a href="https://ecoalliance.cl/camion-multiproposito/" className="text-white text-xs py-4 flex border-b border-slate-600 pl-10 pr-5 " onMouseEnter={()=>hoverNav()}>SOLUCIONES MULTIPROPÓSITO</a>
                <a  onMouseEnter={()=>hoverNav()} href="https://ecoalliance.cl/soluciones-tratamiento-de-residuos/" className="text-white text-xs py-4 flex border-b border-slate-600 pl-10 pr-5"  >TRATAMIENTO DE RESIDUOS</a>
                <a onMouseEnter={()=>onHoverSolucionAseo()}  href="https://ecoalliance.cl/soluciones-aseo-urbano/" className="text-white text-xs py-4 flex border-b border-slate-600 pl-10 pr-5">ASEO URBANO<IoMdArrowDropright className="text-lg"/></a>
                <a onMouseEnter={()=>onHoverSolucionMantenimiento()} href="https://ecoalliance.cl/soluciones-mantenimiento-urbano/" className="text-white text-xs py-4 flex border-b border-slate-600 pl-10 pr-5">MANTENIMIENTO URBANO<IoMdArrowDropright className="text-lg"/></a>
                <a href="https://ecoalliance.cl/espacios-publicos/" className="text-white text-xs py-4 flex border-b border-slate-600 pl-10 pr-5"  onMouseEnter={()=>hoverNav()}>ESPACIOS PÚBLICOS</a>
              </div>
          </div>

          <SubSolucionAseoUrbano hoverSolucionAseo={hoverSolucionAseo} setHoverSolucionAseo={setHoverSolucionAseo} setHoverSubSoluciones={setHoverSubSoluciones}/>

          <SubSolucionMantenimiento hoverSolucionMantenimiento={hoverSolucionMantenimiento} setHoverSolucionMantenimiento={setHoverSolucionMantenimiento} setHoverSubSoluciones={setHoverSubSoluciones}/>

        </>
    )
}

export default SubNavegacionSoluciones
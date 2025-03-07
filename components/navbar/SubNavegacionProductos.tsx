'use client'

import { Dispatch, SetStateAction, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import SubMultiproposito from "./SubProductos/SubMultiproposito";
import SubTratamientoResiduos from "./SubProductos/SubTratamientoResiduos";
import SubAseoUrbano from "./SubProductos/SubAseoUrbano";
import SubMantenimientoUrbano from "./SubProductos/SubMantenimientoUrbano";
import SubEspaciosPublicos from "./SubProductos/SubEspaciosPublicos";

type Props = {
  hoverSubProductos: boolean;
  hoverMultiproposito:boolean;
  hoverTratamientoResiduos:boolean;
  hoverAseoUrbano:boolean;
  hoverMantenimientoUrbano:boolean;
  hoverEspaciosPublicos:boolean;
  hoverSubChipeadoras:boolean;
  hoverSubCamiones:boolean;
  setHoverMultiproposito:Dispatch<SetStateAction<boolean>>;
  setHoverTratamientoResiduos:Dispatch<SetStateAction<boolean>>;
  setHoverAseoUrbano:Dispatch<SetStateAction<boolean>>;
  setHoverMantenimientoUrbano:Dispatch<SetStateAction<boolean>>;
  setHoverEspaciosPublicos:Dispatch<SetStateAction<boolean>>;
  setHoverSubProductos:Dispatch<SetStateAction<boolean>>;
  setHoverSubChipeadoras:Dispatch<SetStateAction<boolean>>;
  setHoverSubCamiones:Dispatch<SetStateAction<boolean>>;
}

export const SubNavegacionProductos:React.FC<Props> = ({setHoverSubProductos,hoverSubProductos,hoverMultiproposito,hoverTratamientoResiduos,hoverAseoUrbano,hoverMantenimientoUrbano,hoverEspaciosPublicos,setHoverMultiproposito,setHoverTratamientoResiduos,setHoverAseoUrbano,setHoverMantenimientoUrbano,setHoverEspaciosPublicos,hoverSubCamiones,hoverSubChipeadoras,setHoverSubCamiones,setHoverSubChipeadoras}) =>{




  const outHover = ()=>{

    if(hoverSubProductos && hoverTratamientoResiduos && hoverSubChipeadoras || (hoverSubProductos && hoverTratamientoResiduos && !hoverSubChipeadoras) || (hoverSubProductos && hoverMultiproposito && hoverSubCamiones) || (hoverSubProductos && hoverMultiproposito && !hoverSubCamiones)){
      setHoverSubProductos(false)
      setHoverMultiproposito(false)
      setHoverTratamientoResiduos(false)
      setHoverAseoUrbano(false)
      setHoverMantenimientoUrbano(false)
      setHoverEspaciosPublicos(false)
      setHoverSubCamiones(false)
      setHoverSubChipeadoras(false)
    }else if(hoverMultiproposito || hoverTratamientoResiduos || hoverAseoUrbano || hoverMantenimientoUrbano || hoverEspaciosPublicos){
       setHoverSubProductos(true)
     }else{
       setHoverSubProductos(false)
       setHoverMultiproposito(false)
       setHoverTratamientoResiduos(false)
       setHoverAseoUrbano(false)
       setHoverMantenimientoUrbano(false)
       setHoverEspaciosPublicos(false)
       setHoverSubCamiones(false)
       setHoverSubChipeadoras(false)
     }

    // if(hoverMultiproposito || hoverTratamientoResiduos || hoverAseoUrbano || hoverMantenimientoUrbano || hoverEspaciosPublicos){
    //   setHoverSubProductos(true)
    // }else{
    //   setHoverSubProductos(false)
    //   setHoverMultiproposito(false)
    //   setHoverTratamientoResiduos(false)
    //   setHoverAseoUrbano(false)
    //   setHoverMantenimientoUrbano(false)
    //   setHoverEspaciosPublicos(false)
    //   setHoverSubCamiones(false)
    //   setHoverSubChipeadoras(false)
    // }
  }


  const onHoverMultiproposito = () =>{
    setHoverSubProductos(true)
    setHoverMultiproposito(true)
    setHoverTratamientoResiduos(false)
    setHoverAseoUrbano(false)
    setHoverMantenimientoUrbano(false)
    setHoverEspaciosPublicos(false)
    setHoverSubCamiones(false)
    setHoverSubChipeadoras(false)
  }
  const onHoverTratamientoResiduos = () =>{
    setHoverTratamientoResiduos(true)
    setHoverSubProductos(true)
    setHoverMultiproposito(false)
    setHoverAseoUrbano(false)
    setHoverMantenimientoUrbano(false)
    setHoverEspaciosPublicos(false)
    setHoverSubCamiones(false)
  }

  const onHoverAseoUrbano = () =>{
    setHoverSubProductos(true)
    setHoverAseoUrbano(true)
    setHoverMultiproposito(false)
    setHoverTratamientoResiduos(false)
    setHoverMantenimientoUrbano(false)
    setHoverEspaciosPublicos(false)
    setHoverSubCamiones(false)
    setHoverSubChipeadoras(false)
  }

  const onHoverMantenimiento = () =>{
    setHoverSubProductos(true)
    setHoverMantenimientoUrbano(true)
    setHoverAseoUrbano(false)
    setHoverMultiproposito(false)
    setHoverTratamientoResiduos(false)
    setHoverEspaciosPublicos(false)
    setHoverSubCamiones(false)
    setHoverSubChipeadoras(false)
  }

  const onHoverEspaciosPublicos = () =>{
    setHoverSubProductos(true)
    setHoverEspaciosPublicos(true)
    setHoverMantenimientoUrbano(false)
    setHoverAseoUrbano(false)
    setHoverMultiproposito(false)
    setHoverTratamientoResiduos(false)
    setHoverSubCamiones(false)
    setHoverSubChipeadoras(false)
  }

  const hoverBonus = ()=>{
    setHoverSubProductos(true)
    setHoverEspaciosPublicos(false)
    setHoverMantenimientoUrbano(false)
    setHoverAseoUrbano(false)
    setHoverMultiproposito(false)
    setHoverTratamientoResiduos(false)
    setHoverSubCamiones(false)
    setHoverSubChipeadoras(false)
  }

  const hoverBonusLeft = ()=>{
    setHoverSubProductos(true)
    setHoverEspaciosPublicos(false)
    setHoverMantenimientoUrbano(false)
    setHoverAseoUrbano(false)
    setHoverMultiproposito(false)
    setHoverTratamientoResiduos(false)
    setHoverSubCamiones(false)
    setHoverSubChipeadoras(false)
  }


    return(
        <>

          <div className={` text-white md:ml-10 lg:ml-48 xl:ml-64 mr-96 ${hoverSubProductos ? 'flex' : 'hidden'}`} onMouseLeave={()=>outHover()} >
              <div className="z-50 bg-[#1E1E1E] fixed top-[63px] ">
                
                <a onMouseEnter={()=>onHoverMultiproposito()} href="https://ecoalliance.cl/camion-multiproposito/" className="text-white text-xs py-4 flex border-b border-slate-600 pl-[55px] pr-5 ">MULTIPROPÓSITO<IoMdArrowDropright className="text-lg"/></a>
                <a onMouseEnter={()=>onHoverTratamientoResiduos()} href="https://ecoalliance.cl/tratamiento-de-residuos/" className="text-white text-xs py-4 flex border-b border-slate-600 pl-[55px] pr-5">TRATAMIENTO DE RESIDUOS<IoMdArrowDropright className="text-lg"/></a>
                
                <div className="flex">
                  <div className="bg-[#1E1E1E] w-[15px] border-b border-slate-600" onMouseEnter={()=>hoverBonusLeft()}></div>
                  <a onMouseEnter={()=>onHoverAseoUrbano()} href="https://ecoalliance.cl/aseo-urbano/" className="text-white text-xs py-4 flex border-b border-slate-600 pl-10 w-full pr-5">ASEO URBANO<IoMdArrowDropright className="text-lg"/></a>
                </div>

                <div className="flex">
                  <div className="bg-[#1E1E1E] w-[15px] border-b border-slate-600" onMouseEnter={()=>hoverBonusLeft()}></div>
                  <a onMouseEnter={()=>onHoverMantenimiento()} href="https://ecoalliance.cl/mantenimiento-urbano/" className="text-white text-xs py-4 flex border-b w-full border-slate-600 pl-10 pr-5">MANTENIMIENTO URBANO<IoMdArrowDropright className="text-lg"/></a>

                </div>

                <div className="flex">
                  <div className="bg-[#1E1E1E] w-[15px]" onMouseEnter={()=>hoverBonusLeft()}></div>
                  <a onMouseEnter={()=>onHoverEspaciosPublicos()}  href="https://ecoalliance.cl/espacios-publicos/" className="text-white text-xs py-4 flex pl-10 pr-5 w-full">ESPACIOS PÚBLICOS<IoMdArrowDropright className="text-lg"/></a>

                </div>
                <div className="bg-[#1E1E1E] h-[10px]" onMouseEnter={()=>hoverBonus()}>
              </div>
          </div>
        
          </div>
          <SubMultiproposito hoverMultiproposito={hoverMultiproposito} setHoverMultiproposito={setHoverMultiproposito} setHoverSubProductos={setHoverSubProductos} hoverSubCamiones={hoverSubCamiones} setHoverSubCamiones={setHoverSubCamiones}/>

          <SubTratamientoResiduos hoverTratamientoResiduos={hoverTratamientoResiduos} setHoverTratamientoResiduos={setHoverTratamientoResiduos} setHoverSubProductos={setHoverSubProductos} hoverSubChipeadoras={hoverSubChipeadoras} setHoverSubChipeadoras={setHoverSubChipeadoras} setHoverSubCamiones={setHoverSubCamiones}/>

          <SubAseoUrbano hoverAseoUrbano={hoverAseoUrbano} setHoverAseoUrbano={setHoverAseoUrbano} setHoverSubProductos={setHoverSubProductos}/>

          <SubMantenimientoUrbano hoverMantenimientoUrbano={hoverMantenimientoUrbano} setHoverMantenimientoUrbano={setHoverMantenimientoUrbano} setHoverSubProductos={setHoverSubProductos}/>

          <SubEspaciosPublicos hoverEspaciosPublicos={hoverEspaciosPublicos} setHoverEspaciosPublicos={setHoverEspaciosPublicos} setHoverSubProductos={setHoverSubProductos}/>

        </>
    )
}

export default SubNavegacionProductos
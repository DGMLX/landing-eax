'use client'

import { Dispatch, SetStateAction, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import SubMultipropositoV2 from "./SubProductosV2/SubMultipropositoV2";
import SubTratamientoResiduosV2 from "./SubProductosV2/SubTratamientoResiduosV2";
import SubAseoUrbanoV2 from "./SubProductosV2/SubAseoUrbanoV2";
import SubMantenimientoUrbanoV2 from "./SubProductosV2/SubMantenimientoUrbanoV2";
import SubEspaciosPublicosV2 from "./SubProductosV2/SubEspaciosPublicosV2";

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

export const SubNavegacionProductosV2:React.FC<Props> = ({setHoverSubProductos,hoverSubProductos,hoverMultiproposito,hoverTratamientoResiduos,hoverAseoUrbano,hoverMantenimientoUrbano,hoverEspaciosPublicos,setHoverMultiproposito,setHoverTratamientoResiduos,setHoverAseoUrbano,setHoverMantenimientoUrbano,setHoverEspaciosPublicos,hoverSubCamiones,hoverSubChipeadoras,setHoverSubCamiones,setHoverSubChipeadoras}) =>{




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
              <div className="z-50 bg-[#1E1E1E] fixed top-[120px] ">
                
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
          <SubMultipropositoV2 hoverMultiproposito={hoverMultiproposito} setHoverMultiproposito={setHoverMultiproposito} setHoverSubProductos={setHoverSubProductos} hoverSubCamiones={hoverSubCamiones} setHoverSubCamiones={setHoverSubCamiones}/>

          <SubTratamientoResiduosV2 hoverTratamientoResiduos={hoverTratamientoResiduos} setHoverTratamientoResiduos={setHoverTratamientoResiduos} setHoverSubProductos={setHoverSubProductos} hoverSubChipeadoras={hoverSubChipeadoras} setHoverSubChipeadoras={setHoverSubChipeadoras} setHoverSubCamiones={setHoverSubCamiones}/>

          <SubAseoUrbanoV2 hoverAseoUrbano={hoverAseoUrbano} setHoverAseoUrbano={setHoverAseoUrbano} setHoverSubProductos={setHoverSubProductos}/>

          <SubMantenimientoUrbanoV2 hoverMantenimientoUrbano={hoverMantenimientoUrbano} setHoverMantenimientoUrbano={setHoverMantenimientoUrbano} setHoverSubProductos={setHoverSubProductos}/>

          <SubEspaciosPublicosV2 hoverEspaciosPublicos={hoverEspaciosPublicos} setHoverEspaciosPublicos={setHoverEspaciosPublicos} setHoverSubProductos={setHoverSubProductos}/>

        </>
    )
}

export default SubNavegacionProductosV2

import { Dispatch, SetStateAction } from "react";
import { IoMdArrowDropright } from "react-icons/io";

type Props = {
  hoverSubProductos: boolean;
  setHoverSubProductos:Dispatch<SetStateAction<boolean>>
}

export const SubNavegacionProductos:React.FC<Props> = ({setHoverSubProductos,hoverSubProductos}) =>{

  
  const outHover = ()=>{
    setHoverSubProductos(false)

  }
    return(
        <>

          <div className={` text-white md:ml-10 lg:ml-36 xl:ml-64 mr-96 ${hoverSubProductos ? 'flex' : 'hidden'}`} onMouseLeave={()=>outHover()} >
              <div className="z-30 bg-[#1E1E1E] fixed top-[63px] ">
                <div className="flex">
                  <a href="https://ecoalliance.cl/camion-multiproposito/" className="text-white text-xs py-4 flex border-b border-slate-600 pl-10 pr-5 ">MULTIPROPÓSITO<IoMdArrowDropright className="text-lg"/></a>
                  
                </div>
                <a href="https://ecoalliance.cl/tratamiento-de-residuos/" className="text-white text-xs py-4 flex border-b border-slate-600 pl-10 pr-5">TRATAMIENTO DE RESIDUOS<IoMdArrowDropright className="text-lg"/></a>
                <a href="https://ecoalliance.cl/aseo-urbano/" className="text-white text-xs py-4 flex border-b border-slate-600 pl-10 pr-5">ASEO URBANO<IoMdArrowDropright className="text-lg"/></a>
                <a href="https://ecoalliance.cl/mantenimiento-urbano/" className="text-white text-xs py-4 flex border-b border-slate-600 pl-10 pr-5">MANTENIMIENTO URBANO<IoMdArrowDropright className="text-lg"/></a>
                <a href="https://ecoalliance.cl/espacios-publicos/" className="text-white text-xs py-4 flex border-b border-slate-600 pl-10 pr-5">ESPACIOS PÚBLICOS<IoMdArrowDropright className="text-lg"/></a>
              </div>
          </div>


        </>
    )
}

export default SubNavegacionProductos
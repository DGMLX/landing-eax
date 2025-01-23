import { Dispatch, SetStateAction } from "react";
import { IoMdArrowDropright } from "react-icons/io";

type Props = {
  hoverMultiproposito: boolean;
  hoverSubCamiones:boolean;
  setHoverSubCamiones:Dispatch<SetStateAction<boolean>>;
  setHoverMultiproposito:Dispatch<SetStateAction<boolean>>;
  setHoverSubProductos:Dispatch<SetStateAction<boolean>>
}


const SubMultiproposito:React.FC<Props> = ({hoverMultiproposito,setHoverMultiproposito,setHoverSubProductos,hoverSubCamiones,setHoverSubCamiones}) =>{
    
    const outHover = ()=>{
        setHoverMultiproposito(false)
        setHoverSubProductos(false)
    }
    
    return(
       <>
        <div className={` text-white md:ml-10 lg:ml-36 xl:ml-[504px] mr-96 ${hoverMultiproposito ? 'flex' : 'hidden'}`} onMouseLeave={()=>outHover()}>
            <div className="z-30  bg-[#1E1E1E] fixed top-[63px]">
                <a href="https://ecoalliance.cl/camion-multiproposito/" className="text-white text-xs py-4 flex border-b border-slate-600 pl-10 pr-5 ">CAMIÓN MULTIPROPÓSITO<IoMdArrowDropright className="text-lg"/></a>
            </div>
        </div>
       </>
    )
}

export default SubMultiproposito
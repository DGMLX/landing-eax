import { Dispatch, SetStateAction } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import SubCamionesV2 from "./SubCamionesV2/SubCamionesV2";

type Props = {
  hoverMultiproposito: boolean;
  hoverSubCamiones:boolean;
  setHoverSubCamiones:Dispatch<SetStateAction<boolean>>;
  setHoverMultiproposito:Dispatch<SetStateAction<boolean>>;
  setHoverSubProductos:Dispatch<SetStateAction<boolean>>
}


const SubMultipropositoV2:React.FC<Props> = ({hoverMultiproposito,setHoverMultiproposito,setHoverSubProductos,hoverSubCamiones,setHoverSubCamiones}) =>{
    
    const outHover = ()=>{
        if(hoverSubCamiones){
            setHoverMultiproposito(true)
            setHoverSubProductos(true)
        }else{
            setHoverMultiproposito(false)
            setHoverSubProductos(false)
        }
    }

    const onHoverCamiones = () =>{
        setHoverSubProductos(true)
        setHoverMultiproposito(true)
        setHoverSubCamiones(true)
    }
    

    const hoverBonus = () =>{
        setHoverSubProductos(false)
        setHoverMultiproposito(false)
        setHoverSubCamiones(false)
    }

    return(
       <>
        <div className={` text-white md:!ml-10 lg:!ml-[436px] xl:!ml-[515px] mr-96 ${hoverMultiproposito ? 'flex' : 'hidden'}`} onMouseLeave={()=>outHover()}>
            <div className="z-50  bg-[#1E1E1E] fixed top-[120px]">
                <a onMouseEnter={()=>onHoverCamiones()} href="https://ecoalliance.cl/camion-multiproposito/" className="text-white text-xs pt-3 pb-[15px] flex pl-10 pr-5 ">CAMIÓN MULTIPROPÓSITO<IoMdArrowDropright className="text-lg"/></a>
                <div className="bg-[#1E1E1E] h-[5px]" onMouseEnter={()=>hoverBonus()}></div>
            </div>
           
        </div>

        <SubCamionesV2 hoverSubCamiones={hoverSubCamiones} setHoverSubCamiones={setHoverSubCamiones} setHoverSubProductos={setHoverSubProductos} setHoverMultiproposito={setHoverMultiproposito}/>
       </>
    )
}

export default SubMultipropositoV2
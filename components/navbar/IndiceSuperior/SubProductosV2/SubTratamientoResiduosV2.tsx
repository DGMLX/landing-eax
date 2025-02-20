import { Dispatch, SetStateAction } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import SubChipeadorasV2 from "./SubChipeadorasV2/SubChipeadorasV2";

type Props = {
    hoverTratamientoResiduos: boolean;
    hoverSubChipeadoras:boolean;
    setHoverTratamientoResiduos:Dispatch<SetStateAction<boolean>>;
    setHoverSubProductos:Dispatch<SetStateAction<boolean>>;
    setHoverSubChipeadoras:Dispatch<SetStateAction<boolean>>;
    setHoverSubCamiones:Dispatch<SetStateAction<boolean>>;
}


const SubTratamientoResiduosV2:React.FC<Props> = ({hoverTratamientoResiduos,setHoverTratamientoResiduos,setHoverSubProductos,hoverSubChipeadoras,setHoverSubChipeadoras,setHoverSubCamiones}) =>{

   
    const outHover = ()=>{
        if(hoverSubChipeadoras){
            setHoverSubProductos(true)
            setHoverTratamientoResiduos(true)
        }else{
            setHoverTratamientoResiduos(false)
            setHoverSubProductos(false)
        }
    }

    const onHoverSubChipeadoras = () =>{
        setHoverSubProductos(true)
        setHoverTratamientoResiduos(true)
        setHoverSubChipeadoras(true)
        setHoverSubCamiones(false)
      }
    
    const onhoverNav = () =>{
        setHoverSubChipeadoras(false)
    }

    const hoverBonus = () =>{
        setHoverSubProductos(false)
        setHoverTratamientoResiduos(false)
        setHoverSubChipeadoras(false)
        setHoverSubCamiones(false)
    }
     

    return(
        <>
            <div className={` text-white md:ml-10 lg:ml-[436px] xl:ml-[499px]   mr-96 ${hoverTratamientoResiduos ? 'flex' : 'hidden'}`} onMouseLeave={()=>outHover()}>
                <div className="z-50  bg-[#1E1E1E] fixed top-[171px] ">
                    <div className="bg-[#1E1E1E] h-[5px]" onMouseEnter={()=>hoverBonus()}></div>
                    <a onMouseEnter={()=>onHoverSubChipeadoras()} href="https://ecoalliance.cl/chipeadoras/" className="text-white text-xs pt-4 pb-[11px] flex border-b border-slate-600 pl-12 pr-5">CHIPEADORAS<IoMdArrowDropright className="text-lg"/></a>
                    <a onMouseEnter={()=>onhoverNav()} href="https://ecoalliance.cl/briquetadoras/" className="text-white text-xs pt-4 pb-[17.5px] flex border-b border-slate-600 pl-12 pr-5 ">BRIQUETADORAS</a>
                    <a  onMouseEnter={()=>onhoverNav()}href="https://ecoalliance.cl/trituradoras/" className="text-white text-xs pt-4 pb-[18.5px] flex border-b border-slate-600 pl-12 pr-5 ">TRITURADORAS</a>
                    <a onMouseEnter={()=>onhoverNav()} href="https://ecoalliance.cl/cribas/" className="text-white text-xs pt-4 pb-[25px] flex border-b border-slate-600 pl-12 pr-5 ">CRIBAS</a>
                    <a onMouseEnter={()=>onhoverNav()} href="https://ecoalliance.cl/compost/" className="text-white text-xs pt-4 pb-[17.5px] flex pl-12 pr-5 ">COMPOST</a>
                </div>
            </div>

            <SubChipeadorasV2 hoverSubChipeadoras={hoverSubChipeadoras} setHoverSubChipeadoras={setHoverSubChipeadoras} setHoverSubProductos={setHoverSubProductos} setHoverTratamientoResiduos={setHoverTratamientoResiduos}/>
        </>
    )
}

export default SubTratamientoResiduosV2
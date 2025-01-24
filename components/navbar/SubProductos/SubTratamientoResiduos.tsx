import { Dispatch, SetStateAction } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import SubChipeadoras from "./SubChipeadoras/SubChipeadoras";

type Props = {
    hoverTratamientoResiduos: boolean;
    hoverSubChipeadoras:boolean;
    setHoverTratamientoResiduos:Dispatch<SetStateAction<boolean>>;
    setHoverSubProductos:Dispatch<SetStateAction<boolean>>;
    setHoverSubChipeadoras:Dispatch<SetStateAction<boolean>>;
}


const SubTratamientoResiduos:React.FC<Props> = ({hoverTratamientoResiduos,setHoverTratamientoResiduos,setHoverSubProductos,hoverSubChipeadoras,setHoverSubChipeadoras}) =>{

   
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
      }
    

    return(
        <>
            <div className={` text-white md:ml-10 lg:ml-[440px] xl:ml-[504px]   mr-96 ${hoverTratamientoResiduos ? 'flex' : 'hidden'}`} onMouseLeave={()=>outHover()}>
                <div className="z-30  bg-[#1E1E1E] fixed top-[114px] ">
                    <a onMouseEnter={()=>onHoverSubChipeadoras()} href="https://ecoalliance.cl/chipeadoras/" className="text-white text-xs py-4 flex border-b border-slate-600 pl-10 pr-5">CHIPEADORAS<IoMdArrowDropright className="text-lg"/></a>
                    <a href="https://ecoalliance.cl/briquetadoras/" className="text-white text-xs py-4 flex border-b border-slate-600 pl-10 pr-5 ">BRIQUETADORAS</a>
                    <a href="https://ecoalliance.cl/trituradoras/" className="text-white text-xs py-4 flex border-b border-slate-600 pl-10 pr-5 ">TRITURADORAS</a>
                    <a href="https://ecoalliance.cl/cribas/" className="text-white text-xs py-4 flex border-b border-slate-600 pl-10 pr-5 ">CRIBAS</a>
                    <a href="https://ecoalliance.cl/compost/" className="text-white text-xs py-4 flex border-b border-slate-600 pl-10 pr-5 ">COMPOST</a>
                </div>
            </div>

            <SubChipeadoras hoverSubChipeadoras={hoverSubChipeadoras} setHoverSubChipeadoras={setHoverSubChipeadoras} setHoverSubProductos={setHoverSubProductos} setHoverTratamientoResiduos={setHoverTratamientoResiduos}/>
        </>
    )
}

export default SubTratamientoResiduos
import { Dispatch, SetStateAction } from "react";

type Props = {
    hoverSubChipeadoras: boolean;
    setHoverSubProductos:Dispatch<SetStateAction<boolean>>;
    setHoverSubChipeadoras:Dispatch<SetStateAction<boolean>>;
    setHoverTratamientoResiduos:Dispatch<SetStateAction<boolean>>;
}

const SubChipeadorasV2:React.FC<Props> = ({hoverSubChipeadoras,setHoverSubChipeadoras,setHoverSubProductos,setHoverTratamientoResiduos}) =>{
    
    const outHover = ()=>{
        setHoverSubProductos(false)
        setHoverSubChipeadoras(false)
        setHoverTratamientoResiduos(false)
      
    }
    
    return(
        <>
         <div className={` text-white md:ml-10 lg:ml-[600px] xl:ml-[671px]   mr-96 ${hoverSubChipeadoras ? 'flex' : 'hidden'}`} onMouseLeave={()=>outHover()}>
            <div className="z-50  bg-[#1E1E1E] fixed top-[171px] ">
                <a  href="https://landing-eax.vercel.app/eliet" className="text-white text-xs pt-4 pb-[18px] flex border-b border-slate-600 pl-10 pr-5 ">TAMAÑO PEQUEÑO Y MEDIANO</a>
                <a href="https://landing-eax.vercel.app/jensen" className="text-white text-xs pt-4 pb-[18px] flex pl-10 pr-5 ">GRAN TAMAÑO</a>

            </div>
        </div>
        </>
    )
}

export default SubChipeadorasV2;
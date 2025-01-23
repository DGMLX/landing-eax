import { Dispatch, SetStateAction } from "react";

type Props = {
    hoverSubChipeadoras: boolean;
    setHoverSubProductos:Dispatch<SetStateAction<boolean>>;
    setHoverSubChipeadoras:Dispatch<SetStateAction<boolean>>;
    setHoverTratamientoResiduos:Dispatch<SetStateAction<boolean>>;
}

const SubChipeadoras:React.FC<Props> = ({hoverSubChipeadoras,setHoverSubChipeadoras,setHoverSubProductos,setHoverTratamientoResiduos}) =>{
    
    const outHover = ()=>{
        setHoverTratamientoResiduos(false)
        setHoverSubChipeadoras(false)
        setHoverSubProductos(false)
    }
    
    return(
        <>
         <div className={` text-white md:ml-10 lg:ml-36 xl:ml-[669px]   mr-96 ${hoverSubChipeadoras ? 'flex' : 'hidden'}`} onMouseLeave={()=>outHover()}>
            <div className="z-30  bg-[#1E1E1E] fixed top-[114px] ">
                <a  href="https://landing-eax.vercel.app/chipeadoras/eliet" className="text-white text-xs py-4 flex border-b border-slate-600 pl-10 pr-5 ">PEQUEÑO Y MEDIANO TAMAÑO</a>
                <a href="https://landing-eax.vercel.app/chipeadoras/jensen" className="text-white text-xs py-4 flex border-b border-slate-600 pl-10 pr-5 ">GRAN TAMAÑO</a>

            </div>
        </div>
        </>
    )
}

export default SubChipeadoras;
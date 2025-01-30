import { Dispatch, SetStateAction } from "react";

type Props = {
    hoverEspaciosPublicos: boolean;
    setHoverEspaciosPublicos:Dispatch<SetStateAction<boolean>>;
    setHoverSubProductos:Dispatch<SetStateAction<boolean>>
}


const SubEspaciosPublicos:React.FC<Props> = ({hoverEspaciosPublicos,setHoverEspaciosPublicos,setHoverSubProductos}) =>{
    
    const outHover = ()=>{
        setHoverEspaciosPublicos(false)
        setHoverSubProductos(false)
    }

    return(
        <>
            <div className={` text-white md:ml-10 lg:ml-[436px] xl:ml-[499px] mr-96 ${hoverEspaciosPublicos ? 'flex' : 'hidden'}`} onMouseLeave={()=>outHover()}>
                <div className="z-30  bg-[#1E1E1E] fixed top-[266px] ">
                    <a href="https://ecoalliance.cl/basureros-urbanos/" className="text-white text-xs pt-[19px] pb-[22.5px] flex border-b border-slate-600 pl-10 pr-5 ">BASUREROS URBANOS</a>
                </div>
            </div>
        </>
    )
}

export default SubEspaciosPublicos
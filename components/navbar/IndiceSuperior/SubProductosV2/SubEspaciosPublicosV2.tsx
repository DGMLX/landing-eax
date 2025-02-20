import { Dispatch, SetStateAction } from "react";

type Props = {
    hoverEspaciosPublicos: boolean;
    setHoverEspaciosPublicos:Dispatch<SetStateAction<boolean>>;
    setHoverSubProductos:Dispatch<SetStateAction<boolean>>
}


const SubEspaciosPublicosV2:React.FC<Props> = ({hoverEspaciosPublicos,setHoverEspaciosPublicos,setHoverSubProductos}) =>{
    
    const outHover = ()=>{
        setHoverEspaciosPublicos(false)
        setHoverSubProductos(false)
    }

    return(
        <>
            <div className={` text-white md:ml-10 lg:ml-[436px] xl:ml-[515px] mr-96 ${hoverEspaciosPublicos ? 'flex' : 'hidden'}`} onMouseLeave={()=>outHover()}>
                <div className="z-50  bg-[#1E1E1E] fixed top-[323px] ">
                    <a href="https://ecoalliance.cl/basureros-urbanos/" className="text-white text-xs pt-[19px] pb-[25.5px] flex pl-10 pr-5 ">BASUREROS URBANOS</a>
                </div>
            </div>
        </>
    )
}

export default SubEspaciosPublicosV2
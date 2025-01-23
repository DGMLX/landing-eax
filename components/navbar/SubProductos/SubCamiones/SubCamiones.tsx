import { Dispatch, SetStateAction } from "react";

type Props = {
  hoverSubCamiones:boolean;
  setHoverSubCamiones:Dispatch<SetStateAction<boolean>>;
  setHoverMultiproposito:Dispatch<SetStateAction<boolean>>;
  setHoverSubProductos:Dispatch<SetStateAction<boolean>>
}


const SubCamiones:React.FC<Props> = ({hoverSubCamiones,setHoverMultiproposito,setHoverSubCamiones,setHoverSubProductos}) =>{
    const outHover = ()=>{
        setHoverMultiproposito(false)
        setHoverSubCamiones(false)
        setHoverSubProductos(false)
    }
    
    return(
        <>
         <div className={` text-white md:ml-10 lg:ml-36 xl:ml-[740px]   mr-96 ${hoverSubCamiones ? 'flex' : 'hidden'}`} onMouseLeave={()=>outHover()}>
            <div className="z-30  bg-[#1E1E1E] fixed top-[63px] ">
                <a   href="https://ecoalliance.cl/camiones-multiproposito/" className="text-white text-xs py-4 flex border-b border-slate-600 pl-10 pr-5 ">CAMIONES MULTIPROPÓSITO</a>
                <a href="https://ecoalliance.cl/accesorios-multiproposito/" className="text-white text-xs py-4 flex border-b border-slate-600 pl-10 pr-5 ">ACCESORIOS MULTIPROPÓSITO</a>

            </div>
        </div>
        </>
    )
}

export default SubCamiones;
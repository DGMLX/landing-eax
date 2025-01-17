import Image from "next/image"


const ChatFlotante = () =>{
    return(
        
        <div className="fixed right-24 bottom-28">
            <div className="bg-slate-800 w-20 flex absolute justify-center h-20 items-center rounded-full shadow-lg shadow-orange-300">
              <Image src="/logos_generales/LOGO-EAX.png" width={50} height={50} className="text-white text-2xl" alt="Logo EAX"/>
            </div>
        </div>
        
    )
}

export default ChatFlotante
'use client'

import Image from "next/image";
import { useParams } from "next/navigation";
import data from "../../../../data/eliet"; 
import { useEffect, useState } from "react";
import FormularioHubspot from "@/components/formularios/FormularioHubspot";
import { TbNoteOff } from "react-icons/tb";
import Link from "next/link";
import Modal from "@/components/modal/Modal";
import ModelViewer from "@/components/modelo3D/ModelViewer";
import { textoCapitalizado } from "@/lib/helpers";




const ModeloEliet = () => {

    const params = useParams()
    const modelo = params.modelo as string
    const categoria = params.categoria as string
    
    const producto = data.filter(prod=>prod.params === modelo && prod.categoria === categoria.replace(/-/g,' '))

    const [modelo3D,setModelo3D] = useState(true)
    const [imagen1,setImagen1] = useState(false)
    const [imagen2,setImagen2] = useState(false)
    const [imagen3,setImagen3] = useState(false)
    const [imagen4,setImagen4] = useState(false)

    useEffect(()=>{
        if(modelo3D && producto[0].modelo3D === ''){
            setModelo3D(false)
            setImagen1(true)
        }
    },[])


    const [modalVisible,setModalVisible] = useState(false);
    const [selectedImage,setSelectedImage] = useState('');


    const handleImgClick = (imgUrl:string) =>{
        setSelectedImage(imgUrl)
        setModalVisible(true);
    }

    const closeModal = () =>{
        setModalVisible(false);
        setSelectedImage('')
    }

    return(
        <>
                {/* <div className="px-10 sm:px-16 mt-14"> */}
                <div className="px-10 sm:px-16 mt-32">
                    <div className="font-extralight text-sm">
                        <a href="/eliet">Eliet</a> {' > '} 
                        <Link href={`/eliet/${categoria}`}>{textoCapitalizado(categoria.replace(/-/g,' '))}</Link> {' > '} 
                        <span className="text-red-600 underline">{textoCapitalizado(modelo.replace(/-/g,' '))}</span>
                    </div>
                </div>
              <section  className="px-5 sm:px-10 md:px-32 xl:px-24 mt-10 xl:flex mb-10">

             
                {
                    modalVisible && <Modal imageUrl={selectedImage} onClose = {closeModal}/>
                }

              

                <div className="w-1/2 border rounded-xl hidden xl:block">
                    <div className="flex justify-center mt-5 mb-10">
                        
                       
                            <>
                                { modelo3D && producto[0].modelo3D !== '' ?
                                    <div style={{ width: '100%' }} className="h-[300px]">
                                    <ModelViewer
                                        src={producto[0].modelo3D}
                                        alt="Modelo 3D" 
                                        auto-rotate 
            
                                        camera-controls
                                        style={{ width: '100%', height: '100%' }} 
                                    />
                                    </div> : undefined
                                }
                                {
                                    imagen1 && <Image src={producto[0].imagen[0]} alt={producto[0].alt} width={300} height={300} onClick={()=>handleImgClick(producto[0].imagen[0])} className="cursor-pointer"/>
                                }
                                {
                                    imagen2 && <Image src={producto[0]?.imagen[1]} alt={producto[0].alt} width={300} height={300} onClick={()=>handleImgClick(producto[0].imagen[1])} className="cursor-pointer"/>
                                }
                                {
                                    imagen3 && <Image src={producto[0]?.imagen[2]} alt={producto[0].alt} width={300} height={300} onClick={()=>handleImgClick(producto[0].imagen[2])} className="cursor-pointer"/>
                                }
                                {
                                    imagen4 && <Image src={producto[0]?.imagen[3]} alt={producto[0].alt} width={300} height={300} onClick={()=>handleImgClick(producto[0].imagen[3])} className="cursor-pointer"/>
                                } 
                            </>
                        

                        {/* {
                            imagen1 && <Image src={producto[0].imagen[0]} alt={producto[0].alt} width={300} height={300} onClick={()=>handleImgClick(producto[0].imagen[0])} className="cursor-pointer"/>
                        }
                        {
                            imagen2 && <Image src={producto[0]?.imagen[1]} alt={producto[0].alt} width={300} height={300} onClick={()=>handleImgClick(producto[0].imagen[1])} className="cursor-pointer"/>
                        }
                        {
                            imagen3 && <Image src={producto[0]?.imagen[2]} alt={producto[0].alt} width={300} height={300} onClick={()=>handleImgClick(producto[0].imagen[2])} className="cursor-pointer"/>
                        }
                        {
                            imagen4 && <Image src={producto[0]?.imagen[3]} alt={producto[0].alt} width={300} height={300} onClick={()=>handleImgClick(producto[0].imagen[3])} className="cursor-pointer"/>
                        }  */}
                         
                    </div>
                        
                            <div className="flex justify-center mb-4">
                                    {
                                        producto[0].modelo3D !== '' &&
                                        <div className="w-1/5" onClick={()=>{
                                            setModelo3D(true)
                                            setImagen1(false)
                                            setImagen2(false)
                                            setImagen3(false)
                                            setImagen4(false)
                                        }
                                        }>
                                            <ModelViewer
                                                src={producto[0].modelo3D}
                                                alt="Modelo 3D" 
                                                auto-rotate 
                                                camera-controls
                                                style={{ width: '100%', height: '100%' }} 
                                                />
                                        </div>
                                    }

                                    <Image src={producto[0].imagen[0]} alt={producto[0].alt} width={90} height={90} className={`w-1/5 m-1 cursor-pointer ${imagen1 && "border rounded-xl "}`} onClick={()=>{
                                        setImagen1(true)
                                        setImagen2(false)
                                        setImagen3(false)
                                        setImagen4(false)
                                        setModelo3D(false)
                                    }}/>

                                    {
                                        producto[0].imagen[1] ? 
                                        <Image src={producto[0]?.imagen[1]} alt={producto[0].alt} width={90} height={90} className={`w-1/5 m-1 cursor-pointer ${imagen2 && "border rounded-xl "}`} onClick={()=>{
                                            setImagen1(false)
                                            setImagen2(true)
                                            setImagen3(false)
                                            setImagen4(false)
                                            setModelo3D(false)
                                        }}/> : ''
                                    }
                                    {
                                        producto[0].imagen[2] ?
                                        <Image src={producto[0]?.imagen[2]} alt={producto[0].alt} width={90} height={90} className={`w-1/5 m-1 cursor-pointer ${imagen3 && "border rounded-xl "}`} onClick={()=>{
                                            setImagen1(false)
                                            setImagen2(false)
                                            setImagen3(true)
                                            setImagen4(false)
                                            setModelo3D(false)
                                        }}/> : ''
        
                                    }
                                    
                                    {
                                        producto[0].imagen[3] ? 
                                        <Image src={producto[0]?.imagen[3]} alt={producto[0].alt} width={90} height={90} className={`w-1/5 m-1 cursor-pointer ${imagen4  && "border rounded-xl "}`} onClick={()=>{
                                            setImagen1(false)
                                            setImagen2(false)
                                            setImagen3(false)
                                            setImagen4(true)
                                        }}/> : ''
                                    }
                                    
                            </div>
                            
                </div>


                <div className="w-full xl:w-1/2  xl:ml-32">
                    <div>
                        <h1 className="text-2xl ">Trituradora {producto[0].modelo}</h1>
                    </div>
                    <p className="text-sm">Trituradoras Eliet</p>
                    {/* <p className="font-bold mt-2">$15.340.230</p> */}
                    {/* <div className="mt-2 mb-10">
                        <button className="border border-black py-2 px-12 rou
                        nded-xl mr-3 hover:bg-black hover:text-white">Diésel</button>
                        <button className="border border-black py-2 px-12 rounded-xl  hover:bg-black hover:text-white">Gasolina</button>
                    </div> */}
                    <p className="mb-5 mt-5">{producto[0].descripcion}</p>
                    <p className="mb-5 mt-5">{producto[0].descripcion2}</p>
                    <p className="mb-5 mt-5">{producto[0].descripcion3}</p>
                    <p className="mb-5 mt-5">{producto[0].descripcion4}</p>
                    

                    



                    <div className="   flex justify-center xl:hidden">
                        <div className="w-3/4 border rounded-xl">
                            <div className="flex justify-center mt-5 mb-10">
                        
                                {
                                    imagen1 && <Image src={producto[0].imagen[0]} alt={producto[0].alt} width={300} height={400} onClick={()=>handleImgClick(producto[0].imagen[0])} className="cursor-pointer"/>
                                }
                                {
                                    imagen2 && <Image src={producto[0].imagen[1]} alt={producto[0].alt} width={300} height={400}  onClick={()=>handleImgClick(producto[0].imagen[1])} className="cursor-pointer"/>
                                }
                                {
                                    imagen3 && <Image src={producto[0].imagen[2]} alt={producto[0].alt} width={300} height={400}  onClick={()=>handleImgClick(producto[0].imagen[2])} className="cursor-pointer"/>
                                }
                                {
                                    imagen4 && <Image src={producto[0].imagen[3]} alt={producto[0].alt} width={300} height={400}  onClick={()=>handleImgClick(producto[0].imagen[3])} className="cursor-pointer"/>
                                }
                                
                            </div>
                            <div className="flex justify-center mb-4">
                                    <Image src={producto[0].imagen[0]} alt={producto[0].alt} width={2000} height={2000} className={`w-1/5 m-1 cursor-pointer  ${imagen1 && "border rounded-xl "}`} onClick={()=>{
                                        setImagen1(true)
                                        setImagen2(false)
                                        setImagen3(false)
                                        setImagen4(false)
                                    }}/>
                        
                                    {
                                         producto[0].imagen[1] &&
                                            <Image src={producto[0].imagen[1]} alt={producto[0].alt} width={90} height={90} className={`w-1/5 m-1 cursor-pointer  ${imagen2 && "border rounded-xl "}`} onClick={()=>{
                                                setImagen1(false)
                                                setImagen2(true)
                                                setImagen3(false)
                                                setImagen4(false)
                                            }}/>
                                    }
                                    {
                                         producto[0].imagen[2] &&
                                            <Image src={producto[0].imagen[2]} alt={producto[0].alt} width={90} height={90} className={`w-1/5 m-1 cursor-pointer  ${imagen3 && "border rounded-xl "}`} onClick={()=>{
                                                setImagen1(false)
                                                setImagen2(false)
                                                setImagen3(true)
                                                setImagen4(false)
                                            }}/>
                                    }
                                    {
                                        producto[0].imagen[3] &&
                                        <Image src={producto[0].imagen[3]} alt={producto[0].alt} width={90} height={90} className={`w-1/5 m-1 cursor-pointer  ${imagen4 && "border rounded-xl "}`} onClick={()=>{
                                            setImagen1(false)
                                            setImagen2(false)
                                            setImagen3(false)
                                            setImagen4(true)
                                        }}/>
                                    }
                                    
                            </div>
                        </div>
                    </div>


                    <div className="flex  mt-10">
                    
                        <a href="#hubspot" className="bg-black text-center text-white py-2 px-10 xl:px-32 rounded-xl w-full">Solicitar producto</a>
                    </div>
  
                </div>



              
             </section>

             <section className="px-12 xl:px-24 mb-20 xl:flex justify-between ">
                
                <div className="xl:w-1/2 xl:flex justify-center xl:mr-2 hidden">
                     <div className="w-full">
                        <h2 className="font-bold text-center xl:text-start">Dimensiones / Plano</h2>
                        <div className="flex justify-center items-center h-full">
                            <TbNoteOff className="text-4xl"/>
                            <p className="text-2xl">Plano no disponible</p>
                        </div>
                    </div> 
                </div>
             

                <div className="w-full md:w-1/2 xl:ml-32">

                    <h2 className=" font-bold mb-5">Especificaciones generales</h2>
                    <p className="mb-5 border-t-2 pt-2 border-black">Modelo: {producto[0].modelo}</p>
                    {
                        producto[0].produccion !== '' &&  <p className="mb-5 border-t-2 pt-2 border-black">Producción: {producto[0].produccion}</p>
                    }
                    {
                        producto[0].diametro_entrada !== '' && <p className="mb-5 border-t-2 pt-2 border-black">Diámetro de entrada: {producto[0].diametro_entrada}</p>
                    }
                    {
                        producto[0].motor !== '' && <p className="mb-5 border-t-2 pt-2 border-black">Motor: {producto[0].motor}</p>
                    }
                    {
                        producto[0].dimensiones !== '' && <p className="mb-5 border-t-2 pt-2 border-black">Dimensiones: {producto[0].dimensiones}</p>
                    }
                    {
                        producto[0].peso !== '' && <p className="mb-5 border-y-2 pt-2 pb-2 border-black">Peso: {producto[0].peso}</p>
                    }
                                    
                </div>
              
             </section>

            <div id="hubspot">
                <FormularioHubspot  />
            </div>
        </>
    )
}

export default ModeloEliet;
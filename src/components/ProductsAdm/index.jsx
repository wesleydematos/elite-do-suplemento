"use client"

import {useProductStore} from "@/store/zustand"
import Image from "next/image"

export default function ProductsAdm (){
  const {allProducts, setExclude, setEdit, setProductId} = useProductStore()

  return(
    <section>
      {
        !!allProducts.length ?
        <ul className="mb-4 flex flex-col gap-3 justify-center">
          {
            allProducts.map((product)=>{
              return (
                <li 
                  key={product.id}
                  className="flex flex-col md:flex-row w-full bg-white rounded-xl p-2 shadow-lg md:gap-[0.15rem] md:justify-between"
                >
                  <Image 
                    width={100} 
                    height={100} 
                    src={product.imageURL} 
                    alt={product.name} 
                    className="mix-blend-multiply self-center mb-2"
                  />
                  <p className="self-center font-semibold md:w-[130px] md:text-center lg:w-[300px] lg:text-start">{`${product.name} ${product.brand}`}</p>
                  <p className="self-center font-semibold mb-2 md:w-[100px] lg:w-[200px] md:text-center lg:text-start">{`${product.weight} ${!!product.flavor ?  "- " + product.flavor  : ""}`}</p>
                  <div className="flex flex-col self-center gap-2">
                    <button 
                      className="bg-primary rounded text-white px-2"
                      onClick={()=>{setProductId(product.id); setEdit(true)}}
                    >
                      Editar
                    </button>
                    <button 
                      className="bg-accent rounded text-white px-2"
                      onClick={()=>{setProductId(product.id); setExclude(true)}}
                    >
                      Excluir
                    </button>
                  </div>
                </li>
              )
            })
          }
        </ul>
        :
        <p className="self-center mt-5 font-bold text-xl text-primary">Carregando produtos...</p>
      }
    </section>
  )
}
"use client"

import {useProductStore} from "@/store/zustand"

export default function ProductsAdm (){
  const {allProducts, setAllProducts} = useProductStore()

  return(
    <section>
      {
        !!allProducts.length ?
        <div>
          {
            allProducts.map((item)=>{
              return (
                <p key={item.id}>{item.name}</p>
              )
            })
          }
        </div>
        :
        <p className="self-center mt-5 font-bold text-xl text-primary">Carregando produtos...</p>
      }
    </section>
  )
}
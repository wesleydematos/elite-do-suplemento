"use client"

import Image from "next/image"
import {useEffect} from "react"
import Loading from "../Loading"
import {useProductStore} from "@/store/zustand"
import axios from "axios"

export default function ProductsAdm (){
  const {allProducts, setAllProducts, setExclude, setEdit, setProduct} = useProductStore()

  async function getData(){
    const {data} = await axios.get("/api/product")
    setAllProducts(data)
  }
  
  useEffect(()=>{
    getData()
  },[])

  const allTypes = {
    others: "Outros",
    preWorkout: "Pré-treino",
    protein: "Proteína",
    creatine: "Creatina"
  }

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
                  className="flex flex-col md:flex-row w-full bg-white rounded-xl p-2 shadow-lg md:gap-[0.15rem] md:justify-between text-black"
                >
                  <Image 
                    width={100} 
                    height={100} 
                    src={product.imageURL} 
                    alt={product.name} 
                    className="mix-blend-multiply self-center mb-2"
                  />
                  <p className="self-center font-semibold md:w-[130px] md:text-center lg:w-[300px] lg:text-start">{`${product.name} ${product.brand}`}</p>
                  <p className="self-center font-semibold md:w-[130px] md:text-center lg:w-[300px] lg:text-start">{`${allTypes[product.type]}`}</p>
                  <p className="self-center font-semibold mb-2 md:w-[100px] lg:w-[200px] md:text-center lg:text-start">{`${product.weight} ${!!product.flavor ?  "- " + product.flavor  : ""}`}</p>
                  <div className="flex flex-col self-center gap-2 mr-2">
                    <button 
                      className="bg-primary rounded text-white px-2"
                      onClick={()=>{setProduct(product); setEdit(true)}}
                    >
                      Editar
                    </button>
                    <button 
                      className="bg-accent rounded text-white px-2"
                      onClick={()=>{setProduct(product); setExclude(true)}}
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
        <div className="self-center mt-5">
          <h2 className="font-bold text-2xl text-center text-primary">Carregando produtos...</h2>
          <Loading/>
        </div>
      }
    </section>
  )
}
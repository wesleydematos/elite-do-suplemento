"use client"

import { useEffect, useState } from "react"

export default function Carrinho() {
  const [products, setProducts] = useState([])
  const [productsChanged, setProductsChanged] = useState(false)

  useEffect(()=>{
    const allProducts = localStorage.getItem("productsCart")
    setProducts(JSON.parse(allProducts))
  }, [productsChanged])


    return (
      <main className="bg-body min-h-screen flex flex-col">
        <h1 className="font-bold text-xl md:text-5xl self-center my-3 text-primary">MEU CARRINHO DE COMPRAS</h1>
        {
          !!products ? 
          <>tem produto</> 
          : 
          <>n tem produto</>
        }
      </main>
    )
  }
  
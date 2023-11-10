"use client"

import Image from "next/image"
import logo from "../../../public/elite.png"
import { useEffect, useState } from "react"
import { FaShoppingCart } from "react-icons/fa"
import { BiArrowBack } from "react-icons/bi"

export default function Carrinho() {
  const [products, setProducts] = useState([])
  const [productsChanged, setProductsChanged] = useState(false)

  useEffect(()=>{
    const allProducts = localStorage.getItem("productsCart")
    setProducts(JSON.parse(allProducts))
  }, [productsChanged])


    return (
      <main className="bg-body min-h-screen flex flex-col">
        <div className="bg-secondary h-[25px] text-white flex justify-center items-center gap-2">
          <FaShoppingCart/>
          <p className="text-xs">MEU CARRINHO</p>
        </div>
        <header className="bg-white shadow-md w-full flex items-center justify-center h-[75px]">
          <Image src={logo} width={50} height={50} alt="logo elite suplementos"/>
          <h1 className="font-semibold ml-3 text-xl md:text-3xl text-primary">ELITE SUPLEMENTOS</h1>
        </header>
        <section className="flex flex-col items-start px-4 lg:px-6 xl:px-32 py-2 mt-2">
          <a href="/" className="p-2 rounded-md text-white bg-primary flex items-center gap-2">
            <BiArrowBack/> Continuar comprando
          </a>
          {
            !!products ? 
            <div className="mt-2">tem produto</div> 
            : 
            <div className="mt-5 flex flex-col self-center text-primary text-center gap-3">
              <FaShoppingCart className="text-8xl w-[300px]"/>
              <p className="text-xl font-bold w-[300px]">SEU CARRINHO ESTÁ VAZIO</p>
            </div> 
          }
        </section>
      </main>
    )
  }
  
"use client"

import Image from "next/image"
import logo from "../../../public/elite.png"
import { useEffect, useState } from "react"
import { FaShoppingCart } from "react-icons/fa"
import { FaUpLong, FaDownLong } from "react-icons/fa6"
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
        <header className="bg-white shadow-md w-full flex items-center justify-center h-[70px]">
          <Image src={logo} width={50} height={50} alt="logo elite suplementos"/>
          <h1 className="font-semibold ml-3 text-xl md:text-2xl text-primary">ELITE SUPLEMENTOS</h1>
        </header>
        <section className="flex flex-col items-start px-4 lg:px-6 xl:px-32 py-2 mt-2">
          <a href="/" className="p-2 rounded-md text-white bg-primary flex items-center gap-2">
            <BiArrowBack/> Continuar comprando
          </a>
          {
            !!products ? 
            <div className="mt-2 w-full">
              <ul className="my-4 flex flex-col gap-3 justify-center">
                {products.map((product)=>{
                  return (
                    <li key={product.id} className="flex flex-col md:flex-row w-full bg-white rounded-xl p-2 shadow-lg md:gap-[0.15rem] md:justify-between">
                      <Image 
                        width={100} 
                        height={100} 
                        src={product.imageURL} 
                        alt={product.name} 
                        className="mix-blend-multiply self-center mb-2"
                      />
                      <p className="self-center font-semibold md:w-[130px] md:text-center lg:w-[300px] lg:text-start">{`${product.name} ${product.brand}`}</p>
                      <p className="self-center font-semibold mb-2 md:w-[100px] lg:w-[200px] md:text-center lg:text-start">{`${product.weight} ${!!product.flavor ?  "- " + product.flavor  : ""}`}</p>
                      <div className="flex w-[full] justify-between md:self-center md:gap-[5px] lg:min-w-[250px]">
                        <div className="flex flex-col">
                          <p className=" font-semibold">Unidade:</p>
                          <span>R${product.price},00</span>
                        </div>
                        <div className="flex flex-col">
                          <p className=" font-semibold">Quant:</p>
                          <div className="flex gap-1 self-center">
                            <button className="text-[12px]"><FaUpLong/></button>
                            <span>{product.quantity}</span>
                            <button className="text-[12px]"><FaDownLong/></button>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <p className=" font-semibold">Total:</p>
                          <p>R${product.price * product.quantity},00</p>
                        </div>
                      </div>
                      <button 
                        className="text-white mt-2 bg-accent rounded-md w-1/2 self-center hover:scale-95 md:w-[110px] lg:mr-1"
                      >
                        Remover
                      </button>
                    </li>
                  )
                })}
              </ul>
              {
              products && 
                <>
                  <p className="text-xl font-bold my-2 text-primary">Total: R$200,00</p>
                  <a href="" className="rounded-md text-white bg-primary flex items-center gap-2 w-fit py-2 px-5">Solicitar pedido</a>
                </>
              }
            </div> 
            : 
            <div className="mt-16 flex flex-col self-center text-primary text-center gap-3">
              <FaShoppingCart className="text-8xl w-[300px]"/>
              <p className="text-xl font-bold w-[300px]">SEU CARRINHO ESTÁ VAZIO</p>
            </div> 
          }
        </section>
      </main>
    )
  }
  
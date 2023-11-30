"use client"

import Image from "next/image"
import logo from "../../../public/elite.png"
import {fadeIn} from "@/styles/variants"
import {motion} from "framer-motion"
import {useEffect, useState} from "react"
import {FaShoppingCart} from "react-icons/fa"
import {FaUpLong, FaDownLong} from "react-icons/fa6"
import {BiArrowBack} from "react-icons/bi"
import BlueButton from "@/components/BlueButton"

export default function Carrinho() {
  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [redirectURL, setRedirectURL] = useState(false)
  const [loading, setLoading] = useState(true)

  function removeProduct(id){
    const newProducts = products.filter((item)=> item.id !== id)
    const totalSum = newProducts.reduce((accumulator, currentProduct) => {
      const productTotal = currentProduct.price * currentProduct.quantity

      return accumulator + productTotal
    }, 0)

    setProducts(newProducts)
    setTotal(totalSum)
    localStorage.setItem("productsCart", JSON.stringify(newProducts))
    const newURL = createUrl(newProducts)
    setRedirectURL(newURL)
  }

  function changeQuantity(id, operation){
    const newProducts = products.filter((item) => {
      if(item.id === id){
        if(operation === "increase"){
          item.quantity != 10 ? item.quantity += 1 : item.quantity = 10
        } else {
          item.quantity != 1 ? item.quantity -= 1 : item.quantity = 1
        }
      }

      return item
    })

    const totalSum = newProducts.reduce((accumulator, currentProduct) => {
      const productTotal = currentProduct.price * currentProduct.quantity

      return accumulator + productTotal
    }, 0)

    setProducts(newProducts)
    setTotal(totalSum)
    localStorage.setItem("productsCart", JSON.stringify(newProducts))
    const newURL = createUrl(newProducts)
    setRedirectURL(newURL)
  }

  function createUrl(products){
    let text = "Olá, estou entrando em contato através do site para solicitar "

    if(products.length == 1){
      text += `(${products[0].quantity}) ${products[0].name} da ${products[0].brand} que totalizou R$${products[0].quantity * products[0].price},00.`
    }

    if(products.length > 1){
      let totalPrice = 0
      text  += ` os produtos `
      products.forEach((item)=>{
        text += `${item.name} da ${item.brand} (${item.quantity} de R$${item.price},00), `
        totalPrice += item.price * item.quantity
      })

      text += `totalizando R$${totalPrice},00.`
    }

    return `https://wa.me/+558188109971?text=${text}` 
  }

  useEffect(()=>{
    const allProducts = JSON.parse(localStorage.getItem("productsCart"))
    const totalSum = allProducts.reduce((accumulator, currentProduct) => {
      const productTotal = currentProduct.price * currentProduct.quantity
      
      return accumulator + productTotal
    }, 0)
    
    let text = "Olá, estou entrando em contato através do site para solicitar "

    if(allProducts.length == 1){
      text += `(${allProducts[0].quantity}) ${allProducts[0].name} da ${allProducts[0].brand} que totalizou R$${allProducts[0].quantity * allProducts[0].price},00.`
    }

    if(allProducts.length > 1){
      text  += ` os produtos `
      allProducts.forEach((item)=>{
        text += `${item.name} da ${item.brand} (${item.quantity} de R$${item.price},00), `
      })

      text += `totalizando R$${totalSum},00.`
    }
    

    const url = `https://wa.me/+558188109971?text=${text}`
    
    setProducts(allProducts)
    setTotal(totalSum)
    setRedirectURL(url)
    setLoading(false)
  }, [])


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
        {
          loading ? 
          <div className="self-center mt-5 font-bold text-xl text-primary">Carregando...</div>
          :
          <motion.section 
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.6}}
            className="flex flex-col items-start px-4 lg:px-6 xl:px-32 py-2 mt-2"
          >
            <BlueButton href="/" type="redirect">
              <BiArrowBack/> Continuar comprando
            </BlueButton>
            {
              !!products.length ? 
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
                            <div className="flex gap-1 self-center w-[52px] justify-between">
                              <button 
                                disabled={product.quantity === 10}
                                className={`${product.quantity === 10 && "text-gray-400"} text-[12px] `}
                                onClick={() => changeQuantity(product.id, "increase")}
                              >
                                <FaUpLong/>
                              </button>
                              <span className="w-[18px] text-center">{product.quantity}</span>
                              <button 
                                disabled={product.quantity === 1}
                                className={`${product.quantity === 1 && "text-gray-400"} text-[12px] `}
                                onClick={() => changeQuantity(product.id, "decrease")}
                              >
                                <FaDownLong/>
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-col w-[82px]">
                            <p className=" font-semibold">Total:</p>
                            <p>R${product.price * product.quantity},00</p>
                          </div>
                        </div>
                        <button 
                          className="text-white mt-2 bg-accent rounded-md w-1/2 self-center hover:scale-95 md:w-[110px] lg:mr-1"
                          onClick={() => removeProduct(product.id)}
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
                    <p className="text-xl font-bold my-2 text-primary">Total: R${total},00</p>
                    <BlueButton 
                      href={redirectURL} 
                      target="_blank" 
                      type="redirect"
                    >
                      Solicitar pedido
                    </BlueButton>
                  </>
                }
              </div> 
              : 
              <div className="mt-16 flex flex-col self-center text-primary text-center gap-3">
                <FaShoppingCart className="text-8xl w-[300px]"/>
                <p className="text-xl font-bold w-[300px]">SEU CARRINHO ESTÁ VAZIO</p>
              </div> 
            }
          </motion.section>
        }
      </main>
    )
  }
  
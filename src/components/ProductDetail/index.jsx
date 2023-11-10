"use client"

import {useState} from "react"
import Image from "next/image"
import {useProductStore} from "@/store/zustand"
import {toast} from "react-toastify"
import {Button, Spinner} from "flowbite-react"

export default function ProductDetail(){
  const [loading, setLoading] = useState(false)
  const {changeProductDetails, product} = useProductStore()
  const {name, imageURL, weight, flavor, brand, price, description, whenToTake} = product
  const buttonStyle = "font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4 md:mt-6 w-[300px] md:w-[500px] md:text-xl self-center"

  function addToCart(){
    const products = localStorage.getItem("productsCart")
    setLoading(true)

    if(!products){
      localStorage.setItem("productsCart", JSON.stringify([{...product, quantity: 1}]))
    } else {
      const newProducts = JSON.parse(products)
     
      const foundedProduct = newProducts.find((item)=> item.id === product.id)

      if(foundedProduct){
        foundedProduct.quantity += 1
      } else {
        newProducts.push({...product, quantity: 1})
      }

      localStorage.setItem("productsCart", JSON.stringify(newProducts))
    }

    setTimeout(() => {
      setLoading(false)
      toast.success("Item adicionado ao carrinho!")
    }, 500);
  }

  return (
    <div className="fixed h-full w-full bg-[#00000080] flex items-center justify-center z-40">
      <div className="flex flex-col w-[90%] h-[95%] p-2 md:p-5 bg-white rounded-lg">
        <button onClick={changeProductDetails} className="absolute top-[4vh] right-[7vw] font-bold text-secondary">
          X
        </button>
        <div className="h-[150px] md:h-[200px] lg:h-[250px] flex self-center">
          <Image 
            width={100} 
            height={100} 
            src={imageURL} 
            alt={name} 
            className="md:h-[165px] md:w-[165px] lg:h-[200px] lg:w-[200px] self-center hover:scale-125"
          />
        </div>
        <p className="font-bold text-center md:text-xl text-secondary">{`${name} ${brand} ${weight}`}</p>
        <p className="text-sm text-center mb-2 md:mb-4 md:text-xl font-medium">{` ${!!flavor ? flavor + " - " : ""} R$${price},00`}</p>
        <p className="text-[12px] text-justify mb-2 md:mb-4 md:text-xl"><span className="font-bold text-secondary">Descrição: </span> {description}</p>
        <p className="text-[12px] text-justify md:text-xl"><span className="font-bold text-secondary">Como Usar: </span>{whenToTake}</p>
        {
          loading ? 
          <Button color="gray" className={`${buttonStyle}`}>
            <Spinner aria-label="Alternate spinner button example" size="sm" />
            <span className="pl-3">Adicionando...</span>
          </Button>
          : 
          <button 
            type="button" 
            className={`text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 ${buttonStyle}`}
            onClick={addToCart}
          >
            Adicionar ao carrinho
          </button>
        }
      </div>
    </div>
  )
}
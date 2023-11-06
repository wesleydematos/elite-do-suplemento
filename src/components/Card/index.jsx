"use client"

import Image from "next/image"
import {useProductStore} from "@/store/zustand"

export default function Card ({item}){
  const {name, imageURL, weight, flavor, brand, price} = item
  const {setProduct, changeProductDetails} = useProductStore()

  return (
    <div className="flex flex-col px-[25px] bg-white w-[250px] rounded-xl shadow-xl text-primary">
      <div className="h-[200px] flex self-center">
        <Image width={100} height={100} src={imageURL} alt={name} className="w-[150px] h-[150px] self-center hover:scale-125" priority/>
      </div>
      <p className="max-w-[200px] truncate font-bold">{`${name} ${brand}`}</p>
      <p className="max-w-[200px] truncate text-sm font-medium">{`${weight} ${!!flavor ?  "- " + flavor  : ""}`}</p>
      <span className="text-sm font-medium">R${price},00</span>
      <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-3" 
      onClick={()=>{setProduct(item); changeProductDetails()}}>
        Ver detalhes
      </button>
    </div>
  )
}
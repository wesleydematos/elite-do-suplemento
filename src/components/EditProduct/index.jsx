"use client"

import {useProductStore} from "@/store/zustand"
import ProductForm from "../ProductForm"

export default function EditProduct(){
  const {setEdit, setProduct} = useProductStore()

  return (
    <div className="fixed top-0 min-h-screen w-screen bg-[#00000080] flex items-center justify-center z-400">
      <div className="flex flex-col w-[90%] min-h-[95%] px-2 md:p-5 bg-white rounded-lg">
      <button 
        onClick={()=>{setEdit(false); setProduct({})}}
        className="absolute top-[3vh] right-[7vw] font-bold text-secondary"
      >
        X
      </button>
        <ProductForm handleType="edit"/>
      </div>
    </div>
  )
}
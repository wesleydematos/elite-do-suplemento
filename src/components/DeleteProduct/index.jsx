"use client"

import {useProductStore} from "@/store/zustand"
import axios from "axios"
import {toast} from "react-toastify"

export default function DeleteProduct(){
  const {setExclude, product, setProduct, setAllProducts} = useProductStore()

  async function getData(){
    const {data} = await axios.get("/api/product")
    setAllProducts(data)
  }

  async function deleteProduct(){
    const id = product.id

    try {
      await axios.delete("/api/product", id)
      toast.success("Produto deletado com sucesso!")
      getData()
      setExclude(false)
    } catch (error) {
      console.log(error)
      toast.error("Erro ao deletar produto!")
    } 
  }

  return (
    <div className="fixed top-0 h-screen w-screen bg-[#00000080] flex items-center justify-center z-400">
      <div className="flex flex-col justify-center w-[90%] h-[50%] p-2 md:p-5 bg-white rounded-lg">
      <button 
        onClick={()=>{setExclude(false); setProduct({})}}
        className="absolute top-[29vh] right-[8vw] font-bold text-secondary"
      >
        X
      </button>
      <div className="flex flex-col self-center">
        <p className="font-bold text-xl text-center">
          Tem certeza que deseja excluir o produto {`${product.name} ${product.brand} - ${product.weight}?`}
        </p>
        <div className="flex self-center gap-2 mt-3">
          <button 
            className="bg-accent rounded text-white px-3 text-xl"
            onClick={()=>{deleteProduct()}}
          >
            Excluir
          </button>
          <button 
            className="bg-primary rounded text-white px-3 text-xl"
            onClick={()=>{setExclude(false); setProduct({})}}
          >
            Cancelar
          </button>
        </div>
      </div>
      </div>
    </div>
  )
}
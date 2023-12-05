"use client"

import {useProductStore} from "@/store/zustand"

export default function EditProduct(){
  const {setEdit} = useProductStore()

  async function editProduct(){
    return
  }

  return (
    <div className="fixed top-0 h-screen w-screen bg-[#00000080] flex items-center justify-center z-400">
      <div className="flex flex-col w-[90%] h-[95%] p-2 md:p-5 bg-white rounded-lg">
      <button 
        onClick={()=>setEdit(false)}
        className="absolute top-[4vh] right-[7vw] font-bold text-secondary"
      >
        X
      </button>
       edit modal
      </div>
    </div>
  )
}
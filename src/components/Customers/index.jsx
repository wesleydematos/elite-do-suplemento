"use client"

import Image from "next/image"
import {useProductStore} from "@/store/zustand"

export default function Customers (){
  const {changeStory, clients, setStartIndex} = useProductStore()

  return (
    <section className="flex flex-col px-4 lg:px-6 xl:px-32 py-2 " id="Clientes">
      <p className="text-2xl font-bold text-secondary">Nossos clientes...</p>
      <ul className="flex flex-wrap gap-2 mt-4 w-[350px] md:w-[600px] lg:w-[900px]">
        {
          clients.map((client)=>{
            return (
            <li 
              key={client.id}
              className="flex flex-col"
            >
              <div 
              className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600 cursor-pointer"
              onClick={()=> {setStartIndex(client.id); changeStory()}}
              >
                <div className="flex justify-center items-center w-[65px] h-[65px] rounded-full bg-white">
                  <Image 
                    src={client.profilePic} 
                    width={62} 
                    height={62} 
                    alt={`foto de ${client.name}`} 
                    className="rounded-full"
                  />
                </div>
              </div>
              <p className="self-center text-primary">{client.name}</p>
            </li>
            )
          })
        } 
      </ul>
    </section>
  )
}
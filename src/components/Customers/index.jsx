"use client"

import Image from "next/image"
import bruno from "../../../public/bruno.jpg"
import brunoStory from "../../../public/brunoStory.jpg"
import neto from "../../../public/neto.jpg"
import netoStory from "../../../public/netoStory.jpg"
import rinaldo from "../../../public/rinaldo.jpg"
import rinaldoStory from "../../../public/rinaldoStory.jpg"

const clients = [
  {id: 1, profilePic: bruno, story: brunoStory, name: "bruno"},
  {id: 2, profilePic: neto, story: netoStory, name: "neto"},
  {id: 3, profilePic: rinaldo, story: rinaldoStory, name: "rinaldo"}
]

export default function Customers (){
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
              <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600 cursor-pointer">
                <div className="flex justify-center items-center w-[65px] h-[65px] rounded-full bg-white">
                  <Image src={client.profilePic} width={62} height={62} alt="" className="rounded-full"/>
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
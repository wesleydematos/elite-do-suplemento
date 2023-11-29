"use client"

import {useState, useEffect} from "react" 
import {useSession, signOut} from "next-auth/react"
import {redirect} from "next/navigation"
import {useProductStore} from "@/store/zustand"
import Image from "next/image"
import Link from "next/link"
import axios from "axios"
import logo from "../../../../public/elite.png"

export default function Secret() {
  const [create, setCreate] = useState(false)
  const {allProducts, setAllProducts} = useProductStore()
  
  async function getData(){
    const {data} = await axios.get("/api/product")
    setAllProducts(data)
  }

  useEffect(()=>{
    getData()
  },[])

  console.log(allProducts)

  const { data: session } = useSession({required: true, onUnauthenticated(){
    redirect("/login?callbackUrl=/secret/adm")
  }})

    if( !session || session.user.email !== "wesleydematos3@gmail.com"){
      return (
        <main className="bg-body min-h-screen">
          <p>Você não tem permissão para acessar esta página.</p>
          <Link href="/login">Voltar para o Login</Link>
        </main>
      )
    }

    return (
      <main className="bg-body min-h-screen">
        <header className="bg-white shadow-md w-full flex items-center justify-center h-[70px] border-t-8 border-secondary">
          <div className="flex justify-center items-center w-full">
            <Image src={logo} width={50} height={50} alt="logo elite suplementos"/>
            <h1 className="font-semibold ml-3 text-xl md:text-2xl text-primary">ELITE SUPLEMENTOS</h1>
          </div>
          <button
            className="p-2 rounded-md mr-2 mb-3 text-white bg-primary flex items-center gap-2 hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 self-end"
            onClick={()=>signOut()}
          >
            Sair
          </button>
        </header>

        <div className="flex gap-4 px-4 lg:px-6 xl:px-32 py-2 mt-2">
          <button onClick={()=>setCreate(false)} className="p-2 rounded-md text-white bg-primary flex items-center gap-2 hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2">Produtos</button>
          <button onClick={()=>setCreate(true)} className="p-2 rounded-md text-white bg-primary flex items-center gap-2 hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2">Adicionar produto</button>
        </div>
        
        {
          create ? 
          <section className="px-4 lg:px-6 xl:px-32 py-2 mt-2">
            criando
          </section> 
          : 
          <section className="px-4 lg:px-6 xl:px-32 py-2 mt-2">
            listando
          </section>
        }
      </main>
    )
  }
  
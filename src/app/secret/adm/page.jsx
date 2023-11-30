"use client"

import BlueButton from "@/components/BlueButton"
import logo from "../../../../public/elite.png"
import {useState, useEffect} from "react" 
import {useSession, signOut} from "next-auth/react"
import {redirect} from "next/navigation"
import {useProductStore} from "@/store/zustand"
import Image from "next/image"
import axios from "axios"

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
          <BlueButton type="redirect" href="/login">Voltar para o Login</BlueButton>
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
          <div className="mr-2">
            <BlueButton
              onClick={()=>signOut()}
            >
              Sair
            </BlueButton>
          </div>
        </header>

        <div className="flex gap-4 px-4 lg:px-6 xl:px-32 py-2 mt-2">
          <BlueButton onClick={()=>setCreate(false)}>Produtos</BlueButton>
          <BlueButton onClick={()=>setCreate(true)}>Adicionar produto</BlueButton>
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
  
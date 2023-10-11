"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import Link from "next/link"

export default function Secret() {
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
        <p>Secret</p>
      </main>
    )
  }
  
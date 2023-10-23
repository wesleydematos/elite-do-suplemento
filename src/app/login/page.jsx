"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import elite from "../../../public/elite.png"

export default function Login() {
    const { data: session } = useSession()

    return (
      <main className="min-h-screen flex items-center justify-center bg-body py-12 px-4 sm:px-6 lg:px-8">
        <Head>
            <title>Login</title>
        </Head>

        <div className="max-w-sm w-full space-y-8">
            <div>
                <Image
                    className="mx-auto"
                    src={elite}
                    alt="Workflow"
                    width={150}
                    height={100}
                />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-primary">
                    {
                        session
                            ?
                        <>Bem-vindo(a) {session.user.name}!</>
                            :
                        <>Acesse o Painel de ADM</>
                    }
                </h2>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                {session && session.user.email === "wesleydematos3@gmail.com" && <Link href="/secret/adm" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-[#3d3e68] focus:outline-none focus:ring-2 focus:ring-offset-2">Ir para o painel</Link>}

                {session && session.user.email !== "wesleydematos3@gmail.com" && <p className="text-secondary text-center">Você não possui permissão para acessar o painel.</p>}
                
                <Link 
                    href="/" 
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-[#3d3e68] focus:outline-none focus:ring-2 focus:ring-offset-2">
                    Voltar para Home
                </Link>


                <button
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-[#3d3e68] focus:outline-none focus:ring-2 focus:ring-offset-2"
                    onClick={() =>{ session ? signOut() : signIn("google")}}
                >
                    { session ? "Sair" : "Entrar" }
                </button>
            </div>
        </div>
      </main>
    )
  }
  
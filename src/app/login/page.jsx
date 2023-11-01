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
          {session && session.user.email === "wesleydematos3@gmail.com" && <Link href="/secret/adm" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2">Ir para o painel</Link>}
          {session && session.user.email !== "wesleydematos3@gmail.com" && <p className="text-secondary text-center">Você não possui permissão para acessar o painel.</p>}
          <Link 
            href="/" 
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2">
            Voltar para Home
          </Link>
          <button
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2"
            onClick={() =>{ session ? signOut() : signIn("google")}}
          >
            { 
              session ? "Sair" : <>
                <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                  <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
                </svg>
                Entrar com o Google
              </> 
            }
          </button>
        </div>
      </div>
    </main>
  )
  }
  
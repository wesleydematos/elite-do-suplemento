"use client"

import { useState } from "react"
import { FaShoppingCart } from "react-icons/fa"
import Image from "next/image"
import elite from "../../../public/elite.png"

export default function Header() {
  const [actualSection, setActualSection] = useState("Início")
  const sections = ["Início", "Produtos", "Depoimentos", "Contato"]

  return (
    <header className="w-screen bg-white fixed">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center gap-2">
            <Image src={elite} width={50} height={50} alt="Elite suplementos logo" />
            <span className="self-center font-bold text-xl whitespace-nowrap text-primary dark:text-white">Elite Suplementos</span>
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {sections.map((section)=>{
                return (
                  <li key={section}>
                    <a 
                      href={`#${section === "Início" ? "" : section}`} 
                      className={`block py-2 pr-4 pl-3 font-semibold ${actualSection === section ? "text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" : "text-primary border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"}`}
                      onClick={()=>setActualSection(section)}
                    >
                      {section}
                    </a>
                  </li>
                )
              })}
              <li>
                <a href="/carrinho" className="text-primary hover:text-primary-700"><FaShoppingCart/></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
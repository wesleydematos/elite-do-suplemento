"use client"

import { useState } from "react"
import {  HiPhone, HiOutlineTruck } from "react-icons/hi"
import { FaShoppingCart, FaInstagram } from "react-icons/fa"
import Image from "next/image"
import elite from "../../../public/elite.png"

export default function Header() {
  const [actualSection, setActualSection] = useState("Início")
  const sections = ["Início", "Produtos", "Depoimentos", "Contato"]

  return (
    <header className="w-screen bg-white fixed z-10">
      <div className="bg-secondary w-full h-8 flex px-4 lg:px-6 xl:px-32  justify-between items-center text-white">
        <div className="flex gap-3">
          <a className="flex gap-1" href="https://www.instagram.com/elite.dosuplemento/" target="_blank">
            <FaInstagram />
            <p className="text-[12px]">elite.dosuplemento </p>
          </a>
          <a className="flex gap-1" href="https://wa.me/message/NA4G3HTG6M66H1" target="_blank">
            <HiPhone/>
            <p className="text-[12px]">(81) 9 8810-9971</p>
          </a>
        </div>
        <div className="hidden md:flex gap-3">
          <HiOutlineTruck/>
          <p className="text-[12px]">Entregamos em seu endereço.</p>
        </div>
      </div>
      <nav className="border-gray-400 border-b-[1px] px-4 lg:px-6 xl:px-32 py-2.5 dark:bg-gray-800">
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
                      className={`block py-2 pr-4 pl-3 font-semibold ${actualSection === section ? "text-white rounded bg-secondary lg:bg-transparent lg:text-secondary lg:p-0 dark:text-white" : "text-primary border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-secondary lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"}`}
                      onClick={()=>setActualSection(section)}
                    >
                      {section}
                    </a>
                  </li>
                )
              })}
              <li>
                <a href="/carrinho" className="text-primary hover:text-secondary"><FaShoppingCart/></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
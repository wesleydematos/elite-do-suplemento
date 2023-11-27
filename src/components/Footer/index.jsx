import Image from "next/image"
import elite from "../../../public/elite.png"
import {BsInstagram, BsWhatsapp} from "react-icons/bs"
import {MdPix, MdCreditCard, MdMonetizationOn} from "react-icons/md"

export default function Footer (){
  return (
    <footer className="w-screen bg-primary text-white" id="Contato">
      <div className="px-4 lg:px-6 xl:px-32 py-2 flex flex-col">
        <div className="flex items-center gap-2 self-center mb-2">
          <Image src={elite} width={50} height={50} alt="Elite suplementos logo" />
          <span className="self-center font-bold text-md whitespace-nowrap">Elite Suplementos</span>
         </div>
         <div className="flex gap-32 justify-center md: items-center w-full">
          <ul className=" flex flex-col ">
            <h2 className="font-medium">Pague com:</h2>
            <li className="flex gap-2 items-center">
              <MdPix/>
              <span> PIX</span>
            </li>
            <li className="flex gap-2 items-center">
              <MdCreditCard/>
              <span> Cartão</span>
            </li>
            <li className="flex gap-2 items-center">
              <MdMonetizationOn/>
              <span> Dinheiro</span>
            </li>
          </ul>
          <p className="max-w-[33%] hidden md:block text-center">Encontre os melhores suplementos e acessórios para manter uma rotina saudável!</p>
          <ul className="flex flex-col ">
            <h2 className="font-medium">Contatos:</h2>
            <li className="flex gap-3 justify-center">
              <a href="https://www.instagram.com/elite.dosuplemento/" target="_blank"><BsInstagram/></a>
              <a href="https://wa.me/message/NA4G3HTG6M66H1" target="_blank"><BsWhatsapp/></a>
            </li>
          </ul>
         </div>
      </div>
      <p className="w-full flex py-2 justify-center font-medium text-center text-xs bg-white text-primary">
        Copyright © Elite Suplementos 2023 – Todos direitos reservados.
      </p>
    </footer>
  )
}
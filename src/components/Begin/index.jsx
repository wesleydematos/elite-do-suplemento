import { Carousel } from "flowbite-react"

export default function Begin () {
  return (
    <section className="px-4 lg:px-6 xl:px-32 py-2 mt-2" id="#">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <div 
            style={{backgroundImage: "url('https://climba.com.br/blog/wp-content/uploads/2020/03/como-gerenciar-entrega-de-mercadoria-no-marketplace-climba-commerce.jpg')"}}
            className="w-full h-full bg-no-repeat bg-cover bg-center"
          >
            <p className="absolute bg-[#00000080] text-white w-full h-full flex items-center justify-center text-center md:text-2xl">Entrega grátis para Machados-PE, demais cidades é necessário consultar valor.</p>  
          </div>
          <div 
            style={{backgroundImage: "url('https://beartac-imgs.s3.sa-east-1.amazonaws.com/uploads/formas-de-pagamento.jpg')"}}
            className="w-full h-full bg-no-repeat bg-cover bg-center"
          >
            <p className="absolute bg-[#00000080] text-white w-full h-full flex items-center justify-center text-center md:text-2xl">Aceitamos PIX, cartão e dinheiro.</p>  
          </div>
        </Carousel>
      </div>
    </section>
  )
}
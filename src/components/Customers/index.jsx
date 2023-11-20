const clients = ["cliente1", "cliente2", "cliente3", "cliente4"]

export default function Customers (){
  return (
    <section className="px-4 lg:px-6 xl:px-32 py-2 " id="Clientes">
      <p className="text-2xl font-bold text-secondary text-center md:text-start">Conheça a satisfação dos nossos clientes...</p>
      <ul className="flex gap-2 mt-4 max-w-[300px] items-center">
        {
          clients.map((client)=>{
            return (
            <li 
              key={client}
              className="overflow-x-scroll no-scrollbar flex items-center justify-center bg-primary text-white w-[70px] h-[70px] rounded-full"
            >
              {client}
            </li>
            )
          })
        } 
      </ul>
    </section>
  )
}
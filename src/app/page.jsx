import Header from "@/components/Header"

export default function Home() {
  return (
    <main className="bg-body min-h-screen">
      <Header/>
      <div className="h-[70px]"/>
      <section className="px-4 py-2 lg:px-32" id="#">
        <p>inicio</p>
      </section>
      <section className="px-4 py-2 lg:px-32" id="Produtos">
        <p>Produtos</p>
      </section>
      <section className="px-4 py-2 lg:px-32" id="Depoimentos">
        <p>Depoimentos</p>
      </section>
      <section className="px-4 py-2 lg:px-32" id="Contato">
        <p>contatos</p>
      </section>
    </main>
  )
}

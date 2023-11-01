import Header from "@/components/Header"
import Products from "@/components/Products"

export default function Home() {
  return (
    <main className="bg-body min-h-screen">
      <Header/>
      <div className="h-[102px]"/>
      <section className="px-4 lg:px-6 xl:px-32  py-2" id="#">
        <p>inicio</p>
      </section>
      <Products/>
      <section className="px-4 lg:px-6 xl:px-32  py-2" id="Depoimentos">
        <p>Depoimentos</p>
      </section>
      <section className="px-4 lg:px-6 xl:px-32  py-2" id="Contato">
        <p>contatos</p>
      </section>
    </main>
  )
}

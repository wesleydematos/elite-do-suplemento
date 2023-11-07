"use client"

import Begin from "@/components/Begin"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ProductDetail from "@/components/ProductDetail"
import Products from "@/components/Products"
import {useProductStore} from "@/store/zustand"

export default function Home() {
  const {productDetails} = useProductStore()

  return (
    <main className="bg-body min-h-screen flex">
      <div>
        <Header/>
        <div className="h-[102px]"/>
        <Begin/>
        <Products/>
        <section className="px-4 lg:px-6 xl:px-32  py-2" id="Depoimentos">
          <p>Depoimentos</p>
        </section>
        <Footer/>
      </div>
      {productDetails && <ProductDetail/>}
    </main>
  )
}

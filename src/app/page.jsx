"use client"

import Begin from "@/components/Begin"
// import Customers from "@/components/Customers"
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
        {/* <Customers/> */}
        <div className="h-[30px]"/>
        <Footer/>
      </div>
      {productDetails && <ProductDetail/>}
    </main>
  )
}

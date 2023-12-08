"use client"

import {useEffect} from "react"
import Begin from "@/components/Begin"
import Customers from "@/components/Customers"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ProductDetail from "@/components/ProductDetail"
import Products from "@/components/Products"
import Story from "@/components/Story"
import Loading from "@/components/Loading"
import {useProductStore} from "@/store/zustand"
import axios from "axios"

export default function Home() {
  const {productDetails, story, setAllProducts, allProducts} = useProductStore()

  async function getData(){
    const {data} = await axios.get("/api/product")
    setAllProducts(data)
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <main className="bg-body min-h-screen flex">
      <div>
        <Header/>
        <div className="h-[102px]"/>
        {
          !!allProducts.length ? 
          <>
            <Begin/>
            <Products/>
            <Customers/>
          </>
          :
          <div className="min-h-[95vh] w-full mt-8">
            <h1 className="text-center font-bold text-2xl text-primary">Carregando informações...</h1>
            <Loading/>
          </div>
        }
        <div className="h-[30px]"/>
        <Footer/>
      </div>
      {productDetails && <ProductDetail/>}
      {story && <Story/>}
    </main>
  )
}

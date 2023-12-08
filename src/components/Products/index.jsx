"use client"

import Card from "../Card"
import {useProductStore} from "@/store/zustand"

export default function Products (){
  const {allProducts} = useProductStore()

  const proteins = allProducts.filter((product)=> product.type === "protein")
  const creatines = allProducts.filter((product)=> product.type === "creatine")
  const others = allProducts.filter((product)=> product.type === "others")
  const preWorkouts = allProducts.filter((product)=> product.type === "preWorkout")

  return (
    <section className="flex flex-col px-4 lg:px-6 xl:px-32 py-2" id="Produtos">
      <h2 className="font-bold text-xl my-3 border-b-2 border-secondary w-fit text-primary">Proteínas</h2>
      <div className="flex flex-wrap w-full justify-center gap-8">
        {proteins.map((item)=>{
          return (
            <Card 
              key={item.id}
              item={item}
            />
          )
        })}
      </div>
      <h2 className="font-bold text-xl my-3 border-b-2 border-secondary w-fit text-primary">Pré-Treinos</h2>
      <div className="flex flex-wrap w-full justify-center gap-8">
        {preWorkouts.map((item)=>{
          return (
            <Card 
              key={item.id}
              item={item}
            />
          )
        })}
      </div>
      <h2 className="font-bold text-xl my-3 border-b-2 border-secondary w-fit text-primary">Creatinas</h2>
      <div className="flex flex-wrap w-full justify-center gap-8">
        {creatines.map((item)=>{
          return (
            <Card 
              key={item.id}
              item={item}
            />
          )
        })}
      </div>
      <h2 className="font-bold text-xl my-3 border-b-2 border-secondary w-fit text-primary">Outros</h2>
      <div className="flex flex-wrap w-full justify-center gap-8">
        {others.map((item)=>{
          return (
            <Card 
              key={item.id}
              item={item}
            />
          )
        })}
      </div> 
    </section>
)
}
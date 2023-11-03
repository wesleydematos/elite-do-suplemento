import Card from "../Card"
import database from "@/database"

export default function Products (){
  return (
    <section className="flex flex-col px-4 lg:px-6 xl:px-32 py-2" id="Produtos">
      <h2 className="font-bold text-xl my-3 border-b-2 border-secondary w-fit">Proteínas</h2>
      <div className="flex flex-wrap w-full justify-center gap-8">
        {database.protein.map((item)=>{
          return (
            <Card 
              key={item.id}
              item={item}
            />
          )
        })}
      </div>
      <h2 className="font-bold text-xl my-3 border-b-2 border-secondary w-fit">Pré-Treinos</h2>
      <div className="flex flex-wrap w-full justify-center gap-8">
        {database.preWorkout.map((item)=>{
          return (
            <Card 
              key={item.id}
              item={item}
            />
          )
        })}
      </div>
      <h2 className="font-bold text-xl my-3 border-b-2 border-secondary w-fit">Creatinas</h2>
      <div className="flex flex-wrap w-full justify-center gap-8">
        {database.creatine.map((item)=>{
          return (
            <Card 
              key={item.id}
              item={item}
            />
          )
        })}
      </div>
      <h2 className="font-bold text-xl my-3 border-b-2 border-secondary w-fit">Outros</h2>
      <div className="flex flex-wrap w-full justify-center gap-8">
        {database.others.map((item)=>{
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
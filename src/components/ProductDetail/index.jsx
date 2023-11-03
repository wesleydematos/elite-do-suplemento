import Image from "next/image"

export default function ProductDetail({name, imageURL, weight, flavor, brand, price, description, whenToTake}){
  return (
    <aside className="fixed h-full w-full bg-slate-200">
      <div className="h-[200px] flex self-center">
        <Image width={100} height={100} src={imageURL} alt={name} className="w-[150px] h-[150px] self-center hover:scale-125"/>
      </div>
      <p className="max-w-[200px] truncate font-bold">{`${name} ${brand}`}</p>
      <p className="max-w-[200px] truncate text-sm self-center">{`${weight} ${!!flavor ?  "- " + flavor  : ""}`}</p>
      <span className="text-sm self-center">R$ {price},00</span>
      <p>{description}</p>
      <p>{whenToTake}</p>
    </aside>
  )
}
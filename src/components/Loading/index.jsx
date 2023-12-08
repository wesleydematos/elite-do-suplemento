import Image from "next/image"
import elite from "../../../public/elite.png"

export default function Loading(){
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <div className="animate-spin rounded-full border-t-8 p-2 border-primary">
        <Image 
          src={elite} 
          width={150} 
          height={150} 
          alt="elite logo" 
        />
      </div>
    </div>
  )
}
import { Carousel } from "flowbite-react"

export default function Begin () {
  return (
    <section className="px-4 lg:px-6 xl:px-32 py-2 mt-2" id="#">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <div className="flex h-full items-center justify-center bg-[#00000080] text-white">
          Slide 1
          </div>
          <div className="flex h-full items-center justify-center bg-[#00000080] text-white">
          Slide 2
          </div>
          <div className="flex h-full items-center justify-center bg-[#00000080] text-white">
          Slide 3
          </div>
        </Carousel>
      </div>
    </section>
  )
}
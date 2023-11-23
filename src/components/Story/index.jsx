"use client"

import Stories from "react-insta-stories"
import {useProductStore} from "@/store/zustand"

export default function Story (){
  const {changeStory, startIndex, clients} = useProductStore()
  const stories = clients.map((client)=> client.story)

  return (
    <div 
      className="fixed h-full w-full bg-[#00000080] flex items-center justify-center z-40"
      onClick={changeStory}
    >
      <Stories
        isPaused={false}
        loop={true}
        stories={stories}
        defaultInterval={5000}
        keyboardNavigation={true}
        currentIndex={startIndex}
      />
    </div>
  )
}
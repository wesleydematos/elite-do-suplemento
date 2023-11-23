"use client"

import Stories from "react-insta-stories"
import {useProductStore} from "@/store/zustand"

export default function Story (){
  const {changeStory, startIndex} = useProductStore()
  const stories = ["https://i.imgur.com/DYderUJ.jpg", "https://i.imgur.com/x83cUYo.jpg", "https://i.imgur.com/uiCbG29.jpg"]

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
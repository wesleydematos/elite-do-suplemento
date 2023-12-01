export default function BlueButton ({children, tagType, variant, ...props}){
  if(tagType === "redirect"){
    return (
      <a
        className={`p-2 ${variant ? "w-full flex justify-center" : "w-fit"} rounded-md text-white bg-primary flex items-center gap-2 
        hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2`}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button 
      className={`p-2 ${variant ? "w-full flex justify-center" : "w-fit"} rounded-md text-white bg-primary flex items-center gap-2 
    hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2`}
      {...props}
    >
      {children}
    </button>
  )
}
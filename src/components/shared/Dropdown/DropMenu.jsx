import { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";

export default function DropMenu({ children }) {
  const[drop, setDrop]=useState(false)
const dropArrow=() =>
{
  setDrop(!drop)
}

  return (
      <div onClick={dropArrow} className="hover:!text-black  ease-in-out duration-1000 items-center justify-between relative flex flex-row ">
        {children }
       {drop? <ChevronUp size={20}/>:<ChevronDown size={20}/>}
      </div>
  )
}
import React from "react"

function Navigations({text}) {
  return (
    <div className="relative">
        <span>
          <button className="rounded-full px-4 h-12 transition-all duration-300 ease-in-out font-normal py-2 hover:bg-white hover:text-black">{text}</button>
        </span>
        
    </div>
  )
};

export default Navigations;

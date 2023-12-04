import React, { useState } from 'react'

export default function Changer() {

    const [color,setColor] = useState("black")

  return (
    <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }} //here we pass the color and from the below button's onClick function we change its value to given number
      >
        
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3">
          <div className="flex flex-wrap justify-center gap-2 bg-white rounded-3xl px-3 py-2 ">
            <button
              onClick={()=> setColor("red")}
              className="outline-none px-4 rounded text-black"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
            onClick={()=> setColor("blue")}
              className="outline-none px-4 rounded text-white"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
            onClick={()=> setColor("green")}
              className="outline-none px-4 rounded"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
            onClick={()=> setColor("yellow")}
              className="outline-none px-4 rounded"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
          </div>
        </div>
      </div>
  )
}

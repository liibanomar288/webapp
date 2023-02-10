import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Records = ({data}) => {
    
  return (  
    <div className=" h-[250px] w-[90%] mx-2 shadow-sm flex flex-col" >
      <div className="h-[60%] w-[full]  bg-blue-100"></div>
      <div className="flex-col h-[40%] pl-5  pt-2 h-full w-full bg-white items-center justify-center">
      <Link to ={`/blogs/${data.name}`}>

      <p  className="text-md text-center font-semibold ">{data.name}</p>
</Link>
      <p  className="text-gray-400 text-center text-sm pt-2 font-sans"> </p>
    </div>
  </div>
  ) 
}

export default Records
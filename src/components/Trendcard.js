import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Trendcard(props) {
  const navigate = useNavigate();

  return (
    <div className="h-[250px] w-[90%] mx-2  flex flex-col" >
       <div className="h-[60%] rounded-2xl w-[full]  ">
      <img src={props.img} alt="React Image" />
      </div>
      <div className="flex-col pl-5  h-[35%] w-full bg-white ">
      <Link to ={`/blogs/${props.name}`}>

      <p  className="text-sm   ">{props.name}</p>
</Link>
      <p  className="text-gray-400 text-center text-lg  font-sans"> </p>
    </div>
  </div>
  )
}

export default Trendcard
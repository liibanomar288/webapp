import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Jobcard(props) {
  const navigate = useNavigate();

  return (
    <div className=" h-[250px] w-[90%] mx-2 flex flex-col" >
      <div className="h-[60%] w-[full]  ">
      <img src={props.img} alt="React Image" />
      </div>
      <div className="flex-col h-[40%] pl-5   h-full w-full bg-white items-center justify-center">
      <Link to ={`/blogs/${props.name}`}>

      <p  className="text-md text-center  -mt-2 ">{props.name}</p>
</Link>
    </div>
  </div>
  )
}

export default Jobcard
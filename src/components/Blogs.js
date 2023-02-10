import React from 'react'
import { Link, useParams } from "react-router-dom";
import Home from './Home';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player'
function Blogs() {

    const {id} = useParams()
    console.log(id)
    const [blogs,setBlogs] = useState([])
    const [blog,setBlog] = useState([])


    useEffect(() => {

      axios.get("https://vp5qc4h0zg.execute-api.us-east-1.amazonaws.com/scan/scandb").then((response) => {
        setBlogs(response.data);

  
      });
       
    const filter = blogs.filter(item => item.name === id)
    setBlog(filter)
    }, []);
  return (
    <div className="flex bg-slate-200 flex-1 items-center justify-center flex-col h-auto space-y-5">
    <h1>Place To show Google AdSense</h1>
         
            <div className="w-full flex-row flex items-center justify-center bg-black space-x-20  pt-10  pl-5 h-[100px] ">
                <Link to ="/">
              <h1 className="text-yellow-500 font-bold text-2xl">Nalka Shid</h1>
              </Link>
              <input type="text" className="ml-5 text-yellow-500 bg-slate-500 rounded-xl h-[30px] w-[40%] pl-5"placeholder="Search"/>

            </div>
            <div className="w-[80%] space-x-[10%] h-full flex flex-row">
      <div className=" bg-white w-[60%] opacity-80 h-[600px] flex-col " >
    
    <h2 className="text-center font-extrabold text-yellow-500 text-[40px] font-sans">{id}</h2>
    <div className='mx-[18%] my-20'>
     
    <ReactPlayer playing controls	width={700} height={400} url="blob:https://gocast2.com/612efa50-b4a6-4eca-a18b-1b85e0f63334"/>:
    </div>
    
  

      </div>  
      <div className=" bg-white  w-[20%] opacity-80 h-[600px] flex-col " >
      <h2 className="text-center font-extrabold text-red-500 text-[40px] font-sans">Recommended Videos</h2>

</div>


      </div>
      <div className="w-full mt-20  h-[500px] bg-black"></div>
  </div>
  )
}

export default Blogs
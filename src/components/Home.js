import React from 'react'
import Jobcard from "./Jobcard";
import Trendcard from "./Trendcard";

import AdsComponent from ".//Adsense";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';

function Home() {
    const [blogs,setBlogs] = useState([])
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    // No of Records to be displayed on each page   

    useEffect(() => {

      axios.get("https://vp5qc4h0zg.execute-api.us-east-1.amazonaws.com/scan/scandb")
      .then(response =>{
        setBlogs(response.data);
        setLoading(false);
      } ).catch(() => {
        alert('There was an error while retrieving the data')
    })
    


  
     
      
    }, []);

   console.log(blogs)



   const display = blogs.map(blogitem=> <Jobcard img = {blogitem.img} name= {blogitem.name}/>)
   const trending1 = blogs.slice(0, 5)
   const trending2 = trending1.map(blogitem=> <Trendcard img = {blogitem.img} name= {blogitem.name}/>)

   const trending = trending2.slice(0, 5)

  return (
    <div className="flex bg-slate-200 flex-1 items-center justify-center flex-col h-auto space-y-5">
      {/* <h1>Place To show Google AdSense</h1>
           <AdsComponent dataAdSlot='f08c47fec0942fa0' /> */}
              <div className="w-full flex-row flex items-center justify-center bg-black space-x-20  pt-10  pl-5 h-[80px] ">
                <h1 className="text-yellow-500 font-bold text-2xl">Nalka Shid</h1>
                <input type="text" className="ml-5 text-yellow-500 bg-slate-500 rounded-xl h-[30px] w-[40%] pl-5"placeholder="Search"/>

              </div>
              <div className="w-[57%] flex-col h-full">
        <div className=" bg-white opacity-80 mt-20 h-[300px] " >
      <h2 className="text-center font-extrabold text-yellow-500 text-[40px] font-sans bg-gray-300 border-b border-black">Trending Videos</h2>
      <div className="flex flex-row h-20 w-full h-fit">
      {trending}
      </div>
        </div>          

          <h1 className="text-3xl mt-2 h-10  w-full text-center bg-black font-bold text-red-600"> Maanta Videos</h1>
          <div className="grid mt-2 grid-cols-4 bg-white gap-4 space-x-2">
  
{display}
          </div>



        </div>
        <div className="w-full mt-20  h-[500px] bg-black"></div>
    </div>
  )
}

export default Home
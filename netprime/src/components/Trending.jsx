import React from 'react'
import axios from "axios"
import { useState } from 'react';
import { useEffect } from 'react';
import Subtrend from './Subtrend';



export const Trending = () => {


 const [content, setContent] = useState([]);


const Fetcht=async()=>{

const {data}=  await axios.get(`
https://api.themoviedb.org/3/trending/all/day?api_key=f41ec9d59ccb2ea4664fef2e328a93ed`);

// console.log(data);
setContent(data.results);
console.log(content);
}

useEffect(() => {
  
Fetcht();
 
}, )


  return (
   
   
  

<>

<div className="trending">
   {

content &&  content.length>0 && content.map( c =>

<Subtrend

key={c.id}
id={c.id}
poster={c.poster_path}
title={c.title || c.name}
date={c.first_air_date || c.release_date}
media_type={c.media_type}
vote_average={c.vote_average}





/>

)




   }
      </div>



</>

   



 
  )
}

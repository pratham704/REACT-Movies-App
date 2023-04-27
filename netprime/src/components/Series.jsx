import React from 'react'
import SubSeries from './SubSeries';
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';














export const Series = () => {




  const [content, setContent] = useState([]);


  const Fetcht=async()=>{
  
  const {data}=  await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=f41ec9d59ccb2ea4664fef2e328a93ed&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
  
  
 //console.log(data);
  setContent(data.results);
  console.log(content);
  }
  
  useEffect(() => {
    
  Fetcht();
   
  }, );






















  return (
 <>
 
 
 <div>


{content &&  content.length>0 && content.map( c =>

<SubSeries
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

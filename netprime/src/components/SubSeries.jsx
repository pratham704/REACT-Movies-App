import React from 'react'
import "./Subtrends.css"
import {img_300} from "./Picsize"
export default function SubSeries(

   { id,
    poster,
    title,
    date,
    media_type,
    vote_average,
}





) {
  return (
   <>
<div className='Wrap'>
   <div className='Card'>
   <img src={`${img_300}/${poster}`} alt="cards"/> 
   <li className='Title'> {title}</li>
   <li className='Date'>{date}</li>
   <div className='Movie'>{media_type==="tv"?"Series":"Movie"}</div>
   </div>
   </div>
   
   
   
   </>
  )
}



import React, { useState } from 'react'
import user from '../images/user.svg'
import search from '../images/search.svg'
import home from '../images/home.svg'
import tv from '../images/tv.svg'
import movie from '../images/movie.svg'
import sports from '../images/sports.svg'
import category from '../images/category.svg'
 
const SideBar = () =>{
  const [touch,setTouch]=useState(false)
  return (
 
    <div className='grid grid-cols-2 bg-black bg-opacity-0 h-screen w-24 z-12 fixed'>
      <div onMouseEnter={()=> setTouch(true)} on onMouseLeave={()=> setTouch(false)}>
 
        <img className='w-28 pt-30 ml-5' src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg" alt="" />
        <a className='w-8  ml-5 text-ss text-orange-300 rounded-full' href='' >Subscribe</a>  
 
        <img src={user}  className='w-5 ml-9 mt-28 cursor-pointer ' fill='white' alt="" />
        <img src={search}  className='w-5 ml-9 mt-8 cursor-pointer ' fill='white' alt="" />
        <img src={home}  className='w-5 ml-9 mt-8 cursor-pointer ' fill='white' alt="" />
        <img src={tv}  className='w-5 ml-9 mt-8 cursor-pointer ' fill='white' alt="" />
        <img src={movie}  className='w-5 ml-9 mt-8 cursor-pointer ' fill='white' alt="" />
        <img src={sports}  className='w-5 ml-9 mt-8 cursor-pointer ' fill='white' alt="" />
        <img src={category}  className='w-5 ml-9 mt-8 cursor-pointer ' fill='white' alt="" />
      </div>
 
     {touch && <div className='z-10 ml-12 w-20 bg-opacity-25 position-fixed h-fit font-bold text-base text-slate-300'>
        <h4 className='mt-44'>My Space</h4>
        <h4 className='mt-6'>Search</h4>
        <h4 className='mt-8'>Home</h4>
        <h4 className='mt-8'>TV</h4>
        <h4 className='mt-6'>Movies</h4>
        <h4 className='mt-8'>Sports</h4>
        <h4 className='mt-4'>Category</h4>
      </div>}
 
    </div>
  )
}
 
export default SideBar
 
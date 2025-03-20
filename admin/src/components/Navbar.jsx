import React from 'react'
import { assets } from "../assets/assets"
const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img
        src="https://api.logo.com/api/v2/images?logo=lg_lb3ZotRQLdHlczI1Lx&format=webp&width=2000&background=transparent&fit=contain&quality=100&u=2024-11-21T20%3A23%3A52.888Z"
        alt=""
        className='w-28'
      />
      <button onClick={()=>setToken("")} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  );
}

export default Navbar
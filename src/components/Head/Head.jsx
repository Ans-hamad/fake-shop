import React from 'react'
import { IoIosCart } from "react-icons/io";
import { AiOutlineLogin } from "react-icons/ai";
import { RiLogoutCircleRFill } from "react-icons/ri";

const Head = () => {
  return (
    <nav className='flex  justify-between py-7  px-5 items-center bg-gray-200 rounded-md mx-2 my-3'>
        <div className='text-3xl text-gray-800 font-bold border-b border-red-500'>Online Store</div>
        <div className='flex gap-5 '>
        <IoIosCart size={"30px"} />
        <AiOutlineLogin  size={"30px"} />
        <RiLogoutCircleRFill size={"30px"}  />
        </div>
    </nav>
  )
}

export default Head

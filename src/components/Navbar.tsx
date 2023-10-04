import React from 'react'
import Image from 'next/image';
import { AiOutlineMenu } from'react-icons/ai'

const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='object-contain'>
              <Image src="/marius-florescu (5).svg" alt="Logo" width={200} height={150} className='py-0'/>
            </div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menuLink'>Home</li>
                <li className='menuLink'>Projects</li>
                <li className='menuLink'>About</li>
                <li className='menuLink'>Contact</li>
            </ul>
            <AiOutlineMenu className='lg:hidden md:hidden' size={30} />
        </div>
    </div>
  )
}



export default Navbar;
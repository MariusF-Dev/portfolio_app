import React from 'react'
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className='bg-[()] lg:bg-[url(/banner-bg.jpg)] min-h-screen bg-cover'>
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[100px] sm:text-[130px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="zoom-in-up">I&apos;m</p>
            <p data-aos="zoom-in-up">Marius</p>
            <p data-aos="zoom-in-up">Florescu</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
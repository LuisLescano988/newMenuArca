import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Carousel from '../components/Carousel'
import logo from '../assets/logoArca.png'

const Home = () => {
  return (
    <section className=''>
      <div className=' flex justify-center items-center'>
        <div className=' flex flex-col items-center text-center z-20'>
        <NavLink className=' absolute top-20 text-slate-50 font-canter font-extrabold text-8xl'
                        to={'/'}
                    ><img className=' z-20 h-32' src={logo} alt="" /></NavLink>
          <div className=' flex flex-col top-[40vh] absolute'>
            <NavLink className=' border my-3 place-self-center w-[12rem] tracking-[0.5rem] py-1 px-7 text-sm font-normal text-slate-50'
            to={'/english'}
            >ENGLISH</NavLink>
            <NavLink className=' border my-3 place-self-center w-[12rem] tracking-[0.5rem] py-1 px-7 text-sm font-normal text-slate-50'
            to={'/spanish'}
            >SPANISH</NavLink>
          </div>
          <div className=' absolute bottom-[10%] flex flex-row items-center justify-between'>
            <div className=' w-1/4 flex flex-col justify-center'>
              <div className=' text-slate-50 tracking-[0.1rem] font-eloquent text-[0.4rem]'>LATIN</div>
              <div className=' text-slate-50 tracking-[0.05rem] -mt-[0.14rem] font-eloquent text-[0.36rem]'>AMERICA'S</div>
              <div className=' text-slate-50 tracking-[-0.4rem] font-eloquent scale-x-110 text-5xl mr-3'>50</div>
              <div className=' text-slate-50 tracking-[-0.25rem] font-eloquent -mt-3 mr-2 text-[1.4rem]'>BEST</div>
              <div className=' text-slate-50 tracking-[0.07rem] font-eloquent -mt-[0.67rem] text-[0.33rem]'>RESTAURANTS</div>
            </div>
            <NavLink className=' flex flex-row items-center text-[0.6rem] mx-10 font-semibold tracking-[0.2rem] w-2/4 text-slate-50'> <FaInstagram className=' mr-1'/>@ARCATULUM</NavLink>
            <div className='w-1/4'>
              <div className=' text-slate-50 tracking-[0.1rem] font-eloquent text-[0.4rem]'>NORTH</div>
              <div className=' text-slate-50 tracking-[0.05rem] -mt-[0.14rem] font-eloquent text-[0.36rem]'>AMERICA'S</div>
              <div className=' text-slate-50 tracking-[-0.4rem] font-eloquent scale-x-110 text-5xl mr-3'>50</div>
              <div className=' text-slate-50 tracking-[-0.1rem] font-eloquent -mt-3 mr-2 text-[1.2rem]'>BEST</div>
              <div className=' text-slate-50 tracking-[-0.02rem] font-eloquent -mt-3 mr-2 text-[0.9rem]'>BARS</div>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
    </section>
  )
}

export default Home
import React from 'react'
import img1 from '../assets/menus/vinos/vinos1.jpg'
import img2 from '../assets/menus/vinos/vinos2.jpg'
import img3 from '../assets/menus/vinos/vinos3.jpg'
import img4 from '../assets/menus/vinos/vinos4.jpg'
import img5 from '../assets/menus/vinos/vinos5.jpg'
import img6 from '../assets/menus/vinos/vinos6.jpg'
import img7 from '../assets/menus/vinos/vinos7.jpg'
import img8 from '../assets/menus/vinos/vinos8.jpg'
import { TiArrowBackOutline } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'

const Vinos = () => {
  return (
    <div>
        <NavLink className=' to-slate-50 fixed top-5 left-5 rounded-md bg-slate-900'
            to={'/bebidas'}
            >
                <TiArrowBackOutline className=' text-slate-50' />
            </NavLink>
            <img className=' md:h-full md:m-auto' src={img1} alt="" />
            <img className=' md:h-full md:m-auto' src={img2} alt="" />
            <img className=' md:h-full md:m-auto' src={img3} alt="" />
            <img className=' md:h-full md:m-auto' src={img4} alt="" />
            <img className=' md:h-full md:m-auto' src={img5} alt="" />
            <img className=' md:h-full md:m-auto' src={img6} alt="" />
            <img className=' md:h-full md:m-auto' src={img7} alt="" />
            <img className=' md:h-full md:m-auto' src={img8} alt="" />
    </div>
  )
}

export default Vinos
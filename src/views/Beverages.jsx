import React from 'react'
import img1 from '../assets/menus/beverages/beverages1.jpg'
import img2 from '../assets/menus/beverages/beverages2.jpg'
import { TiArrowBackOutline } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'

const Beverages = () => {
  return (
    <div>
        <NavLink className=' to-slate-50 fixed top-5 left-5 rounded-md bg-slate-900'
            to={'/drinks'}
            >
                <TiArrowBackOutline className=' text-slate-50' />
            </NavLink>
            <img className=' md:h-full md:m-auto' src={img1} alt="" />
            <img className=' md:h-full md:m-auto' src={img2} alt="" />
    </div>
  )
}

export default Beverages
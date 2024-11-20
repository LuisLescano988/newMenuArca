import React from 'react'
import img1 from '../assets/menus/cocktails/cocktails1.jpg'
import img2 from '../assets/menus/cocktails/cocktails2.jpg'
import img3 from '../assets/menus/cocktails/cocktails3.jpg'
import { TiArrowBackOutline } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'

const Cocktails = () => {
    return (
        <div className=' '>
            <NavLink className=' to-slate-50 fixed top-5 left-5 rounded-md bg-slate-900'
            to={'/drinks'}
            >
                <TiArrowBackOutline className=' text-slate-50' />
            </NavLink>
            <img className=' md:h-full md:m-auto' src={img1} alt="" />
            <img className='h-screen md:h-full md:m-auto' src={img3} alt="" />
            <img className=' md:h-full md:m-auto' src={img2} alt="" />
        </div>
    )
}

export default Cocktails
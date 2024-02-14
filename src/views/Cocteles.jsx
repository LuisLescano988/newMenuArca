import React from 'react'
import img1 from '../assets/menus/cocteles/cocteles1.jpg'
import img2 from '../assets/menus/cocteles/cocteles2.jpg'
import img3 from '../assets/menus/cocteles/cocteles3.jpg'
import { TiArrowBackOutline } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'

const Cocteles = () => {
    return (
        <div className=' '>
            <NavLink className=' to-slate-50 fixed top-5 left-5 rounded-md bg-slate-900'
            to={'/bebidas'}
            >
                <TiArrowBackOutline className=' text-slate-50' />
            </NavLink>
            <img className=' md:h-full md:m-auto' src={img1} alt="" />
            <img className=' md:h-full md:m-auto' src={img2} alt="" />
            <img className='h-screen md:h-full md:m-auto' src={img3} alt="" />
        </div>
    )
}

export default Cocteles
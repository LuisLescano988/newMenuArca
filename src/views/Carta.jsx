import React from 'react'
import img1 from '../assets/menus/carta/cena1.jpg'
import img2 from '../assets/menus/carta/cena2.jpg'
import { TiArrowBackOutline } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'

const Carta = () => {
  return (
    <div>
        <NavLink className=' to-slate-50 fixed top-5 left-5 rounded-md bg-slate-900'
            to={'/comida'}
            >
                <TiArrowBackOutline className=' text-slate-50' />
            </NavLink>
            <img className=' md:h-full md:m-auto' src={img1} alt="" />
            <img className=' md:h-full md:m-auto' src={img2} alt="" />
    </div>
  )
}

export default Carta
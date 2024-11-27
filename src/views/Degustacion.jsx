import React from 'react'
import img1 from '../assets/menus/degustacion/degustacion1.jpg'
import img2 from '../assets/menus/degustacion/degustacion2.jpg'
import { TiArrowBackOutline } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'

const Degustacion = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-[#fef0e6] min-h-screen">
      <div className="space-y-8 mb-16">
        {degustacionData.items.map((item, index) => (
          <CourseItem
            key={index}
            description={item.description}
            index={index + 1}
          />
        ))}
      </div>

      <div className="mt-16 space-y-2">
        {degustacionData.footer.map((note, index) => (
          <FooterNote key={index} text={note} />
        ))}
      </div>
    </div>
  )
}

export default Degustacion
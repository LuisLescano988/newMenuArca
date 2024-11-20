import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data/data';

const BeverageSection = ({ title, items }) => (
  <div className="mb-16">
    <h2 className="text-xl tracking-[1em] font-thin mb-8">{title}</h2>
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="flex justify-between items-baseline">
          <h3 className="text-lg font-thin">{item.name}</h3>
          <span className="text-lg font-thin">{item.price}</span>
        </div>
      ))}
    </div>
  </div>
);

const Beverages = () => {
  const { menuType } = useParams();
  const menuData = data[menuType]; // 'drinks' o 'bebidas'

  return (
    <div className="max-w-6xl mx-auto p-8 bg-[#fef0e6] min-h-screen">
      <h1 className="text-2xl tracking-[1em] font-thin mb-16">{menuData.title}</h1>
      {menuData.sections.map((section, index) => (
        <BeverageSection 
          key={index}
          title={section.title}
          items={section.items}
        />
      ))}
    </div>
  );
};

export default Beverages;
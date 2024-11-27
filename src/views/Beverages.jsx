import React from 'react';



const SectionTitle = ({ title }) => (
  <h2 className="text-2xl tracking-[1em] font-light mb-8 uppercase">
    {title}
  </h2>
);

const MenuItem = ({ name, price }) => (
  <div className="flex justify-between items-baseline mb-4">
    <h3 className="text-2xl font-extralight">{name}</h3>
    <span className="text-2xl font-extralight">{price}</span>
  </div>
);

const MenuSection = ({ title, items }) => (
  <div className="mb-16">
    <SectionTitle title={title} />
    <div className="space-y-4">
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  </div>
);

const Beverages = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-[#fef0e6] min-h-screen">
      <MenuSection title="B E E R" items={beveragesData.beer} />
      <MenuSection title="B E V E R A G E S" items={beveragesData.beverages} />
      <MenuSection title="C O F F E E" items={beveragesData.coffee} />

    </div>
  )
}

export default Beverages
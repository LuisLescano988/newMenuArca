import React from 'react';

const MenuItem = ({ description }) => (
  <div className="mb-12 px-20">
    <p className="text-2xl font-extralight leading-relaxed">
      {description}
    </p>
  </div>
);

const Separator = () => (
  <div className="my-16 px-20 flex justify-start">
    <div className="w-1/5 h-px bg-gray-400"></div>
  </div>
);

const Prefij = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-[#fef0e6] min-h-screen">
      {/* <h1 className="text-3xl tracking-[1em] font-extralight mb-16 uppercase">
        MENÚ PREFIJO
      </h1> */}

      <div className="space-y-8">
        {prefijData.items.map((item, index) => (
          item.isSeparator ? (
            <Separator key={`sep-${index}`} />
          ) : (
            <MenuItem
              key={`item-${index}`}
              description={item.description}
            />
          )
        ))}
      </div>
    </div>
  )
}

export default Prefij
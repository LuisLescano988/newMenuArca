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

const Brevajes = () => {

  const beveragesData = {
    cerveza: [
      {
        name: "Agua De Mar Citrus Pale Ale",
        price: "220"
      },
      {
        name: "Loba Lager",
        price: "180"
      },
      {
        name: "La Lupulosa IPA",
        price: "180"
      },
      {
        name: "Haka Negui Consup Pilsner",
        price: "200"
      },
      {
        name: "Lindemann's Apple Beer",
        price: "200"
      }
    ],
    refrescos: [
      {
        name: "Acqua Panna Still",
        price: "200"
      },
      {
        name: "San Pellegrino",
        price: "200"
      },
      {
        name: "Agua Franca Still",
        price: "150"
      },
      {
        name: "Agua Franca Sparklin",
        price: "150"
      },
      {
        name: "Tonic Water",
        price: "80"
      },
      {
        name: "Ginger Ale",
        price: "80"
      },
      {
        name: "Ginger Birra Non Alcoholic",
        price: "100"
      },
      {
        name: "Coca Cola",
        price: "80"
      }
    ],
    cafeteria: [
      {
        name: "Espresso",
        price: "90"
      },
      {
        name: "Lungo",
        price: "100"
      },
      {
        name: "Americano",
        price: "110"
      }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-[#fef0e6] min-h-screen">
      <MenuSection title="C E R V E Z A" items={beveragesData.cerveza} />
      <MenuSection title="R E F R E S C O S" items={beveragesData.refrescos} />
      <MenuSection title="C A F E T E R I A" items={beveragesData.cafeteria} />
    </div>
  )
}

export default Brevajes
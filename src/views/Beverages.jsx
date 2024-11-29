import React from 'react';



const SectionTitle = ({ title }) => (
  <h2 className="text-2xl max-sm:text-sm tracking-[1em] font-light mb-8 uppercase">
    {title}
  </h2>
);

const MenuItem = ({ name, price }) => (
  <div className="flex justify-between items-baseline mb-4">
    <h3 className="text-2xl max-sm:text-sm font-extralight">{name}</h3>
    <span className="text-2xl max-sm:text-sm font-extralight">{price}</span>
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

  const beveragesData = {
    beer: [
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
    beverages: [
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
    coffee: [
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
      <MenuSection title="B E E R" items={beveragesData.beer} />
      <MenuSection title="B E V E R A G E S" items={beveragesData.beverages} />
      <MenuSection title="C O F F E E" items={beveragesData.coffee} />
    </div>
  );
};

export default Beverages;
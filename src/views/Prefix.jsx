import React from 'react';

const MenuItem = ({ description }) => (
  <div className="mb-12 px-20">
    <p className="text-xl font-extralight leading-relaxed">
      {description}
    </p>
  </div>
);

const Separator = () => (
  <div className="my-16 px-20 flex justify-start">
    <div className="w-1/5 h-px bg-gray-400"></div>
  </div>
);

const Prefix = () => {

  const prefijData = {
    items: [
      {
        description: "Dzikilpak - roasted pumpkin seed dip - squash blossoms\ncharred scallions and green tomatoes - hierloom coriander\nchive oil - crispy tostadas"
      },
      {
        description: "Scallop crudo - basil and coconut salsa verde\npickled onion flowers - scallop chicharrón - sapphire"
      },
      {
        description: "Soft shell crab in amaranth tempura tacos - xoconostle\nand pickled habanero salsa hoja santa emulsion - grilled hoja santa"
      },
      {
        isSeparator: true
      },
      {
        description: "Seared stripped sea bass - charred poblano and tomatillo mole\nfresh coconut and daikon salad - serrano - chive oil"
      },
      {
        description: "Grilled Wagyu Flank Steak - smoked yuca mole -\nbone marrow huitlacoche mole - crispy oxtail carnitas"
      },
      {
        isSeparator: true
      },
      {
        description: "Marquesita - goat cheese and coconut icecream - dulce de leche\nguayaba and hibiscus reduction"
      },
      {
        description: "Roasted banana tamal - chamomile & Tabasco chocolate ice cream\npecan crumble - chamomile kombucha reduction"
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-[#fef0e6] min-h-screen">
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
  );
};

export default Prefix;
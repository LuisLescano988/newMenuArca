import React from 'react';
import { BiLeaf } from "react-icons/bi";

const MenuItem = ({ name, price, description, isVegetarian }) => (
  <div className="mb-12">
    <div className="flex justify-between items-baseline">
      <h2 className="text-xl tracking-tight font-extralight underline uppercase">
        {name} {isVegetarian && <BiLeaf className="inline ml-1" />}
      </h2>
      <span className="text-lg font-extralight">{price}</span>
    </div>
    <div className="mt-2 text-gray-700 font-extralight tracking-tight leading-relaxed">
      {description.split('\n').map((line, i) => (
        <p key={i} className={i > 0 ? 'mt-1' : ''}>
          {line}
        </p>
      ))}
    </div>
  </div>
);

const Carta = () => {
  const menuItems = [
    {
      name: "DZIKILPAK",
      description: "smoked pumpkin seeds - chive oil - heirloom coriander - xoconostle\ncrispy heirloom corn tostada",
      price: "520",
      isVegetarian: true
    },
    {
      name: "SCALLOP CRUDO",
      description: "smoked pumpkin seeds - chive oil - heirloom coriander - xoconostle\ncrispy heirloom corn tostada\nadd caviar + 1200",
      price: "850"
    },
    {
      name: "BLUEFIN TUNA CRUDO",
      description: "hibiscus and fermented plum aguachile - morita chili - dulce seaweed\npurple basil",
      price: "780"
    },
    {
      name: "VENISSON TARTARE",
      description: "smoked salsa macha - jícama - cotixa cheese - blood tostadas",
      price: "660"
    },
    {
      name: "GRILLED BROCCOLINI",
      description: "herb cesar dressing - fried capers - crispy bread - parmesan crisps\ntoasted seaweed",
      price: "550",
      isVegetarian: true
    },
    {
      name: "SOFTSHELL CRAB TACO",
      description: "amaranth and mezcal tempura - hoja santa emulsion -\nfermented habanero & xoconostle salsa",
      price: "600"
    },
    {
      name: "CRAB ESQUITES",
      description: "heirloom corn - crab meat - coconut crab bisque - charred heirloom\ntomato - chives",
      price: "700"
    },
    {
      name: "ROASTED PRAWNS",
      description: "morita chili - plantain vinegar - prawn butter - manzano chili ferment",
      price: "700"
    },
    {
      name: "SMOKED TROUT TOSTADA",
      description: "crispy skin - trout roe - green allspice leaf sauce emulsion\npickled goose berrys - smoked crema",
      price: "800"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-8 bg-[#fef0e6] min-h-screen">
      <div className="space-y-4">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Carta;
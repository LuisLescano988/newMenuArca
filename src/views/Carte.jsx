import React from 'react';
import { BiLeaf } from "react-icons/bi";

const MenuItem = ({ name, price, description, isVegetarian }) => (
  <div className="mb-12">
    <div className="flex justify-between items-baseline">
      <h2 className="text-2xl max-sm:text-sm tracking-tight font-extralight underline uppercase">
        {name} {isVegetarian && <BiLeaf className="inline ml-1" />}
      </h2>
      <span className="text-2xl max-sm:text-sm font-extralight">{price}</span>
    </div>
    <div className="mt-2 text-2xl max-sm:text-sm text-gray-700 font-extralight tracking-tight leading-relaxed">
      {description.split('\n').map((line, i) => (
        <p key={i} className={i > 0 ? 'mt-1' : ''}>
          {line}
        </p>
      ))}
    </div>
  </div>
);

const Carte = () => {
  const menuItems = [
    {
      name: "DZIKILPAK",
      description: "smoked pumpkin seeds - chive oil - xoconostle\nheirloom coriander - crispy heirloom corn tostada",
      price: "390",
      isVegetarian: true
    },
    {
      name: "VENISON TARTARE",
      description: "smoked salsa macha - jícama - cotixa cheese\nblood tostadas",
      price: "490"
    },
    {
      name: "GRILLED MUSHROOM TLAYUDA",
      description: "mushroom chicharrón - huitlacoche mole - chives\ncoriander - black sesame seed - nasturtium",
      price: "550"
    },
    {
      name: "THE WHOLE SQUASH",
      description: "roasted local squash - squash flowers\ngrilled squash leaves - crispy squash seed",
      price: "590",
      isVegetarian: true
    },
    {
      name: "GRILLED BROCCOLINI",
      description: "herb cesar dressing - fried capers - crispy bread\nparmesan crisps - toasted seaweed",
      price: "640",
      isVegetarian: true
    },
    {
      name: "SOFTSHELL CRAB TACO",
      description: "amaranth and mezcal tempura - hoja santa emulsion \nfermented habanero & xoconostle salsa",
      price: "640"
    },
    {
      name: "BONE MARROW",
      description: "toasted in the woodfire oven - serrano salsa\ngrilled pulque sourdough - tamarind and pasilla glacé",
      price: "720"
    },
    {
      name: "ROASTED PRAWNS",
      description: "morita chilli - plantain vinegar - prawn butter\nmanzano chilli ferment",
      price: "750"
    },
    {
      name: "CRAB ESQUITES",
      description: "heirloom corn - crab meat - coconut crab bisque\ncharred heirloom - tomato - chives",
      price: "790"
    },
    {
      name: "BLUEFIN TUNA CRUDO",
      description: "hibiscus and fermented plum aguachile\nmorita chili - dulce seaweed - purple basil",
      price: "840"
    },
    {
      name: "SMOKED TROUT TOSTADA",
      description: "crispy skin - green allspice leaf sauce emulsion\npickled gooseberries - smoked crema -  trout roe",
      price: "840"
    },
    {
      name: "SCALLOP CRUDO",
      description: "smoked pumpkin seeds - chive oil - xoconostle\nheirloom coriander - crispy heirloom corn tostada\nadd caviar + 1200",
      price: "890"
    },
    {
      name: "STRIPED SEABASS",
      description: "seared in coconut oil - green mole - local basil\ncoconut & jicama slaw",
      price: "940"
    },
    {
      name: "MAYAN OCTOPUS",
      description: "lentil purée - lentil granola - pickled radishes\nlonganiza - xcatic & allspice leaf salsa",
      price: "980"
    },
    {
      name: "MEXICAN WAGYU TLAYUDA",
      description: "grilled flank steak - oxtail carnitas\nsmoked yuca purée - huilacoche mole",
      price: "1180"
    },
    {
      name: "SUCKLING PIG",
      description: "crispy belly - smoked carnitas - cinnamon leaf oil\nrice bean - soursop & sea purslane salsa",
      price: "1240"
    },
    {
      name: "GRILLED SOURDOUGH PULQUE BREAD",
      description: "coconut butter",
      price: "280",
      isVegetarian: true
    },
    {
      name: "COCONUT FLOUR TORTILLA",
      description:"",
      price: "280",
      isVegetarian: true
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

export default Carte;
import React from 'react';
import { BiLeaf } from "react-icons/bi";

const MenuItem = ({ name, price, description, isVegetarian }) => (
  <div className="mb-12">
    <div className="flex justify-between items-baseline">
      <h2 className="text-2xl tracking-tight font-extralight underline uppercase">
        {name} {isVegetarian && <BiLeaf className="inline ml-1" />}
      </h2>
      <span className="text-2xl font-extralight">{price}</span>
    </div>
    <div className="mt-2 text-2xl text-gray-700 font-extralight tracking-tight leading-relaxed">
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
    },
    {
      name: "STRIPPED SEABASS",
      description: "seared in coconut oil - green mole - local basil - coconut & jicama slaw",
      price: "800"
    },
    {
      name: "THE WHOLE SQUASH",
      description: "roasted local squash - quash flowers - grilled squash leafs\ncrispy squash seed",
      price: "580",
      isVegetarian: true
    },
    {
      name: "MAYAN OCTOPUS",
      description: "lentil pure - lentil granola - pickled radishes - longaniza\nxcatic & allspice leaf salsa",
      price: "780"
    },
    {
      name: "SUCKLING PIG",
      description: "crispy belly - smoked carnitas - cinnamon leaf oil - rice bean\nsoursop & sea purslane salsa",
      price: "850"
    },
    {
      name: "BONE MARROW",
      description: "toasted in the woodfire oven - tamarind and pasilla glace\ngrilled pulque sourdough - serrano salsa",
      price: "680"
    },
    {
      name: "GRILLED MUSHROOM TLAYUDA",
      description: "mushroom chicharrón - huitlacoche mole - chives - coriander\nblack sesame seed - nasturtium",
      price: "550"
    },
    {
      name: "MEXICAN WAGYU TLAYUDA",
      description: "grilled flank steak - oxtail carnitas - smoked yuca pure - huilacoche mole",
      price: "900"
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
    <div>
        <NavLink className=' to-slate-50 fixed top-5 left-5 rounded-md bg-slate-900'
            to={'/food'}
            >
                <TiArrowBackOutline className=' text-slate-50' />
            </NavLink>
            <img className=' md:h-full md:m-auto' src={img1} alt="" />
            <img className=' md:h-full md:m-auto' src={img2} alt="" />
    </div>
  )
}

export default Carte
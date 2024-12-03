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

const Carta = () => {
  const menuItems = [
    {
      "name": "DZIKILPAK",
      "description": "Dip de pepitas ahumadas - miso de pepitas - flor de calabaza -\ncilantro criollo - aceite de cebollín - tostadas tatemadas",
      "price": "390",
      "isVegetarian": true
    },
    {
      "name": "TARTAR VENADO LOCAL",
      "description": "Salsa macha - jícama - queso cotixa - chaya parrillada - tostadas\ntatemadas",
      "price": "490"
    },
    {
      "name": "TLAYUDA DE SETAS",
      "description": "Setas parrilladas - chicharrón de hongos - mole de huitlacoche\ncebollón - sésamo negro - mastuerzo",
      "price": "550"
    },
    {
      "name": "CALABAZA LOCAL",
      "description": "A la parrilla - témpura de flores de calabaza - ensalada de hojas de calabaza\ny guías - mole de semillas de calabaza - granola de pepitas tostadas",
      "price": "590",
      "isVegetarian": true
    },
    {
      "name": "BROCOLINI PARRILLADO",
      "description": "Aderezo césar - suero de parmesano - cebollín - parmesano crujiente\n- alcaparras fritas",
      "price": "640",
      "isVegetarian": true
    },
    {
      "name": "TACOS DE JAIBA CONCHA SUAVE",
      "description": "En témpura de amaranto y mezcal - kosho de xoconostle y habanero\n- emulsión de hoja santa - hoja santa parrillada",
      "price": "640"
    },
    {
      "name": "TUÉTANO ROSTIZADO",
      "description": "Rostizado al horno de leña - glaseado de tamarindo y\npasilla - chile serrano - pan de pulque a la parrilla",
      "price": "720"
    },
    {
      "name": "CAMARONES DE CAMPECHE",
      "description": "Rostisados en mantequilla de chile morita - vinagre de\nplátano macho - salsa de chile manzano",
      "price": "750"
    },
    {
      "name": "ESQUITES DE CANGREJO",
      "description": "Maíz cacahuazintle - carne de cangrejo ahumada - bisque cangrejo\ny coco - polvo de flamboyan - maíz tostado - chorizo",
      "price": "790"
    },
    {
      "name": "CRUDO DE ATÚN ALETA AZUL",
      "description": "Aguachile de chile morita y ciruela local fermentada - kosho de jamaica -\noxalis - toronja - rábano sandía lacto fermentado - tostadas de tapioca",
      "price": "840"
    },
    {
      "name": "TOSTADA DE TRUCHA AHUMADA",
      "description": "En hojas de pimiento gorda - chicharrón de piel de trucha - emulsión de\naceite de hojas verdes de pimienta gorda - grosella fermentada - cilantro",
      "price": "840"
    },
    {
      "name": "CRUDO DE CALLO DE HACHA",
      "description": "Aguachile de serrano y tomatillo fermentado - aceite de sacate limón -\npolvo de lechuga de mar - salicornia - chicharrón de callo y amaranto\n- kosho de lima local - aguacate y pepino parrillado",
      "price": "890"
    },
    {
      "name": "LOBINA RAYADA",
      "description": "Sellada en aceite de coco - mole verde caribeño - ensalada de\ncoco y jícama - serrano - aceite de albahaca local",
      "price": "940"
    },
    {
      "name": "PULPO AL PASTOR",
      "description": "Cocinado en tepache - adobo de guajillo - mole de lentejas - granola de\nlentejas - rábanos encurtidos - salsa de chile xcatix y pimienta gorda",
      "price": "980"
    },
    {
      "name": "TLAYUDA DE WAGUY MEXICANO",
      "description": "Sésamo negro - mole de huitlacoche y tuétano - queso\nchiapas - carnitas de rabo de toro",
      "price": "1180"
    },
    {
      "name": "CARNITAS DE LECHÓN",
      "description": "Ahumadas en madera de canela fresca - reducción de orejón -\nverdogala - vinagre de mucílago de cacao local - aceite de hojas\nverdes de canela - tortillas",
      "price": "1240"
    },
    {
      "name": "PAN DE PULQUE",
      "description": "mantequilla de coco",
      "price": "280",
      "isVegetarian": true
    },
    {
      "name": "TORTILLAS",
      "description": "de harina",
      "price": "280",
      "isVegetarian": true
    }
  ];
  
  return (
    <div className="max-w-6xl mx-auto p-8 bg-[#fef0e6] min-h-screen">
      <div className="space-y-4">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Carta
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
      "description": "Dip de pepitas ahumadas - miso de pepitas\nflor de calabaza - cilantro criollo\n aceite de cebollín - tostadas tatemadas",
      "price": "390",
      "isVegetarian": true
    },
    {
      "name": "TARTAR VENADO LOCAL",
      "description": "Salsa macha - jícama - queso cotixa\nchaya parrillada - tostadas tatemadas",
      "price": "490"
    },
    {
      "name": "TLAYUDA DE SETAS",
      "description": "Setas parrilladas - chicharrón de hongos\nmole de huitlacoche - cebollón\nsésamo negro - mastuerzo",
      "price": "550"
    },
    {
      "name": "CALABAZA LOCAL",
      "description": "A la parrilla - témpura de flores de calabaza\nensalada de hojas de calabaza y guías - mole de semillas de calabaza - granola de pepitas tostadas",
      "price": "590",
      "isVegetarian": true
    },
    {
      "name": "BROCOLINI PARRILLADO",
      "description": "Aderezo césar - suero de parmesano - cebollín\nparmesano crujiente - alcaparras fritas",
      "price": "640",
      "isVegetarian": true
    },
    {
      "name": "TACOS DE JAIBA CONCHA SUAVE",
      "description": "En témpura de amaranto y mezcal\nkosho de xoconostle y habanero - emulsión de\nhoja santa - hoja santa parrillada",
      "price": "640"
    },
    {
      "name": "TUÉTANO ROSTIZADO",
      "description": "Rostizado al horno de leña - glaseado de tamarindo y pasilla - chile serrano - pan de pulque a la parrilla",
      "price": "720"
    },
    {
      "name": "CAMARONES DE CAMPECHE",
      "description": "Rostisados en mantequilla de chile morita\nvinagre de plátano macho - salsa de chile manzano",
      "price": "750"
    },
    {
      "name": "ESQUITES DE CANGREJO",
      "description": "Maíz cacahuazintle - carne de cangrejo ahumada\nbisque cangrejo y coco - polvo de flamboyan\nmaíz tostado - chorizo",
      "price": "790"
    },
    {
      "name": "CRUDO DE ATÚN ALETA AZUL",
      "description": "Aguachile de chile morita y ciruela local fermentada\nkosho de jamaica - oxalis - toronja - rábano sandía lacto fermentado - tostadas de tapioca",
      "price": "840"
    },
    {
      "name": "TOSTADA DE TRUCHA AHUMADA",
      "description": "En hojas de pimiento gorda - chicharrón de piel\n de trucha - emulsión de aceite de hojas verdes de\n pimienta gorda - grosella fermentada - cilantro",
      "price": "840"
    },
    {
      "name": "CRUDO DE CALLO DE HACHA",
      "description": "Aguachile de serrano y tomatillo fermentado\naceite de sacate limón - polvo de lechuga de mar\nsalicornia - chicharrón de callo y amaranto\nkosho de lima local - aguacate y pepino parrillado",
      "price": "890"
    },
    {
      "name": "LOBINA RAYADA",
      "description": "Sellada en aceite de coco - mole verde caribeño\nensalada de coco y jícama - serrano - aceite de albahaca local",
      "price": "940"
    },
    {
      "name": "PULPO AL PASTOR",
      "description": "Cocinado en tepache - adobo de guajillo\nmole de lentejas - granola de lentejas\nsalsa de chile xcatix y pimienta gorda\nrábanos encurtidos",
      "price": "980"
    },
    {
      "name": "TLAYUDA DE WAGUY MEXICANO",
      "description": "Sésamo negro - mole de huitlacoche y tuétano\nqueso chiapas - carnitas de rabo de toro",
      "price": "1180"
    },
    {
      "name": "CARNITAS DE LECHÓN",
      "description": "Ahumadas en madera de canela fresca\nvinagre de mucílago de cacao local - reducción de orejón verdogala - aceite de hojas verdes de canela\ntortillas",
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
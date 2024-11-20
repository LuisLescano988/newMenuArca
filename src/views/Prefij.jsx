import React from 'react';

const MenuItem = ({ description }) => (
  <div className="mb-12 px-20">
    <p className="text-lg font-extralight leading-relaxed">
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

  const prefijData = {
    items: [
      {
        description: "Dzikilpak - dip hecho de pepitas tostadas - flor de calabaza\ncebolla cambray tomatillo parrillado - cilantro criollo - tostadas tatemadas"
      },
      {
        description: "Crudo de callo de hacha - salsa verde de albahaca y coco\nchicharrón de callo - salicornia"
      },
      {
        description: "Taco de jaiba concha suave en tempura de amaranto\nsalsa de Xoconostle y habanera - aioli de hoja santa\nhoja santa parrillada"
      },
      {
        isSeparator: true
      },
      {
        description: "Lobina sellada en aceite de coco - mole de poblano y tomatillo\nparrillado - ensalada de coco y jícama serrano - aceite de cebollín"
      },
      {
        description: "Wagyu parrillado – pure de yuca ahumado – mole de tuetano y\nhuitlacoche - rabo de toro crujiente"
      },
      {
        isSeparator: true
      },
      {
        description: "Marquesita - helado de queso de cabra - dulce de leche\nsalsa guayaba"
      },
      {
        description: "Tamal de plátano rostizado - helado de manzanilla y chocolate de Tabasco\nnuez pecana garapiñada chips de plátano macho"
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

export default Prefij;
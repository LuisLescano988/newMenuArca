import React from 'react';

const CourseItem = ({ description, index }) => (
  <div className="mb-12">
    <p className="text-lg font-extralight leading-relaxed">
      {description}
    </p>
  </div>
);

const FooterNote = ({ text }) => (
  <p className="text-sm font-extralight text-gray-600 italic">
    {text}
  </p>
);

const Degustacion = () => {

  const degustacionData = {
    items: [
      {
        description: "Erizo y callo - aguachile de mandarina, cempasúchil y chile mixe chapulines de lluvia - kimchi de jícama"
      },
      {
        description: "Terrina de pulpo parrillado en recado negro - costra de queso cotija como tostada salsa macha de cacahuate y ajonjolí ahumado"
      },
      {
        description: "Lobina curada kombu - chicharrón de lobina como tostada emulsión de lechuga de mar aguacate - chaya"
      },
      {
        description: "Flauta de centollo - mole verde - emulsión de cebollín - caviar"
      },
      {
        description: "Taco de jaiba concha suave en tempura de amaranto y mezcal emulsión de hoja santa salsa de xoconostle y habanero fermentado"
      },
      {
        description: "Camarón de Campeche - vinagre de plátano - aceite de chile morita salsa de chile manzano fermentado - tortillas de harina"
      },
      {
        description: "Wagyu mexicano - tlayuda de sésamo negro - mollejas crujientes mole de huitlacoche - queso chiapas"
      },
      {
        description: "Taquisa de chicharrón de cara de lechon - tuétano rostizado carnitas de rabo de toro - tortillas de sangre - salsa verde - jugos de cocción"
      },
      {
        description: "Marquesita - helado de queso de cabra - dulce de leche - salsa guayaba"
      },
      {
        description: "Tamal de plátano rostizado - helado de manzanilla y chocolate de Tabasco nuez pecana garapiñada chips de plátano macho"
      }
    ],
    footer: [
      "*La mesa completa debe llevar el menú degustación, hasta 4 personas.",
      "*Solo con reserva"
    ]
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-[#fef0e6] min-h-screen">
      <div className="space-y-8 mb-16">
        {degustacionData.items.map((item, index) => (
          <CourseItem
            key={index}
            description={item.description}
            index={index + 1}
          />
        ))}
      </div>

      <div className="mt-16 space-y-2">
        {degustacionData.footer.map((note, index) => (
          <FooterNote key={index} text={note} />
        ))}
      </div>
    </div>
  );
};

export default Degustacion;
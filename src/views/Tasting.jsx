import React from 'react';

const CourseItem = ({ description, index }) => (
  <div className="mb-12">
    <p className="text-2xl max-sm:text-sm font-extralight leading-relaxed">
      {description}
    </p>
  </div>
);


const FooterNote = ({ text }) => (
  <p className="text-sm font-extralight text-gray-600 italic">
    {text}
  </p>
);

const Tasting = () => {

  const tastingData = {
    items: [
      {
        description: "Sea Urchin and scallop ceviche - mandarine, marigold and chile mixe aguachile chapulines - jicama kimchi"
      },
      {
        description: "Grilled octopus terrine tostada - cotija cheese crisp\nsmoked peanut and sesame salsa macha"
      },
      {
        description: "Cured and smoked seabass - fish skin chicharrón\nsea weed and lemongrass aguachile"
      },
      {
        description: "Spider crab flauta - lemongrass and coconut mole - chive emulsion - caviar"
      },
      {
        description: "Soft shell crab in amaranth and mezcal tempura - hoja santa emulsion\nfermented habanero and xoconostle salsa"
      },
      {
        description: "Seared Campeche prawns - morita chilli oil - plantain vinegar\nmanzano chilli salsa - flour tortillas"
      },
      {
        description: "Wagyu - black sesame tlayuda - crispy sweetbreads\nbone marrow and huitlacoche mole"
      },
      {
        description: "Suckling pig chicharrón - roasted bone marrow - oxtail carnitas\nblood tortillas - salsa verde - cooking juices"
      },
      {
        description: "Marquesita - goat cheese and coconut ice cream - dulce de leche\nguayaba and hibiscus reduction"
      },
      {
        description: "Roasted banana tamal - chamomile & Tabasco chocolate ice cream\npecan crumble - chamomile kombucha reduction"
      }
    ],
    footer: [
      "*The complete table must take the tasting menu, up to 4 people",
      "*By reservation only"
    ]
   };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-[#fef0e6] min-h-screen">
      <div className="space-y-8 mb-16">
        {tastingData.items.map((item, index) => (
          <CourseItem
            key={index}
            description={item.description}
            index={index + 1}
          />
        ))}
      </div>

      <div className="mt-16 space-y-2">
        {tastingData.footer.map((note, index) => (
          <FooterNote key={index} text={note} />
        ))}
      </div>
    </div>
  );
};

export default Tasting;
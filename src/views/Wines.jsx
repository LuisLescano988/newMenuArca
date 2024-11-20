import React from 'react';

const MenuCategory = ({ title }) => (
  <div className="mb-16">
    <h2 className="text-xl tracking-[0.5em] font-light mb-8 uppercase">{title}</h2>
  </div>
);

const SubCategory = ({ title, items }) => (
  <div className="mb-16">
    {title && (
      <h3 className="text-xl tracking-[0.5em] font-light mb-8 uppercase">{title}</h3>
    )}
    <div className="space-y-8">
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  </div>
);

const MenuItem = ({ name, description, year, region, price }) => (
  <div className="flex justify-between items-start gap-8 mb-6">
    <div className="flex-grow">
      <div className="text-lg font-light leading-relaxed">{name}</div>
      {description && (
        <div className="text-lg font-light leading-relaxed">{description}</div>
      )}
      <div className="text-lg font-light leading-relaxed">
        {year} {region}
      </div>
    </div>
    <div className="text-lg font-light whitespace-nowrap">
      {price}
    </div>
  </div>
);

const Wines = () => {
  const menuData = {
    "categories": [
      {
        "title": "COPEO BLANCO",
        "items": [
          {
            "name": "Domaine de la Combre, Muscadet",
            "year": "2020",
            "region": "Valle de Loire",
            "country": "Francia",
            "price": "380"
          }
        ]
      },
      {
        "title": "TINTO",
        "items": [
          {
            "name": "Montemar, Bodegas Icaro, Nebbiolo, Cabernet sauvignon",
            "year": "2019",
            "region": "Dolores Hidalgo, Guanajuato",
            "country": "México",
            "price": "460"
          },
          {
            "name": "Animal Orgánico, Malbec",
            "year": "2021",
            "region": "Mendoza",
            "country": "Argentina",
            "price": "460"
          }
        ]
      },
      {
        "title": "ESPUMOSO",
        "items": [
          {
            "name": "Cava Parxet, Macabeo, Parellada, Xarel-lo",
            "region": "Penedés",
            "country": "España",
            "price": "400"
          }
        ]
      },
      {
        "title": "POSTRE",
        "items": [
          {
            "name": "Maculan, Dindarello, Moscato",
            "year": "2021",
            "region": "Veneto",
            "country": "Italia",
            "price": "400"
          }
        ]
      },
      {
        "title": "BLANCO FRANCIA",
        "items": [
          {
            "name": "Châteauneuf du pape, Clos de la Roquette, Roussane, Clairete Grenache blanc",
            "year": "2020",
            "region": "Ródano",
            "country": "Francia",
            "price": "5000"
          }
        ]
      },
      {
        "title": "ITALI",
        "items": [
          {
            "name": "Donnachiara, Fiano di Avellino DOCG",
            "year": "2021",
            "region": "Campania",
            "country": "Italia",
            "price": "2500"
          },
          {
            "name": "Andrea Felici, Verdicchio classico superiore",
            "year": "2022",
            "region": "Marche",
            "country": "Italia",
            "price": "2000"
          },
          {
            "name": "Ottin, Petite Arvine",
            "year": "2019",
            "region": "Aosta",
            "country": "Italia",
            "price": "3000"
          },
          {
            "name": "Cervaro della sala, Chardonnay",
            "year": "2021",
            "region": "Umbria",
            "country": "Italia",
            "price": "6000"
          }
        ]
      },
      {
        "title": "ALEMANIA",
        "items": [
          {
            "name": "Wittmann Brunnenhäuschen VDP Grosse Lage Spätlese, Riesling",
            "year": "2021",
            "region": "Rheinhessen",
            "country": "Alemania",
            "price": "3500"
          }
        ]
      },
      {
        "title": "AUSTRIA",
        "items": [
          {
            "name": "F.X. Pichier Ried Klostersatz, Gruner Veltliner Federspiel",
            "year": "2021",
            "region": "Wachau",
            "country": "Austria",
            "price": "3000"
          }
        ]
      },
      {
        "title": "GRECIA",
        "items": [
          {
            "name": "Rouvalis, Assyrtiko",
            "year": "2022",
            "region": "Peloponeso",
            "country": "Grecia",
            "price": "2500"
          }
        ]
      },
      {
        "title": "MEXICO",
        "items": [
          {
            "name": "La Trinidad, Afrodita, Chenin blanc, Chardonnay",
            "year": "2023",
            "region": "Valle de Guadalupe, Baja California",
            "country": "México",
            "price": "2500"
          }
        ]
      },
      {
        "title": "TINTO FRANCIA",
        "items": [
          {
            "name": "Auguste Clape, Syrah",
            "year": "2022",
            "region": "Cornas, Rodano",
            "country": "Francia",
            "price": "12000"
          },
          {
            "name": "Oliver Guyot en Champs, Pinot noir",
            "year": "2022",
            "region": "Gevrey Chambertin, Borgoña",
            "country": "Francia",
            "price": "7000"
          }
        ]
      },
      {
        "title": "ITALIA",
        "items": [
          {
            "name": "Michele Satta Piastraia Bolgheri Superiore, Cabernet Sauvignon, Sangiovese, Merlot, Syrah",
            "year": "2022",
            "region": "Toscana",
            "country": "Italia",
            "price": "4000"
          },
          {
            "name": "Corte Pavone, Rosso di Montalcino, Sangiovese",
            "year": "2021",
            "region": "Toscana",
            "country": "Italia",
            "price": "2000"
          },
          {
            "name": "Niedrist, Pinot nero",
            "year": "2019",
            "region": "Trentino-Alto Adige",
            "country": "Italia",
            "price": "4000"
          },
          {
            "name": "Allegrini Corte Giara Amarone de la Valpolicella DOCG, Corvina, Rondinella, Molinara",
            "year": "2022",
            "region": "Veneto",
            "country": "Italia",
            "price": "4500"
          }
        ]
      },
      {
        "title": "ESPAÑA",
        "items": [
          {
            "name": "Micaela Mikaela, Bobal",
            "year": "2022",
            "region": "Castilla",
            "country": "España",
            "price": "4000"
          },
          {
            "name": "Magna vides, Tinta del pais",
            "year": "2022",
            "region": "Ribera del Duero",
            "country": "España",
            "price": "5000"
          }
        ]
      },
      {
        "title": "GRECIA",
        "items": [
          {
            "name": "Moschopolis, Aiora, Mavrotragano",
            "year": "2022",
            "region": "Central Macedonia",
            "country": "Grecia",
            "price": "2500"
          }
        ]
      },
      {
        "title": "ARGENTINA",
        "items": [
          {
            "name": "Animal Organico, Malbec",
            "year": "2021",
            "region": "Mendoza",
            "country": "Argentina",
            "price": "2100"
          }
        ]
      },
      {
        "title": "MEXICO",
        "items": [
          {
            "name": "La Trinidad, Fauno, Nebbiolo, Cabernet Sauvignon",
            "year": "2020",
            "region": "Valle de Guadalupe, Baja California",
            "country": "Mexico",
            "price": "3500"
          }
        ]
      },
      {
        "title": "USA",
        "items": [
          {
            "name": "Birichino, Grenache, Syrah, Mourvèdre",
            "year": "2022",
            "region": "California",
            "country": "USA",
            "price": "2300"
          },
          {
            "name": "The Four Grapes, Pinot Noir",
            "year": "2022",
            "region": "Willamette Valley, Oregon",
            "country": "USA",
            "price": "2500"
          }
        ]
      },
      {
        "title": "SKIN CONTACT MEXICO",
        "items": [
          {
            "name": "Dominio de las Abejas, Marsanne, Chardonnay, Colombard, Sauvignon blanc",
            "year": "2022",
            "region": "Ojos negros, Baja California",
            "country": "Mexico",
            "price": "2000"
          },
          {
            "name": "Henri Lurton, Chardonnay",
            "year": "2022",
            "region": "Valle de Guadalupe, Baja California",
            "country": "Mexico",
            "price": "2000"
          }
        ]
      },
      {
        "title": "ESPUMOSO FRANCIA",
        "items": [
          {
            "name": "Maison Bonnard Montagnieu, Chardonnay, Pinot Noir",
            "region": "Bugey, Savoie",
            "country": "Francia",
            "price": "2500"
          },
          {
            "name": "Liset & Bertrand Jousset \"Burbulle\", Chenin Blanc",
            "region": "Pet Nat, Loire Valley",
            "country": "Francia",
            "price": "3800"
          },
          {
            "name": "Eric Bordelet, Poiret Authentique, Pera",
            "region": "Normandia",
            "country": "Francia",
            "price": "2000"
          }
        ]
      },
      {
        "title": "ITALIA",
        "items": [
          {
            "name": "Roncocalino, Franciacorta Brut, Pinot Noir",
            "region": "Lombardia",
            "country": "Italia",
            "price": "2500"
          },
          {
            "name": "Roncocalino, Franciacorta Brut, Pinot Noir",
            "region": "Lombardia (375ml)",
            "country": "Italia",
            "price": "1800"
          }
        ]
      },
      {
        "title": "POSTRE",
        "items": [
          {
            "name": "Maculan, Dindarello, Moscato",
            "year": "2021",
            "region": "Veneto",
            "country": "Italia",
            "price": "1800"
          }
        ]
      }
    ]
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-[#fef0e6] min-h-screen">
      {menuData.categories.map((category, index) => (
        <div key={index}>
          <MenuCategory title={category.title} />
          {category.subcategories ? (
            category.subcategories.map((subcategory, subIndex) => (
              <SubCategory
                key={`${index}-${subIndex}`}
                title={subcategory.title}
                items={subcategory.items}
              />
            ))
          ) : (
            <SubCategory items={category.items} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Wines;
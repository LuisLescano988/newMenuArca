import React from 'react';

const SectionTitle = ({ title }) => (
    <h2 className="text-xl tracking-[1.5em] font-light mb-12 uppercase">
        {title}
    </h2>
);

const CocktailItem = ({ name, description, price }) => (
    <div className="mb-8">
        <div className="flex justify-between items-baseline">
            <h3 className="text-lg font-extralight">{name}</h3>
            <span className="text-lg font-extralight">{price}</span>
        </div>
        <p className="text-gray-700 font-extralight mt-1 pr-20">
            {description}
        </p>
    </div>
);

const MenuSection = ({ title, items }) => (
    <div className="mb-16">
        <SectionTitle title={title} />
        <div className="space-y-6 ">
            {items.map((item, index) => (
                <CocktailItem key={index} {...item} />
            ))}
        </div>
    </div>
);

const CocktailsMenu = () => {

    const cocktailsData = [
        {
          title: "AMARÁS MEZCAL",
          items: [
            {
              name: "MIRANDA",
              description: "Amarás Logia Azul, Di Torino Vermut, Jerez Fino, Camote Morado y Especias, Naranja Agria",
              price: "350"
            },
            {
              name: "TIERRA ROJA",
              description: "Amarás Logia Cenizo inf. Yerba Mate, Yolixpa, Candy Beets, Naranja Agria",
              price: "400"
            },
            {
              name: "ARMANDO SANTOS",
              description: "Amarás Ensamble Espadín Tobalá, Lillen Blanc, Té de Guayaba y Canela, Limón Amarillo, Bitter de Cardamomo",
              price: "450"
            }
          ]
        },
        {
          title: "CASA DRAGONES",
          items: [
            {
              name: "CELERY DRAGON FLY",
              description: "Casa Dragones Blanco, Jugo de Piña, Sweet and Sour, Bitter de Apio",
              price: "400"
            },
            {
              name: "TROPICAL DRAGON CASK",
              description: "Casa Dragones Reposado, Sake Nami, Licor de Banana, Naranja Agria, Bitter de Mandarina",
              price: "450"
            },
            {
              name: "DRAGON HIGHBALL",
              description: "Casa Dragones Añejo, Luxardo Cereza, Narano Licor de Naranja Cordial de Limón, Limón Amarillo",
              price: "500"
            }
          ]
        },
        {
          title: "THE LOST EXPLORER",
          items: [
            {
              name: "THE LAST FAMOUS",
              description: "The Lost Explorer Espadín, Aperol, Cherry Heering, Naranja Agria",
              price: "400"
            },
            {
              name: "WHITE COFFEE",
              description: "The Lost Explorer Tobalá, Grand Marnier, Kahlúa, Naranja Agria",
              price: "450"
            },
            {
              name: "GREEN VESPER",
              description: "The Lost Explorer Salmiana, Zubrowka Vodka, Lillet Blanc, Bitters de Apio",
              price: "500"
            }
          ]
        },
        {
          title: "CLÁSICOS",
          items: [
            {
              name: "NEGRONI DI BARRIO",
              description: "Campari, Di Torino, Jugo de Limón, Cerveza Lager, Sal Celestún",
              price: "350"
            },
            {
              name: "ARCA COLADA",
              description: "Atávica Destilado de Tepache, Jarabe de Piña Ahumada, Jugo de Piña, Aquafaba, Limón",
              price: "350"
            },
            {
              name: "MELIPONA",
              description: "Woodford Reserve, Xtabentún, Naranja Agria, Jengibre, Miel Ahumada",
              price: "350"
            },
            {
              name: "PISCO SOUR",
              description: "Pisco Penca & Piedra Infusionado con Epazote, Jarabe de Vino, Limón Amarillo, Aquafaba, Bitter de Vino Tinto",
              price: "350"
            },
            {
              name: "JUNGLE BIRD",
              description: "Ron Aconte inf. con Piña, Campari, Jarabe de Piña Ahumada, Jugo de Piña, Jugo de Limón",
              price: "350"
            },
            {
              name: "THE LOST MARTINI",
              description: "Mezcal The Lost Explorer, Sake Nami, St. Germain, Destilado de Tuna Penca & Piedra, Bitter de Lima Maya, Salicornia",
              price: "400"
            },
            {
              name: "NAKED IN TULUM",
              description: "Mezcal Montelobos Espadín, Ancho Reyes Verde, Aperol, Limón",
              price: "350"
            }
          ]
        },
        {
          title: "DE LA CASA",
          items: [
            {
              name: "ROSALINA",
              description: "Ketel One Vodka, Vermut Infusionado con Lemongrass, Licor 43, Bitters Peychaud's",
              price: "350"
            },
            {
              name: "BOTANICAL WINE",
              description: "Gin Condesa Clásica, Cocchi Americano Infusionado con Cilantro Criollo, Cordial de Limón, Bitter de Lima Maya, Cava",
              price: "350"
            },
            {
              name: "GREEN GARDEN",
              description: "Gin Condesa Clásica, St. Germain, Pulque Curado, Bitter de Hoja Santa, Aceite de Hoja de Aguacate",
              price: "350"
            },
            {
              name: "HAR MAR SUPERSTAR",
              description: "Mezcal Montelobos Espadín, Jengibre, Miel, Limón Amarillo",
              price: "350"
            },
            {
              name: "MAYAMI NICE",
              description: "Ron Flor de Caña 12 años Infusionado con Piña, Xtabentún, Maracuyá, Orgeat de Almendras, Limón Amarillo",
              price: "350"
            },
            {
              name: "EL SOLAR",
              description: "Mezcal Unión Joven, Jamaica, Chipotle, Piloncillo, Limón Verde, Sal de Chapulín",
              price: "350"
            },
            {
              name: "RUM PUNCH",
              description: "Ron Flor de Caña 12 Años, Jerez Tio Pepe, Jarabe de Tejocote, Bitter de Mole y Mandarina",
              price: "350"
            }
          ]
        }
       ];

    return (
        <div className="max-w-6xl mx-auto p-8 bg-[#fef0e6] min-h-screen">
            {cocktailsData.map((section, index) => (
                <MenuSection key={index} {...section} />
            ))}
        </div>
    );
};

export default CocktailsMenu;
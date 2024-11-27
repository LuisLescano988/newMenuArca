import React from 'react';

const SectionTitle = ({ title }) => (
    <h2 className="text-2xl tracking-[1em] font-light mb-12 uppercase">
        {title}
    </h2>
);

const CocktailItem = ({ name, description, price }) => (
    <div className="mb-8">
        <div className="flex justify-between items-baseline">
            <h3 className="text-2xl font-extralight">{name}</h3>
            <span className="text-2xl font-extralight">{price}</span>
        </div>
        <p className="text-gray-700 text-2xl font-extralight mt-1 pr-20">
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
                    description: "Amarás Logia Azul, Di Torino Vermut, Fino Sherry, Purple Sweet Potato, Sour Orange",
                    price: "350"
                },
                {
                    name: "TIERRA ROJA",
                    description: "Amarás Logia Cenizo inf Yerba Mate, Yolixpa, Candy Beets, Sour Orange",
                    price: "400"
                },
                {
                    name: "ARMANDO SANTOS",
                    description: "Amarás Ensamble Espadín Tobala, Lillet Blanc, Guava and Cinnamon Infusion, Lemon, Cardamom Bitters",
                    price: "450"
                }
            ]
        },
        {
            title: "CASA DRAGONES",
            items: [
                {
                    name: "CELERY DRAGON FLY",
                    description: "Casa Dragones Blanco, Pineapple Juice, Sweet and Sour, Celery Bitters",
                    price: "400"
                },
                {
                    name: "TROPICAL DRAGON CASK",
                    description: "Casa Dragones Reposado, Sake Nami, Banana Liqueur, Sour Orange, Mandarin Bitters",
                    price: "450"
                },
                {
                    name: "DRAGON HIGHBALL",
                    description: "Casa Dragones Añejo, Luxardo Sangue Morlacco, Naranjo Orange Liqueur, Lime Cordial, Lemon",
                    price: "500"
                }
            ]
        },
        {
            title: "THE LOST EXPLORER",
            items: [
                {
                    name: "THE LAST FAMOUS",
                    description: "The Lost Explorer Espadín, Aperol, Cherry Heering, Sour Orange",
                    price: "400"
                },
                {
                    name: "WHITE COFFEE",
                    description: "The Lost Explorer Tobala, Grand Marnier, Kahlua, Sour Orange",
                    price: "450"
                },
                {
                    name: "GREEN VESPER",
                    description: "The Lost Explorer Salmiana, Zubrowka Vodka, Lillet Blanc, Celery Bitters",
                    price: "500"
                }
            ]
        },
        {
            title: "C L A S S I C S",
            items: [
                {
                    name: "NEGRONI DI BARRIO",
                    description: "Campari, Di Torino, Lime Juice, Lager Beer, Celestún Salt",
                    price: "350"
                },
                {
                    name: "ARCA COLADA",
                    description: "Atávica Destilado de Tepache, Smoked Pineapple Syrup, Pineapple Juice, Aquafaba, Lime",
                    price: "350"
                },
                {
                    name: "MELIPONA",
                    description: "Woodford Reserve, Xtabentun D'Aristi, Sour Orange, Ginger, Smoked Honey",
                    price: "350"
                },
                {
                    name: "PISCO SOUR",
                    description: "Epazote Infused Pisco Penca & Piedra, Wine Syrup, Wine Bitter, Aquafaba, Lemon",
                    price: "350"
                },
                {
                    name: "JUNGLE BIRD",
                    description: "Aconte Rum in Pineapple, Campari, Smokey Pineapple Syrup, Pineapple Juice, Lime Juice",
                    price: "350"
                },
                {
                    name: "THE LOST MARTINI",
                    description: "The Lost Martini Espadín, Sake Nami, Prickey Pear Spirit Penca & Piedra, St Germain, Mayan Lime Bitters",
                    price: "400"
                },
                {
                    name: "NAKED IN TULUM",
                    description: "Mezcal Montelobos Espadín, Green Ancho Reyes, Aperol, Lime",
                    price: "350"
                }
            ]
        },
        {
            title: "HOUSE  COCKTAILS",
            items: [
                {
                    name: "ROSALINA",
                    description: "Ketel One Vodka, Lemongrass Vermut, Liqueur 43, Peychaud's Bitters",
                    price: "350"
                },
                {
                    name: "BOTANICAL WINE",
                    description: "Condesa Gin, Heirloom Coriander Infused Cocchi Americano, Lime Cordial, Mayan Lime Bitters, Cava",
                    price: "350"
                },
                {
                    name: "GREEN GARDEN",
                    description: "Condesa Gin, St. Germain, Lemongrass Infused Pulque, Hoja Santa Bitter, Lime, Avocado Leaf Oil",
                    price: "350"
                },
                {
                    name: "HAR MAR SUPERSTAR",
                    description: "Mezcal Montelobos Espadín, Ginger, Honey, Lemon",
                    price: "350"
                },
                {
                    name: "MAYAMI NICE",
                    description: "Pineapple Infused Flor de Caña 12 years Rum, Xtabentun, Passion Fruit, Housemade Orgeat, Lemon",
                    price: "350"
                },
                {
                    name: "EL SOLAR",
                    description: "Mezcal Unión Joven, Hibiscus, Chipotle, Piloncillo, Lime Juice, Chapulin Salt Rim",
                    price: "350"
                },
                {
                    name: "RUM PUNCH",
                    description: "Flor de Caña 12 Years Rum, Fino Sherry, Punch Syrup, Mandarin and Mole Bitters",
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
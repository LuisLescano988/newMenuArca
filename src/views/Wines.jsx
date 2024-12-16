import React from 'react'
import img1 from '../assets/menus/wines/wines1.jpg'
import img2 from '../assets/menus/wines/wines2.jpg'
import img3 from '../assets/menus/wines/wines3.jpg'
import img4 from '../assets/menus/wines/wines4.jpg'
import img5 from '../assets/menus/wines/wines5.jpg'
import img6 from '../assets/menus/wines/wines6.jpg'
// import img7 from '../assets/menus/wines/wines7.jpg'
// import img8 from '../assets/menus/wines/wines8.jpg'
import { TiArrowBackOutline } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'

const WinesItem = ({ name, price, description }) => (
  <div className="mb-12">
    <div className="flex justify-between items-baseline">
      <h2 className="text-2xl max-sm:text-sm tracking-tight font-extralight uppercase">
        {name}
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

const Wines = () => {
  const copeoBlanco = [
    {
      "name": "Canto de Sirenas, Sauvignon Blanc",
      "description": "2020 Dolores Hidalgo, Guanajuato, México",
      "price": "380"
    },
    {
      "name": "Vetus Albariño, Albariño",
      "description": "2021 Rías, Baixas, Spain",
      "price": "380"
    },
    {
      "name": "Domaine de la Combe, Muscadet",
      "description": "2020 Loire Valley, France",
      "price": "450"
    }
  ]

  const tinto = [
    {
      "name": "Canto de Sirenas, Cabernet Sauvignon",
      "description": "2020 Dolores Hidalgo, Guanajuato, México",
      "price": "460"
    },
    {
      "name": "Animal Orgánico, Malbec ",
      "description": "2021 Mendoza, Argentina",
      "price": "460"
    },
    {
      "name": "Chateau Targe, Cabernet Franc",
      "description": "2018 Saumur Champigny, Loire Valley, France",
      "price": "460"
    }
  ]
  const rosado = [
    {
      "name": "Château Les Mesclances, Grenache, Cinsault, Mourvèdre, Syrah",
      "description": "2023 Provence, France",
      "price": "380"
    }
  ]
  const espumoso = [
    {
      "name": "Roncocalino, Francecorta Brut,\nPinot Noir",
      "description": "Lombardy, Italy",
      "price": "400"
    }
  ]
  const postre = [
    {
      "name": "Maculan, Dindarello, Moscato",
      "description": "2021 Veneto, Italy",
      "price": "400"
    }
  ]
  const blancoFR = [
    {
      "name": "Domaine de la Combe, Muscadet",
      "description": "2020 Loire Valley, France",
      "price": "2000"
    },
    {
      "name": "Lise & Bertrand Jousset Premier Rendez-vous, Chenin Blanc",
      "description": "2020 Loire Valley, France ",
      "price": "4000"
    },
    {
      "name": "Domaine des Berthiers, Sauvignon Blanc",
      "description": "2022 Pouilly Fumé, Loire Valley, France",
      "price": "3000"
    },
    {
      "name": "Domaine de Virvane, Chablis, Chardonnay",
      "description": "2020 Chablis, Burgundy, France",
      "price": "3000"
    },
    {
      "name": "Châteauneuf du pape, Clos de la Roquette, Roussane, Clairete Grenache Blanc",
      "description": "2020 Rhône Valley, France",
      "price": "5000"
    }
  ]

  const italy = [
    {
      "name": "Donnachiara, Fiano di Avellino DOCG",
      "description": "2021 Campania, Italy",
      "price": "2500"
    },
    {
      "name": "Andrea Felici, Verdicchio Classico Superiore",
      "description": "2022 Marche, Italy",
      "price": "2000"
    },
    {
      "name": "Ottin, Petite Arvine",
      "description": "2019 Aosta, Italy",
      "price": "3000"
    },
    {
      "name": "Palmento Costanzo, Edna Blanco, Caricante Catarratto",
      "description": "2021 Sicily, Italy",
      "price": "3000"
    },
    {
      "name": "Cervaro della Sala, Chardonnay",
      "description": "2021 Umbria, Italy",
      "price": "6000"
    }
  ]

  const alemania = [
    {
      "name": "Wittmann Brunnenhäuschen VDP Grosse Lage Spätlese, Riesling",
      "description": "2021 Rheinhessen, Germany",
      "price": "3500"
    }
  ]

  const austria = [
    {
      "name": "F.X. Pichier Ried Klostersatz, Grüner Veltliner Federspiel",
      "description": "2021 Wachau, Austria",
      "price": "3000"
    }
  ]

  const Spain = [
    {
      "name": "Vetus de Alba, Albariño",
      "description": "2021 Rías Baixas, Spain",
      "price": "1700"
    },
    {
      "name": "Bodega Caudalia Umea, Garnacha Blanca",
      "description": "2023 Navarra, Spain",
      "price": "1800"
    }
  ]

  const greece = [
    {
      "name": "Rouvalis, Assyrtiko",
      "description": "2022 Peloponnese, Greece",
      "price": "2500"
    }
  ]

  const mexico = [
    {
      "name": "Balero, Chardonnay, Chenin Blanc blend",
      "description": "2023 Guadalupe Valley, Baja California, México",
      "price": "1600"
    },
    {
      "name": "La Trinidad, Afrodita, Chenin Blanc, Chardonnay",
      "description": "2023 Guadalupe Valley, Baja California, México",
      "price": "2500"
    },
    {
      "name": "Canto de Sirenas, Sauvignon Blanc",
      "description": "2022 Dolores Hidalgo, Guanajuato, México",
      "price": "1800"
    },
    {
      "name": "Bruma, Plan B, Sauvignon Blanc",
      "description": "2024 Guadalupe Valley, Baja California, México",
      "price": "1800"
    },
    {
      "name": "Marella Reserva, Bodegas Icaro, Chardonnay",
      "description": "2024 Guadalupe Valley, Baja California, México",
      "price": "2800"
    },
    {
      "name": "Pozo de Luna, Viognier",
      "description": "2023 Soledad de Graciano Sánchez, San Luis Potosí, México",
      "price": "1800"
    }
  ]

  const tintoFR = [
    {
      "name": "Chateau Targe, Cabernet Franc",
      "description": "2022 Saumur Champigny, Loire Valley, France",
      "price": "2100"
    },
    {
      "name": "Oliver Guyot en Champs, Pinot Noir",
      "description": "2022 Gevrey Chambertin, Burgundy, France",
      "price": "7000"
    },
    {
      "name": "Auguste Clape, Syrah",
      "description": "2022 Cornas, Rhône Valley, France",
      "price": "12000"
    },
    {
      "name": "Chateau de Lavernette, Gamay",
      "description": "2020 Beaujolais Village AOC, Burgundy, France",
      "price": "2500"
    },
    {
      "name": "Clos Troteligotte K´Pot, Malbec",
      "description": "2020 Cahors, France",
      "price": "2500"
    }
  ]

  const tintoIT = [
    {
      "name": "Michele Satta Piastraia Bolgheri Superiore, Cabernet Sauvignon, Sangiovese, Merlot, Syrah",
      "description": "2022 Tuscany, Italy",
      "price": "4000"
    },
    {
      "name": "Corte Pavone, Rosso di Montalcino, Sangiovese",
      "description": "2021 Tuscany, Italy",
      "price": "2000"
    },
    {
      "name": "Niedrist, Pinot Nero",
      "description": "2019 Trentino-Alto Adige, Italy",
      "price": "4000"
    },
    {
      "name": "Allegrini Corte Giara Amarone de la Valpolicella DOCG, Corvina, Rondinella, Molinara",
      "description": "2022 Veneto, Italy",
      "price": "4500"
    }
  ]

  const tintoES = [
    {
      "name": "Eulogio Pomares O Extranxeiro, Mencía",
      "description": "2021 Ribera Sacra, Spain",
      "price": "2500"
    },
    {
      "name": "Micaela Mikaela, Bobal",
      "description": "2022 Castilla, Spain",
      "price": "4000"
    },
    {
      "name": "Viñas de Ayer 245, Garnacha",
      "description": "2022 Sierra de Gredos, Spain",
      "price": "2500"
    },
    {
      "name": "Magna vides, Tinta del País",
      "description": "2022 Ribera del Duero, Spain",
      "price": "5000"
    }
  ]

  const tintoGR = [
    {
      "name": "Moschopolis, Aiora, Mavrotragano",
      "description": "2022 Central Macedonia, Greece",
      "price": "2500"
    }
  ]

  const tintoAR = [
    {
      "name": "Animal Organico, Malbec",
      "description": "2021 Mendoza, Argentina",
      "price": "2100"
    }
  ]

  const tintoMX = [
    {
      "name": "Pozo de Luna, Pinot noir",
      "description": "2022 Soledad de Graciano Sánchez, San Luis Potosí, México",
      "price": "2000"
    },
    {
      "name": "Cava Quintanilla, Reserva, Syrah",
      "description": "2022 San Luis potosí, México",
      "price": "2022"
    },
    {
      "name": "Fluxus, Grenache, Syrah",
      "description": "2022 Guadalupe Valley, Baja California, México",
      "price": "2500"
    },
    {
      "name": "La Trinidad, Fauno, Nebbiolo, Cabernet Sauvignon",
      "description": "2020 Guadalupe Valley, Baja California, México",
      "price": "3500"
    },
    {
      "name": "Bodegas Pinesque, Gastón & Maria, Syrah, Cabernet Sauvignon",
      "description": "2022 Delicias Valley, Chihuahua, México",
      "price": "2000"
    },
    {
      "name": "Canto de Sirenas, Cabernet Sauvignon",
      "description": "2023 Dolore Hidalgo, Guanajuato, México",
      "price": "2000"
    }
  ]

  const tintoUS = [
    {
      "name": "Birichino, Grenache, Syrah, Mourvèdre",
      "description": "2022 California, USA",
      "price": "2300"
    },
    {
      "name": "The Four Grapes, Pinot Noir",
      "description": "2022 Willamette Valley, Oregon",
      "price": "2500"
    }
  ]

  const rosaES = [
    {
      "name": "Can Sumoi La Rosa, Sumoll, Xarel-lo",
      "description": "2021 Penedés, Spain",
      "price": "2500"
    }
  ]

  const rosaFR = [
    {
      "name": "Château Les Mesclances, Grenache, Cinsault, Mourvèdre, Syrah",
      "description": "2023 Provence, France",
      "price": "1800"
    },
    {
      "name": "Domaine Chermette, Gamay",
      "description": "2022 Burgundy, France",
      "price": "1800"
    }
  ]

  const rosaMX = [
    {
      "name": "Fluxus, Grenache",
      "description": "2022 Guadalupe Valley, México",
      "price": "1700"
    }
  ]

  const skinFR = [
    {
      "name": "Anser, Sylvaner",
      "description": "2022 Alsacia, France",
      "price": "2200"
    }
  ]

  const skinMX = [
    {
      "name": "Dominio de las Abejas, Marsanne, Chardonnay, Colombard, Sauvignon blanc",
      "description": "2022 Ojos negros, Baja California, México",
      "price": "2000"
    }
  ]

  const espumosoFR = [
    {
      "name": "Virgine Taittinger, Brut, Chardonnay, Pinot Noir, Pinor Meunier",
      "description": "Reims, Champagne, France",
      "price": "5500"
    },
    {
      "name": "Andre Jacquart Mesnil Experience, Grand Cru, Blanc de Blancs, Chardonnay",
      "description": "Champagne",
      "price": "4500"
    },
    {
      "name": "Liset & Bertrand Jousset “Burbulle”, Chenin Blanc",
      "description": "Pet Nat, Loire Valley, France",
      "price": "3800"
    },
    {
      "name": "Eric Bordelet, Poiret Authentique, Pera",
      "description": "Normandy, France",
      "price": "2000"
    }
  ]

  const espumosoIT = [
    {
      "name": "Roncocalino, Franciacorta Brut, Pinot Noir",
      "description": "Lombardy, Italy",
      "price": "2500"
    },
    {
      "name": "Roncocalino, Franciacorta Brut, Pinot Noir",
      "description": "Lombardy, Italy (375ml)",
      "price": "1800"
    },
    {
      "name": "Zanotto, Pinot Noir, Glera",
      "description": "Pet Nat, Veneto, Italy",
      "price": "2000"
    }
  ]

  const postre2 = [
    {
      "name": "Maculan, Dindarello, Moscato",
      "description": "2021 Veneto, Italy",
      "price": "1800"
    }
  ]

  return (
    <div>
      <NavLink className=' to-slate-50 fixed top-5 left-5 rounded-md bg-slate-900'
        to={'/drinks'}>
        <TiArrowBackOutline className=' text-slate-50' />
      </NavLink>
      {/* <img className=' md:h-full md:m-auto' src={img1} alt="" /> */}
      {/* <img className=' md:h-full md:m-auto' src={img2} alt="" />
            <img className=' md:h-full md:m-auto' src={img3} alt="" />
            <img className=' md:h-full md:m-auto' src={img4} alt="" />
            <img className=' md:h-full md:m-auto' src={img5} alt="" />
            <img className=' md:h-full md:m-auto' src={img6} alt="" /> */}
      {/* <img className=' md:h-full md:m-auto' src={img7} alt="" />
            <img className=' md:h-full md:m-auto' src={img8} alt="" /> */}

      <div className="max-w-6xl mx-auto p-8 bg-[#fef0e6] min-h-screen">
        <h1 className="text-4xl md:text-5xl text-slate-800 uppercase mb-12">
          by the glass
          <br />
          w h i t e
        </h1>
        <div className="">
          {copeoBlanco.map((item, index) => (
            <WinesItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl text-slate-800 uppercase mb-12">
          red
        </h1>
        <div className="">
          {tinto.map((item, index) => (
            <WinesItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl text-slate-800 uppercase mb-12">
          rose
        </h1>
        <div className="">
          {rosado.map((item, index) => (
            <WinesItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl text-slate-800 uppercase mb-12">
          sparkling
        </h1>
        <div className="">
          {espumoso.map((item, index) => (
            <WinesItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl text-slate-800 uppercase mb-12">
          dessert
        </h1>
        <div className="">
          {postre.map((item, index) => (
            <WinesItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl text-slate-800 uppercase mb-12">
          white
          <br />
          f r a n c e
        </h1>
        <div className="">
          {blancoFR.map((item, index) => (
            <WinesItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl text-slate-800 uppercase mb-12">
          i t a l y
        </h1>
        <div className="">
          {italy.map((item, index) => (
            <WinesItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl text-slate-800 uppercase mb-12">
          g e r m a n y
        </h1>
        <div className="">
          {alemania.map((item, index) => (
            <WinesItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl text-slate-800 uppercase mb-12">
          a u s t r i a
        </h1>
        <div className="">
          {austria.map((item, index) => (
            <WinesItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl text-slate-800 uppercase mb-12">
          s p a i n
        </h1>
        <div className="">
          {Spain.map((item, index) => (
            <WinesItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl text-slate-800 uppercase mb-12">
          g r e e c e
        </h1>
        <div className="">
          {greece.map((item, index) => (
            <WinesItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl text-slate-800 uppercase mb-12">
          m e x i c o
        </h1>
        <div className="">
          {mexico.map((item, index) => (
            <WinesItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl text-slate-800 uppercase mb-12">
          red
          <br />
          f r a n c e
        </h1>
        <div className="">
          {tintoFR.map((item, index) => (
            <WinesItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl text-slate-800 uppercase mb-12">
          i t a l y
        </h1>
        <div className="">
          {tintoIT.map((item, index) => (
            <WinesItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl text-slate-800 uppercase mb-12">
          s p a i n
        </h1>
        <div className="">
          {tintoES.map((item, index) => (
            <WinesItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl text-slate-800 uppercase mb-12">
          g r e e c e
        </h1>
        <div className="">
          {tintoGR.map((item, index) => (
            <WinesItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl text-slate-800 uppercase mb-12">
          a r g e n t i n a
        </h1>
        <div className="">
          {tintoAR.map((item, index) => (
            <WinesItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl text-slate-800 uppercase mb-12">
          m e x i c o
        </h1>
        <div className="">
          {tintoMX.map((item, index) => (
            <WinesItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl text-slate-800 uppercase mb-12">
          u s a
        </h1>
        <div className="">
          {tintoUS.map((item, index) => (
            <WinesItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl text-slate-800 uppercase mb-12">
          rose
          <br />
          s p a i n
        </h1>
        <div className="">
          {rosaES.map((item, index) => (
            <WinesItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl text-slate-800 uppercase mb-12">
          f r a n c e
        </h1>
        <div className="">
          {rosaFR.map((item, index) => (
            <WinesItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl text-slate-800 uppercase mb-12">
          m e x i c o
        </h1>
        <div className="">
          {rosaMX.map((item, index) => (
            <WinesItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl text-slate-800 uppercase mb-12">
          skin
          <br />
          contact
          <br />
          f r a n c e
        </h1>
        <div className="">
          {skinFR.map((item, index) => (
            <WinesItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl text-slate-800 uppercase mb-12">
          m e x i c o
        </h1>
        <div className="">
          {skinMX.map((item, index) => (
            <WinesItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl text-slate-800 uppercase mb-12">
          sparkling
          <br />
          f r a n c e
        </h1>
        <div className="">
          {espumosoFR.map((item, index) => (
            <WinesItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl text-slate-800 uppercase mb-12">
          i t a l y
        </h1>
        <div className="">
          {espumosoIT.map((item, index) => (
            <WinesItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl text-slate-800 uppercase mb-12">
          dessert
        </h1>
        <div className="">
          {postre2.map((item, index) => (
            <WinesItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Wines
import React from 'react'
import img1 from '../assets/menus/vinos/vinos1.jpg'
import img2 from '../assets/menus/vinos/vinos2.jpg'
import img3 from '../assets/menus/vinos/vinos3.jpg'
import img4 from '../assets/menus/vinos/vinos4.jpg'
import img5 from '../assets/menus/vinos/vinos5.jpg'
import img6 from '../assets/menus/vinos/vinos6.jpg'
// import img7 from '../assets/menus/vinos/vinos7.jpg'
// import img8 from '../assets/menus/vinos/vinos8.jpg'
import { TiArrowBackOutline } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'

const VinosItem = ({ name, price, description }) => (
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


const Vinos = () => {
  const copeoBlanco = [
    {
      "name": "Canto de Sirenas, Sauvignon Blanc",
      "description": "2020 Dolores Hidalgo, Guanajuato, México",
      "price": "380"
    },
    {
      "name": "Vetus de Alba, Albariño",
      "description": "2021 Rías Baixas, España",
      "price": "380"
    },
    {
      "name": "Domaine de la Combe, Muscadet",
      "description": "2020 Valle de Loire, Francia",
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
      "description": "2018 Saumur Champigny, Valle de Loire, Francia",
      "price": "460"
    }
  ]
  const rosado = [
    {
      "name": "Château Les Mesclances, Grenache, Cinsault, Mourvèdre, Syrah",
      "description": "2023 Provence, Francia",
      "price": "380"
    }
  ]
  const espumoso = [
    {
      "name": "Roncocalino, Franciacorta Brut,\nPinot Noir",
      "description": "Lombardia, Italia",
      "price": "400"
    }
  ]
  const postre = [
    {
      "name": "Maculan, Dindarello, Moscato",
      "description": "2021 Veneto, Italia",
      "price": "400"
    }
  ]
  const blancoFR = [
    {
      "name": "Domaine de la Combe, Muscadet",
      "description": "2020 Valle de Loira, Francia",
      "price": "2000"
    },
    {
      "name": "Lise & Bertrand Jousset Premier Rendez-vous, Chenin Blanc",
      "description": "2020 Valle de Loira, Francia ",
      "price": "4000"
    },
    {
      "name": "Domaine des Berthiers, Sauvignon Blanc",
      "description": "2022 Pouilly Fumé, Valle de Loire, Francia",
      "price": "3000"
    },
    {
      "name": "Domaine de Virvane, Chablis, Chardonnay",
      "description": "2020 Chablis, Borgoña, Francia",
      "price": "3000"
    },
    {
      "name": "Châteauneuf du pape, Clos de la Roquette, Roussane, Clairete Grenache Blanc",
      "description": "2020 Ródano, Francia",
      "price": "5000"
    }
  ]

  const italia = [
    {
      "name": "Donnachiara, Fiano di Avellino DOCG",
      "description": "2021 Campania, Italia",
      "price": "2500"
    },
    {
      "name": "Andrea Felici, Verdicchio Classico Superiore",
      "description": "2022 Marche, Italia",
      "price": "2000"
    },
    {
      "name": "Ottin, Petite Arvine ",
      "description": "2019 Aosta, Italia",
      "price": "3000"
    },
    {
      "name": "Palmento Costanzo, Edna Blanco, Caricante Catarratto",
      "description": "2021 Sicilia, Italia",
      "price": "3000"
    },
    {
      "name": "Cervaro della Sala, Chardonnay",
      "description": "2021 Umbria, Italia",
      "price": "6000"
    }
  ]

  const alemania = [
    {
      "name": "Wittmann Brunnenhäuschen VDP Grosse Lage Spätlese, Riesling",
      "description": "2021 Rheinhessen, Alemania",
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

  const España = [
    {
      "name": "Vetus de Alba, Albariño",
      "description": "2021 Rías Baixas, España",
      "price": "1700"
    },
    {
      "name": "Bodega Caudalia Umea, Garnacha Blanca",
      "description": "2023 Navarra, España",
      "price": "1800"
    }
  ]

  const grecia = [
    {
      "name": "Rouvalis, Assyrtiko",
      "description": "2022 Peloponeso, Grecia",
      "price": "2500"
    }
  ]

  const mexico = [
    {
      "name": "Balero, Chardonnay, Chenin Blanc blend",
      "description": "2023 Valle de Guadalupe, Baja California, México",
      "price": "1600"
    },
    {
      "name": "La Trinidad, Afrodita, Chenin Blanc, Chardonnay",
      "description": "2023 Valle de Guadalupe, Baja California, México",
      "price": "2500"
    },
    {
      "name": "Canto de Sirenas, Sauvignon Blanc",
      "description": "2022 Dolores Hidalgo, Guanajuato, México",
      "price": "1800"
    },
    {
      "name": "Bruma, Plan B, Sauvignon Blanc",
      "description": "2024 Valle de Guadalupe, Baja California, México",
      "price": "1800"
    },
    {
      "name": "Marella Reserva, Bodegas Icaro, Chardonnay",
      "description": "2024 Valle de Guadalupe, Baja California, México",
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
      "name": "Château Targe, Cabernet Franc",
      "description": "2022 Saumur Champigny, Valle de Loire, Francia",
      "price": "2100"
    },
    {
      "name": "Oliver Guyot en Champs, Pinot Noir",
      "description": "2022 Gevrey Chambertin, Borgoña, Francia",
      "price": "7000"
    },
    {
      "name": "Auguste Clape, Syrah",
      "description": "2022 Cornas, Ródano, Francia",
      "price": "12000"
    },
    {
      "name": "Château de Lavernette, Gamay",
      "description": "2020 Beaujolais Village AOC, Borgoña, Francia",
      "price": "2500"
    },
    {
      "name": "Clos Troteligotte K´Pot, Malbec",
      "description": "2020 Cahors, Francia",
      "price": "2500"
    }
  ]

  const tintoIT= [
    {
      "name": "Michele Satta Piastraia Bolgheri Superiore, Cabernet Sauvignon, Sangiovese, Merlot, Syrah",
      "description": "2022 Toscana, Italia",
      "price": "4000"
    },
    {
      "name": "Corte Pavone, Rosso di Montalcino, Sangiovese",
      "description": "2021 Toscana, Italia",
      "price": "2000"
    },
    {
      "name": "Niedrist, Pinot Nero",
      "description": "2019 Trentino-Alto Adige, Italia",
      "price": "4000"
    },
    {
      "name": "Allegrini Corte Giara Amarone de la Valpolicella DOCG, Corvina, Rondinella, Molinara",
      "description": "2022 Veneto, Italia",
      "price": "4500"
    }
  ]

  const tintoES = [
    {
      "name": "Eulogio Pomares O Extranxeiro, Mencía",
      "description": "2021 Ribera Sacra, España",
      "price": "2500"
    },
    {
      "name": "Micaela Mikaela, Bobal",
      "description": "2022 Castilla, España",
      "price": "4000"
    },
    {
      "name": "Viñas de Ayer 245, Garnacha",
      "description": "2022 Sierra de Gredos, España",
      "price": "2500"
    },
    {
      "name": "Magna vides, Tinta del País",
      "description": "2022 Ribera del Duero, España",
      "price": "5000"
    }
  ]

  const tintoGR = [
    {
      "name": "Moschopolis, Aiora, Mavrotragano",
      "description": "2022 Central Macedonia, Grecia",
      "price": "2500"
    }
  ]

  const tintoAR = [
    {
      "name": "Animal Orgánico, Malbec",
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
      "description": "2022 Valle de Guadalupe, Baja California, México",
      "price": "2500"
    },
    {
      "name": "La Trinidad, Fauno, Nebbiolo, Cabernet Sauvignon",
      "description": "2020 Valle de Guadalupe, Baja California, México",
      "price": "3500"
    },
    {
      "name": "Bodegas Pinesque, Gastón & Maria, Syrah, Cabernet Sauvignon",
      "description": "2022 Valle de Delicias, Chihuahua, México",
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
      "description": "2021 Penedés, España",
      "price": "2500"
    }
  ]

  const rosaFR = [
    {
      "name": "Château Les Mesclances, Grenache, Cinsault, Mourvèdre, Syrah",
      "description": "2023 Provence, Francia",
      "price": "1800"
    },
    {
      "name": "Domaine Chermette, Gamay",
      "description": "2022 Borgoña, Francia",
      "price": "1800"
    }
  ]

  const rosaMX = [
    {
      "name": "Fluxus, Grenache",
      "description": "2022 Valle de Guadalupe, México",
      "price": "1700"
    }
  ]

  const skinFR = [
    {
      "name": "Anser, Sylvaner",
      "description": "2022 Alsacia, Francia",
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
      "description": "Reims, Champaña, Francia",
      "price": "5500"
    },
    {
      "name": "Andre Jacquart Mesnil Experience, Grand Cru, Blanc de Blancs, Chardonnay",
      "description": "Champaña",
      "price": "4500"
    },
    {
      "name": "Lise & Bertrand Jousset “Burbulle”, Chenin Blanc",
      "description": "Pet Nat, Valle de Loire, Francia",
      "price": "3800"
    },
    {
      "name": "Eric Bordelet, Poiret Authentique, Pera",
      "description": "Normandia, Francia",
      "price": "2000"
    }
  ]

  const espumosoIT = [
    {
      "name": "Roncocalino, Franciacorta Brut, Pinot Noir",
      "description": "Lombardia, Italia",
      "price": "2500"
    },
    {
      "name": "Roncocalino, Franciacorta Brut, Pinot Noir",
      "description": "Lombardia, Italia (375ml)",
      "price": "1800"
    },
    {
      "name": "Zanotto, Pinot Noir, Glera",
      "description": "Pet Nat, Veneto, Italia",
      "price": "2000"
    }
  ]

  const postre2 = [
    {
      "name": "Maculan, Dindarello, Moscato",
      "description": "2021 Veneto, Italia",
      "price": "1800"
    }
  ]
  return (
    <div>
      <NavLink className=' to-slate-50 fixed top-5 left-5 rounded-md bg-slate-900'
        to={'/bebidas'}
      >
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
      <h1 className="text-2xl md:text-3xl text-slate-800 uppercase mb-12">
          C o p e o 
          <br />
           B l a n c o
        </h1>
        <div className="">
          {copeoBlanco.map((item, index) => (
            <VinosItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl text-slate-800 uppercase mb-12">
          T i n t o
        </h1>
        <div className="">
          {tinto.map((item, index) => (
            <VinosItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl text-slate-800 uppercase mb-12">
          r o s a d o
        </h1>
        <div className="">
          {rosado.map((item, index) => (
            <VinosItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl text-slate-800 uppercase mb-12">
          e s p u m o s o
        </h1>
        <div className="">
          {espumoso.map((item, index) => (
            <VinosItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl text-slate-800 uppercase mb-12">
          p o s t r e 
        </h1>
        <div className="">
          {postre.map((item, index) => (
            <VinosItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl text-slate-800 uppercase mb-12">
          b l a n c o 
          <br />
           f r a n c i a 
        </h1>
        <div className="">
          {blancoFR.map((item, index) => (
            <VinosItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl text-slate-800 uppercase mb-12">
          i t a l i a
        </h1>
        <div className="">
          {italia.map((item, index) => (
            <VinosItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl text-slate-800 uppercase mb-12">
          a l e m a n i a
        </h1>
        <div className="">
          {alemania.map((item, index) => (
            <VinosItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl text-slate-800 uppercase mb-12">
          a u s t r i a
        </h1>
        <div className="">
          {austria.map((item, index) => (
            <VinosItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl text-slate-800 uppercase mb-12">
          e s p a ñ a
        </h1>
        <div className="">
          {España.map((item, index) => (
            <VinosItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl text-slate-800 uppercase mb-12">
          g r e c i a
        </h1>
        <div className="">
          {grecia.map((item, index) => (
            <VinosItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl text-slate-800 uppercase mb-12">
          m é x i c o
        </h1>
        <div className="">
          {mexico.map((item, index) => (
            <VinosItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl text-slate-800 uppercase mb-12">
          t i n t o 
          <br />
           f r a n c i a
        </h1>
        <div className="">
          {tintoFR.map((item, index) => (
            <VinosItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl text-slate-800 uppercase mb-12">
          i t a l i a
        </h1>
        <div className="">
          {tintoIT.map((item, index) => (
            <VinosItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl text-slate-800 uppercase mb-12">
          e s p a ñ a
        </h1>
        <div className="">
          {tintoES.map((item, index) => (
            <VinosItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl text-slate-800 uppercase mb-12">
          g r e c i a
        </h1>
        <div className="">
          {tintoGR.map((item, index) => (
            <VinosItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl text-slate-800 uppercase mb-12">
          a r g e n t i n a
        </h1>
        <div className="">
          {tintoAR.map((item, index) => (
            <VinosItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl text-slate-800 uppercase mb-12">
          m é x i c o
        </h1>
        <div className="">
          {tintoMX.map((item, index) => (
            <VinosItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl text-slate-800 uppercase mb-12">
          u s a
        </h1>
        <div className="">
          {tintoUS.map((item, index) => (
            <VinosItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl text-slate-800 uppercase mb-12">
          r o s a d o 
          <br />
          e s p a ñ a
        </h1>
        <div className="">
          {rosaES.map((item, index) => (
            <VinosItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl text-slate-800 uppercase mb-12">
          f r a n c i a
        </h1>
        <div className="">
          {rosaFR.map((item, index) => (
            <VinosItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl text-slate-800 uppercase mb-12">
          m é x i c o
        </h1>
        <div className="">
          {rosaMX.map((item, index) => (
            <VinosItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl text-slate-800 uppercase mb-12">
          s k i n  
          <br />
           c o n t a c t
          <br />
          f r a n c i a
        </h1>
        <div className="">
          {skinFR.map((item, index) => (
            <VinosItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl text-slate-800 uppercase mb-12">
          m é x i c o
        </h1>
        <div className="">
          {skinMX.map((item, index) => (
            <VinosItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl text-slate-800 uppercase mb-12">
          e s p u m o s o 
          <br />
          f r a n c i a
        </h1>
        <div className="">
          {espumosoFR.map((item, index) => (
            <VinosItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl text-slate-800 uppercase mb-12">
          i t a l i a
        </h1>
        <div className="">
          {espumosoIT.map((item, index) => (
            <VinosItem key={index} {...item} />
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl text-slate-800 uppercase mb-12">
          p o s t r e
        </h1>
        <div className="">
          {postre2.map((item, index) => (
            <VinosItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Vinos
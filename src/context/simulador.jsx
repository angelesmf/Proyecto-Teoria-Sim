import { createContext, useEffect, useState } from 'react'
import Trailer from '../assets/recursos/truck-2.png'
import Camion from '../assets/recursos/truck.png'
import Auto from '../assets/recursos/car.png'


export const SimContext = createContext()

export default function SimProvider({ children }) {
  const [vehiculos, setVehiculos] = useState([
    [
      {
        id: 'c1-v1',
        img: Trailer,
        position: 0,
        detenido: false,
        size: 20,
        type: 'Trailer',
        ejes: 'liviano'
      },
      {
        id: 'c1-v2',
        img: Camion,
        position: 20,
        detenido: false,
        size: 20,
        type: 'Camion',
        ejes: '2'
      },
      {
        id: 'c1-v3',
        img: Auto,
        position: 50,
        detenido: false,
        size: 20,
        type: 'Auto',
        ejes: '5'
      }
    ],
    [
      {
        id: 'c2-v1',
        img: Camion,
        position: 0,
        detenido: false,
        size: 20,
        type: 'Camion',
        ejes: '2'
      },
      {
        id: 'c2-v2',
        img: Trailer,
        position: 20,
        detenido: false,
        size: 20,
        type: 'Trailer',
        ejes: '4'
      },
      {
        id: 'c2-v3',
        img: Trailer,
        position: 40,
        detenido: false,
        size: 20,
        type: 'Trailer',
        ejes: '5'
      }
    ],
    [
      {
        id: 'c3-v1',
        img: Auto,
        position: 0,
        detenido: false,
        size: 20,
        type: 'Auto',
        ejes: '6'
      },
      {
        id: 'c3-v2',
        img: Trailer,
        position: 20,
        detenido: false,
        size: 20,
        type: 'Trailer',
        ejes: '3'
      },
      {
        id: 'c3-v3',
        img: Auto,
        position: 30,
        detenido: false,
        size: 20,
        type: 'Auto',
        ejes: '4'
      }
    ],
    [
      {
        id: 'c4-v1',
        img: Trailer,
        position: 0,
        detenido: false,
        size: 20,
        type: 'Trailer',
        ejes: 'liviano'
      },
      {
        id: 'c4-v2',
        img: Camion,
        position: 20,
        detenido: false,
        size: 20,
        type: 'Camion',
        ejes: '2'
      },
      {
        id: 'c4-v3',
        img: Auto,
        position: 50,
        detenido: false,
        size: 20,
        type: 'Auto',
        ejes: '5'
      }
    ],
    [
      {
        id: 'c5-v1',
        img: Trailer,
        position: 0,
        detenido: false,
        size: 20,
        type: 'Trailer',
        ejes: '2'
      },
      {
        id: 'c5-v2',
        img: Auto,
        position: 20,
        detenido: false,
        size: 20,
        type: 'Auto',
        ejes: '1'
      },
      {
        id: 'c5-v3',
        img: Auto,
        position: 50,
        detenido: false,
        size: 20,
        type: 'Auto',
        ejes: '4'
      }
    ],
    [
      {
        id: 'c6-v1',
        img: Auto,
        position: 0,
        detenido: false,
        size: 20,
        type: 'Auto',
        ejes: '2'
      },
      {
        id: 'c6-v2',
        img: Trailer,
        position: 20,
        detenido: false,
        size: 20,
        type: 'Trailer',
        ejes: '1'
      },
      {
        id: 'c6-v3',
        img: Camion,
        position: 50,
        detenido: false,
        size: 20,
        type: 'Camion',
        ejes: '3'
      }
    ]
  ])
  const [tarifas, setTarifas] = useState({liviano:20, dos:30, tres:40, cuatro:50, cinco:60, seis:70})
  const [actions, setActions] = useState({play: false, pause: true})

  const [valores, setValores] = useState({
    vehiculos: 18,
    velocidad: 1,
    atencion: 5
  });

  const [estadisticas, setEstadisticas] = useState([
    { caseta: 'c1', vehiculos:[
      { type: 'Trailer', count: 0 },
      { type: 'Camion', count: 0 },
      { type: 'Auto', count: 0 }
    ],
    recaudacion: 0,
    },
    { caseta: 'c2', vehiculos:[
      { type: 'Trailer', count: 0 },
      { type: 'Camion', count: 0 },
      { type: 'Auto', count: 0 }
    ],
    recaudacion: 0,
    },
    { caseta: 'c3', vehiculos:[
      { type: 'Trailer', count: 0 },
      { type: 'Camion', count: 0 },
      { type: 'Auto', count: 0 }
    ],
    recaudacion: 0,
    },
    { caseta: 'c4', vehiculos:[
      { type: 'Trailer', count: 0 },
      { type: 'Camion', count: 0 },
      { type: 'Auto', count: 0 }
    ],
    recaudacion: 0,
    },
    { caseta: 'c5', vehiculos:[
      { type: 'Trailer', count: 0 },
      { type: 'Camion', count: 0 },
      { type: 'Auto', count: 0 }
    ],
    recaudacion: 0,
    },
    { caseta: 'c6', vehiculos:[
      { type: 'Trailer', count: 0 },
      { type: 'Camion', count: 0 },
      { type: 'Auto', count: 0 }
    ],
    recaudacion: 0,

  },

  ]);

  //Agregar vehiculos segun valores.vehiculos
  const addVehiculos = () => {
    let newVehiculos = []
    for (let i = 0; i < valores.vehiculos; i++) {
      let vehiculo = {
        id: `c${i + 1}-v${i + 1}`,
        img: Trailer,
        position: 0,
        detenido: false,
        size: 20,
        type: 'Trailer',
        ejes: 'liviano'
      }
      newVehiculos.push(vehiculo)
    }
    setVehiculos(newVehiculos)
  } //No funciona :(


  return (
    <SimContext.Provider
      value={{
        vehiculos,
        setVehiculos,
        tarifas,
        setTarifas,
        estadisticas,
        setEstadisticas,
        valores,
        setValores,
        actions,
        setActions
      }}
    >
      {children}
    </SimContext.Provider>
  )
}
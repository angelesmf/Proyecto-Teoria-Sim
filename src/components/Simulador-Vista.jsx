import Carretera from './Carretera'

import { useContext, useEffect, useRef, useState } from 'react'
import { SimContext } from '../context/simulador'

export default function SimuladorVista() {
  const { vehiculos, setVehiculos, tarifas, setEstadisticas, valores } = useContext(SimContext);

  const [vehiculosCobrados, setVehiculosCobrados] = useState([]);

  const VELOCIDAD_ATENCION = valores.atencion * 1000;





  const [casetas, setCasetas] = useState([
    { id: 'c1', status: true },
    { id: 'c2', status: true },
    { id: 'c3', status: true },
    { id: 'c4', status: true },
    { id: 'c5', status: true },
    { id: 'c6', status: true },
  ]);

  
useEffect(() => {
  const VELOCIDAD_SIMULACION = valores.velocidad * 100;
  console.log(VELOCIDAD_SIMULACION)
  const interval = setInterval(() => {
    setVehiculos((vehiculos) =>
      vehiculos.map((vehiculosCarril) => {
        // Ordenar los vehículos por posición
        const vehiculosOrdenados = [...vehiculosCarril].sort((a, b) => a.position - b.position);

        const vehiculosActualizados = vehiculosOrdenados.map((vehiculo, index) => {
          // Si el vehículo está detenido, no avanzar
          if (vehiculo.detenido) {
            return vehiculo;
          }

          // Si el vehículo está en la caseta, detener y reiniciar posición
          if (vehiculo.position === 57) {
            return { ...vehiculo, detenido: true, position: 58 };
          }

          // Si el vehículo está demasiado cerca del vehículo delante de él, detener
          if (index < vehiculosOrdenados.length - 1 && vehiculosOrdenados[index + 1].position - vehiculo.position < 10) {
            return { ...vehiculo, detenido: false };
          }
          // En otro caso, avanzar
          return { ...vehiculo, position: vehiculo.position + 1 };
        });

        // Filtrar los vehículos que tienen una posición mayor a 100
        return vehiculosActualizados.filter(vehiculo => vehiculo.position <= 100);
      })
    );
  }, VELOCIDAD_SIMULACION);
  return () => clearInterval(interval);
}, [valores.velocidad]);

// Efecto para reanudar los vehículos después de detenerse en la caseta
useEffect(() => {
  vehiculos.forEach((vehiculosCarril) =>
    vehiculosCarril.forEach((vehiculo) => {
      if (vehiculo.detenido) {
        setTimeout(() => {
          setVehiculos((currentVehiculos) =>
            currentVehiculos.map((vehiculosCarril) =>
              vehiculosCarril.map((v) => {
                if (v.id === vehiculo.id) {

                  return { ...v, detenido: false };
                }

                return v;
              })
            )
          );

        }, VELOCIDAD_ATENCION);
      }
    })
  );
}, [vehiculos]);

// Efecto para actualizar el estado de las casetas
useEffect(() => {
  setCasetas((casetas) =>
    casetas.map((caseta) => {
      // Buscar si hay algún vehículo detenido en la caseta
      const vehiculoDetenido = vehiculos.some((vehiculosCarril) =>
        vehiculosCarril.some((vehiculo) => {
          if (vehiculo.detenido && vehiculo.position === 58) { 
            return true;
          }
          return false;
        })
      );

      // Si hay un vehículo detenido, la caseta pasa a estar en true
      if (vehiculoDetenido) {
        return { ...caseta, status: true };
      }

      // Cuando el vehículo avanza, la caseta pasa a ser false
      return { ...caseta, status: false };
    })
  );
}, [vehiculos]);

// Obtener el vehículo detenido en la caseta y llamar calculoCaseta para calcular el costo una vez que el vehículo pase
// debes actualizar el estado de los vehículos cobrados para evitar que se vuelva a calcular el costo
useEffect(() => {
  vehiculos.forEach((vehiculosCarril) =>
    vehiculosCarril.forEach((vehiculo) => {
      if (vehiculo.detenido && vehiculo.position === 58 && !vehiculosCobrados.includes(vehiculo.id)) {
        calculoCaseta(vehiculo);
        setVehiculosCobrados((vehiculosCobrados) => [...vehiculosCobrados, vehiculo.id]);
      }
    })
  );
}, [vehiculos, vehiculosCobrados]);


const calculoCaseta = (vehiculo) => {
  //Segun el tipo de vehiculo se calcula el costo
  let costo = 0;
  switch (vehiculo.ejes) {
    case 'liviano':
      costo = tarifas.liviano;
      break;
    case '2':
      costo = tarifas.dos;
      break;
    case '3':
      costo = tarifas.tres;
      break;
    case '4':
      costo = tarifas.cuatro;
      break;
    case '5':
      costo = tarifas.cinco;
      break;
    case '6':
      costo = tarifas.seis;
      break;
    default:
      costo = 0;
      break;
  }
  // console.log(`El vehículo de tipo ${vehiculo?.type} debe pagar L.${costo}`); 

  // console.log(`Auto con ${vehiculo?.ejes} ejes, pago L.${costo}`);
  // Actualizar las estadísticas recuerda que los id de vehiculos son 'c1-v1' y la carretera es 'c1'
setEstadisticas((estadisticas) =>
  estadisticas.map((estadistica) => {
    if (estadistica.caseta === vehiculo.id.slice(0, 2)) {
      return {
        ...estadistica,
        vehiculos: estadistica.vehiculos.map((v) => {
          if (v.type === vehiculo.type) {
            return { ...v, count: v.count + 1 };
          }
          return v;
        }),
        recaudacion: estadistica.recaudacion + costo,
      };
    }
    return estadistica;
  })
);
}





  return (
    <aside className='h-screen w-full bg-grass flex justify-center overflow-hidden'>
      <div className='h-full flex justify-center'>
        {
          casetas.map((caseta, index) => (
            <Carretera key={caseta.id} status={caseta.status}>
              {vehiculos[index].map((vehiculo) => (
                <img
                  key={vehiculo.id}
                  src={vehiculo.img}
                  className='absolute end-3'
                  style={{ bottom: vehiculo.position + '%' }}
                />
              ))}
            </Carretera>
          ))
        }
        {/* <Carretera status={casetas[1].status}>
          {vehiculos[1].map((vehiculo) => (
            <img
              key={vehiculo.id}
              src={vehiculo.img}
              className='absolute end-3'
              style={{ bottom: vehiculo.position + '%' }}
            />
          ))}
        </Carretera>

        <Carretera status={casetas[2].status}>
          {vehiculos[2].map((vehiculo) => (
            <img
              key={vehiculo.id}
              src={vehiculo.img}
              className='absolute end-3'
              style={{ bottom: vehiculo.position + '%' }}
            />
          ))}
        </Carretera> */}
        {/* <Carretera status={false}>
          <img src={Trailer} className='absolute end-3 bottom-[90%]' />
          <img src={Auto} className='absolute end-3 bottom-[50%]' />
          <img src={Trailer} className='absolute end-3 bottom-[0%]' />
        </Carretera>
        <Carretera status={true}>
          <img src={Camion} className='absolute end-3 bottom-[90%]' />
          <img src={Trailer} className='absolute end-3 bottom-[50%]' />
          <img src={Trailer} className='absolute end-3 bottom-[0%]' />
        </Carretera>
        <Carretera status={true}>
          <img src={Auto} className='absolute end-3 bottom-[60%]' />
          <img src={Trailer} className='absolute end-3 bottom-[40%]' />
          <img src={Auto} className='absolute end-3 bottom-[0%]' />
        </Carretera>
        <Carretera status={false}>
          <img src={Camion} className='absolute end-3 bottom-[70%]' />
          <img src={Trailer} className='absolute end-3 bottom-[40%]' />
          <img src={Auto} className='absolute end-3 bottom-[10%]' />
        </Carretera> */}
      </div>
    </aside>
  )
}

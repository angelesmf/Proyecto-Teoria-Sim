import Auto from '../assets/recursos/car-90.png'
import Camion from '../assets/recursos/truck-90.png'
import Trailer from '../assets/recursos/truck-2-90.png'

import { zodResolver } from '@hookform/resolvers/zod'
import {  useForm } from 'react-hook-form'
import * as z from 'zod'
import { useContext } from 'react'
import { SimContext } from '../context/simulador'
import React, { useState } from "react";

const validationSchema = z.object({
  liviano: z.number()
    .min(0, { message: 'El valor minimo es 0' }),
  'dos': z.number() .min(0, { message: 'El valor minimo es 0' }),
  'tres': z.number() .min(0, { message: 'El valor minimo es 0' }),
  'cuatro': z.number() .min(0, { message: 'El valor minimo es 0' }),
  'cinco': z.number() .min(0, { message: 'El valor minimo es 0' }),
  'seis': z.number() .min(0, { message: 'El valor minimo es 0' })
})

// export default function BarraOpciones() {
  
  export default function BarraOpciones() {
    const [valores, setValores] = useState({
      valor1: 50,
      valor2: 3,
      valor3: 10
    });
    const { tarifas, setTarifas, estadisticas } = useContext(SimContext);
    const onSubmit = (data) => {
      setTarifas(data)
    }

    const {
      handleSubmit,
      register,
      formState: { errors }
    } = useForm({ resolver: zodResolver(validationSchema) }, {
      defaultValues: {
        liviano: tarifas.liviano,
        dos: tarifas.dos,
        tres: tarifas.tres,
        cuatro: tarifas.cuatro,
        cinco: tarifas.cinco,
        seis: tarifas.seis
      }
    })
    const handleChange = (event) => {
      const { name, value } = event.target;
      setValores({ ...valores, [name]: parseInt(value) }); // Convertir el valor a número usando parseInt
    };
    const obtenerVelocidad = (valor) => {
      switch (valor) {
        case 1:
          return "Muy lenta (x0.5)";
        case 2:
          return "Lenta (x0.75)";
        case 3:
          return "Normal (x1)";
        case 4:
          return "Rápida (x1.5)";
        case 5:
          return "Muy rápida (x2)";
        default:
          return "Desconocida";
      }
    };

    // Estado para almacenar la cantidad de vehículos en cada caseta
  const [cantidadVehiculos, setCantidadVehiculos] = useState({
    caseta1: 0,
    caseta2: 0,
    caseta3: 0,
    caseta4: 0,
    caseta5: 0,
    caseta6: 0,
  });

  // Función para actualizar la cantidad de vehículos en una caseta específica
  const actualizarCantidadVehiculos = (caseta, cantidad) => {
    setCantidadVehiculos(prevState => ({
      ...prevState,
      [caseta]: cantidad,
    }));
  };


  return (
    <aside className="h-screen w-[500px] bg-violet-400 p-4 flex flex-col gap-3">
    <div>
      <h2 className=" text-xl text-center mb-1">Simulacion</h2>
      <div className="flex flex-col gap-2 text-md text-white">
      <div className="relative mb-1 bg-violet-500 opacity-90 rounded-lg p-1 text-md px-4">
          <label htmlFor="labels-range-input">Cantidad de vehiculos </label> <br />
          <input
            type="range"
            min={1}
            max={100}
            value={valores.valor1}
            onChange={handleChange}
            name="valor1"
            className="accent-blue-800 w-full"
          />
          <div className="flex justify-between -mt-2 text-white">
          <span>
            Min 1
          </span>
          <span className="">
            Max 100
          </span>
          </div>
          
         
          <p>Vehiculos seleccionados:  {valores.valor1}</p>
        </div>

        <div className="relative mb-1 bg-violet-500 opacity-90 rounded-lg p-1 text-md px-4 ">
          <label htmlFor="labels-range-input">Velocidad de Simulación</label> <br />
          <input
            type="range"
            min={1}
            max={5}
            value={valores.valor2}
            onChange={handleChange}
            name="valor2"
            className="accent-blue-800 w-full"
          />
            <div className="flex justify-between -mt-2 text-white">
          <span>
            Muy lenta
          </span>
          <span className="">
            Normal
          </span>
          <span className="">
            Muy rápida
          </span>
          </div>
          <p className="">Velocidad de simulacion: {obtenerVelocidad(valores.valor2)}</p>
        </div>

        <div className="relative mb-1 bg-violet-500 opacity-90 rounded-lg p-1 text-md px-4 ">
          <label htmlFor="labels-range-input">Tiempo promedio de atención</label><br />
          <input
            type="range"
            min={1}
            max={60}
            value={valores.valor3}
            onChange={handleChange}
            name="valor3"
            className="accent-blue-800 w-full"
          />
           <div className="flex justify-between -mt-2 text-white">
          <span>
            Min 1 min
          </span>
          <span className="">
            Max 60 min
          </span>
          </div>
          <p>Tiempo: {valores.valor3} min</p>
        </div>
      </div>
    </div>

      <div>
        <h2 className=' text-2xl text-center'>Tarifa de Peaje</h2>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)} >
          <div className='flex flex-row gap-2 items-center'>
            <label htmlFor='liviano' className=' flex-shrink-0'>
              Liviano:
            </label>
            <input
              type='number'
              className={`bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
              ${errors.liviano ? 'border-red-500 border-2' : ''}
              `}
              defaultValue={tarifas.liviano}
              required
              {...register('liviano', {
                valueAsNumber: true
              })}
            />
          </div>
          {
            errors.liviano && (
              <span className='text-red-700 text-sm font-normal'>
                {errors.liviano.message}
              </span>
            )
          }

          <div className='flex flex-row gap-2 items-center'>
            <label htmlFor='number-input' className=' flex-shrink-0'>
              2 Ejes:
            </label>
            <input
              type='number'
              className={`bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
              ${errors.dos ? 'border-red-500 border-2' : ''}
              `}
              defaultValue={tarifas.dos}
              required
              {...register('dos', {
                valueAsNumber: true
              })}
            />
          </div>
          {
            errors.dos && (
              <span className='text-red-700 text-sm font-normal'>
                {errors.dos.message}
              </span>
            )
          }

          <div className='flex flex-row gap-2 items-center'>
            <label htmlFor='number-input' className=' flex-shrink-0'>
              3 Ejes:
            </label>
            <input
              type='number'
              id='number-input'
              className={`bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
              ${errors.tres ? 'border-red-500 border-2' : ''}
              `}
              defaultValue={tarifas.tres}
              required
              {...register('tres', {
                valueAsNumber: true
              })}
            />
          </div>
          {
            errors.tres && (
              <span className='text-red-700 text-sm font-normal'>
                {errors.tres.message}
              </span>
            )
          }

          <div className='flex flex-row gap-2 items-center'>
            <label htmlFor='number-input' className=' flex-shrink-0'>
              4 Ejes:
            </label>
            <input
              type='number'
              id='number-input'
              className={`bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
              ${errors.cuatro ? 'border-red-500 border-2' : ''}
              `}
              defaultValue={tarifas.cuatro}

              required
              {...register('cuatro', {
                valueAsNumber: true
              })}
            />
          </div>
          {
            errors.cuatro && (
              <span className='text-red-700 text-sm font-normal'>
                {errors.cuatro.message}
              </span>
            )
          }
          <div className='flex flex-row gap-2 items-center'>
            <label htmlFor='number-input' className=' flex-shrink-0'>
              5 Ejes:
            </label>
            <input
              type='number'
              id='number-input'
              className={`bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
              ${errors.cinco ? 'border-red-500 border-2' : ''}
              `}
              defaultValue={tarifas.cinco}

              required
              {...register('cinco', {
                valueAsNumber: true
              })}
            />
          </div>
          {
            errors.cinco && (
              <span className='text-red-700 text-sm font-normal'>
                {errors.cinco.message}
              </span>
            )
          }
          <div className='flex flex-row gap-2 items-center'>
            <label htmlFor='number-input' className=' flex-shrink-0'>
              6 Ejes:
            </label>
            <input
              type='number'
              className={`bg-gray-50 h-8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
              ${errors.seis ? 'border-red-500 border-2' : ''}
              `}
              defaultValue={tarifas.seis}

              required
              {...register('seis', {
                valueAsNumber: true
              })}
            />
          </div>
          {
            errors.seis && (
              <span className='text-red-700 text-sm font-normal'>
                {errors.seis.message}
              </span>
            )
          }
          <button
            type='submit'
            className='bg-blue-500 text-white rounded-lg h-8 hover:bg-blue-600'
          >
            Guardar
          </button>
        </form>
      </div>


      <div>
        <h2 className=' text-2xl text-center'>Estadisticas</h2>
        <div className='flex flex-row gap-2'>
          <table border='1' className='w-full' >
            <thead>
              <td
                colSpan={8}
                className='text-center font-semibold bg-yellow-400'
              >
                Casetas
              </td>
            </thead>
            <thead className='text-center border'>
              <td className='w-24'></td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </thead>

            <tbody className='text-center'>
              <tr >
                <td className='flex justify-end '>
                  <img src={Auto} alt='Auto' className='h-6' />
                </td>
                {
                  //Estadisticas de las casetas con el tipo de vehiculo Auto

                  estadisticas.map((caseta) => (
                    <td key={caseta.caseta}>
                      {caseta.vehiculos.find((v) => v.type === 'Auto')?.count}
                    </td>
                  ))

                }
              </tr>

              <tr >
                <td className='flex justify-end '>
                  <img src={Camion} alt='Camion' className=' h-6' />
                </td>
                {
                  //Estadisticas de las casetas con el tipo de vehiculo Camion

                  estadisticas.map((caseta) => (
                    <td key={caseta.caseta}>
                      {caseta.vehiculos.find((v) => v.type === 'Camion')?.count}
                    </td>
                  ))

                }
              </tr>

              <tr >
                <td className='flex justify-end '>
                  <img src={Trailer} alt='Trailer' className='  h-6' />
                </td>
                {
                  //Estadisticas de las casetas con el tipo de vehiculo Trailer

                  estadisticas.map((caseta) => (
                    <td key={caseta.caseta}>
                      {caseta.vehiculos.find((v) => v.type === 'Trailer')?.count}
                    </td>
                  ))

                }
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </aside>
  )
}

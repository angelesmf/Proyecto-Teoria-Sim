import React, { useContext } from "react";
import { SimContext } from "../../context/simulador";

export default function ModalTabla() {
   const {estadisticas} = useContext(SimContext);

  return (
    <div className="p-6 size-[100%] text-2xl ">
      <caption className="flex justify-center text-3xl text-white">
        <b className="text-center ">Reporte</b>
      </caption>
      <table className="table-auto text-center mt-2">
        <thead>
          <tr>
            <th>Peaje</th>
            <th>Vehiculos</th>
            <th>Precio total</th>
          </tr>
        </thead>
        <tbody>
          {estadisticas.map((estadistica) => (
            <tr key={estadistica.caseta}>
              <td>
                Caseta{" "}
                {
                  //Las cassetas son de la forma c1, c2, c3, c4... por lo que se puede acceder a la ultima letra con estadistica.caseta[1]
                  estadistica.caseta[1]

                }
              </td>
              <td>
                {estadistica.vehiculos.map((v) => (
                  <p key={v.type}>
                    {v.type}: {v.count}
                  </p>
                ))}
              </td>
              <td>${estadistica.recaudacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

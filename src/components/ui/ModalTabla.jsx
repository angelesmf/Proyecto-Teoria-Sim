import React from "react";

// Contenido de la tabla modal en html plano --pendiente hacer valores dinamicos
export default function ModalTabla() {
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
          <tr>
            <td>Peaje 1</td>
            <td>8 </td>
            <td> L 160</td>
          </tr>
          <tr>
            <td>Peaje 2</td>
            <td>6 </td>
            <td> L 120</td>
          </tr>
          <tr>
            <td>Peaje 3</td>
            <td>12</td>
            <td> L 240</td>
          </tr>
          <tr>
            <td>Peaje 4</td>
            <td>10 </td>
            <td> L 200</td>
          </tr>
          <tr>
            <td>Peaje 5</td>
            <td>11 </td>
            <td> L 220</td>
          </tr>
          <tr>
            <td>Peaje 6</td>
            <td>5 </td>
            <td> L 100</td>
          </tr>
          <tr>
            <td>Peaje 7</td>
            <td>14 </td>
            <td> L 280</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

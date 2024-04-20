import Logo from '../assets/logo.png'
import { Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    
    <nav className='flex w-full bg-violet-800 h-32 justify-between items-center p-10'>
      <a href='/' className='flex items-center gap-4'>
        <img src={Logo} alt='Logo' className='h-20 w-20' />
        <h1 className='text-3xl font-bold text-white'>PeajeSim</h1>
      </a>
      <div>
        <ul className='flex gap-4 text-white'>
          <li>
            <a className="hover:underline text-2xl font-bold" href="/">Inicio</a>
          </li>
          <li>
            <a className="hover:underline text-2xl font-bold" href="simulador">Simulador</a>
          </li>
          <li>
            <a className="hover:underline text-2xl font-bold" href="guia">Guia Visual</a>
          </li>
        </ul>
      </div>
      <span></span>
    </nav>
    <Outlet />
    </>
  )
}

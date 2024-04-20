import BarraAcciones from '../components/Barra-Acciones'
import BarraOpciones from '../components/Barra-Opciones'
import SimuladorVista from '../components/Simulador-Vista'
import SimProvider from '../context/simulador'

export default function simulador() {
  //Scroll hasta el elemento con id 'sim'
  const scroll = () => {
    const element = document.getElementById('sim')
    element.scrollIntoView({ behavior: 'smooth' })
  }
  //Ejecutar la función scroll al cargar la página
  window.onload = scroll
  return (
    <SimProvider>
      <main id='sim' className='flex'>
        <BarraAcciones />
        <SimuladorVista />
        <BarraOpciones />
      </main>
    </SimProvider>
  )
}

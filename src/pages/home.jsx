import React, {useEffect} from "react";

export default function Home() {
  useEffect(()=>{

  //aplicar scroll-smooth a los enlaces del slider
  const slider = document.querySelector('.slider');
  slider.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName === 'A') {
      const slide = document.getElementById(e.target.getAttribute('href').replace('#', ''));
      slide.scrollIntoView({ behavior: 'smooth' });
    };
  }
);
  },[]);

  return (
    <main className=' h-screen bg-white'>

      <section className=' relative h-[85%] '>
        <img
          src='https://accenorte.com/sites/default/files/media/inline-images/peaje1_0.jpg'
          alt='imagen de portada'
          className='absolute brightness-50 h-1/2 w-full object-cover bg-bottom '
        />
        <div className='absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-center'>
          <h1 className='text-5xl w-full font-bold text-white'>
            Beneficios sobre el pago de peajes
          </h1>

          <div className='slider absolute mt-4 left-1/2 transform -translate-x-1/2 '>
          <div className='slides text-white'>
              <div id='slide-1'>
              Los ingresos generados por los peajes se utilizan a menudo para financiar proyectos de mejora de infraestructura vial, lo que resulta en carreteras más seguras y eficientes para todos los usuarios.
              </div>
              <div id='slide-2'>
              Al proporcionar alternativas viales adicionales, los peajes pueden ayudar a reducir la congestión del tráfico en las carreteras principales y mejorar la fluidez del tráfico.
              </div>
              <div id='slide-3'>
              Las carreteras financiadas con peajes suelen tener mejores condiciones de mantenimiento y seguridad, lo que puede ayudar a prevenir accidentes y mejorar la seguridad vial en general.
              </div>

            </div>
            <a href='#slide-1'>1</a>
            <a href='#slide-2'>2</a>
            <a href='#slide-3'>3</a>



          </div>

        </div>
          <a href="/simulador" className='bg-violet-800 text-white absolute bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center py-2 px-6 rounded-full hover:scale-110 transition duration-500 shadow-md hover:shadow-lg'>
          Iniciar Simulación
          </a>
      </section>
    </main>
  )
}

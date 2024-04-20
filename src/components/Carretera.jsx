import PropTypes from 'prop-types'

export default function Carretera({ status, children }) {

  return (
    <div className='relative max-w-20 w-20 bg-road bg-neutral-600  border-x-2 '>
      <div className='w-full top-0 h-full relative'>
        {children}
      </div>
      <div className='bg-paso-peaje w-6 h-32 absolute top-1/3 -start-2 flex justify-center items-center'>
        <div
          className={` h-4 w-4 rounded-full shadow-out ${
              status
              ? 'bg-green-500  shadow-green-500'
              : 'bg-red-500 shadow-red-500'
            }`}
        />
      </div>
    </div>
  )
}

Carretera.propTypes = {
  status: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired

}

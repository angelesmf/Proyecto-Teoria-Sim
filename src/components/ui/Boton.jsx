


import PropTypes from 'prop-types';

export default function Boton({children, texto, className=''}) {
    return (
        <div className='flex flex-col justify-center items-center'>
                <button className={`p-2 aspect-square w-fit rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-white ${className}`}>
                        {children}
                </button>
                <span className='text-black text-sm text-center'>{texto}</span>
        </div>
    )
}

Boton.propTypes = {
    children: PropTypes.node.isRequired,
    texto: PropTypes.string.isRequired,
    className: PropTypes.string,
};

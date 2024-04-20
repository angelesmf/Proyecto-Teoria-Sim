


import PropTypes from 'prop-types';

export default function BotonImg({children, texto, className=''}) {
    return (
        <div className='flex flex-col justify-center items-center'>
                <button className={`hover:shadow-lg hover:scale-105 transition-all duration-300 ${className}`}>
                        {children}
                </button>
                <span className='text-black text-sm text-center'>{texto}</span>
        </div>
    )
}

BotonImg.propTypes = {
    children: PropTypes.node.isRequired,
    texto: PropTypes.string.isRequired,
    className: PropTypes.string,
};

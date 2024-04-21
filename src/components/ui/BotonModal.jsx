import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalTabla from './ModalTabla'; 

// Plantilla del boton inicial pero agregando un evento para abrir la ventana modal del reporte

export default function Boton({ children, texto, className = '', onClick }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonClick = () => {
    setModalVisible(true);
    if (onClick) {
      onClick(); 
    }
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <button
        className={`p-2 aspect-square w-fit text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 ${className}`}
        onClick={handleButtonClick}
      >
        {children}
      </button>
      <span className='text-black text-sm text-center'>{texto}</span>
      {/* Modal */}
      {modalVisible && (
        <div className='modal-overlay'>
          <div className='modal w-1/2 bg-violet-500/40 backdrop-blur-sm rounded-2xl'>
            <span className='close' onClick={handleModalClose}>
              &times;
            </span>
            <div className='modal-content'>
              <ModalTabla /> 
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

Boton.propTypes = {
  children: PropTypes.node.isRequired,
  texto: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
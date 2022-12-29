import React from 'react';
import './Spinner.css'

function Spinner({ message }) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
     <div className="loading-spinner">
      </div>

      <p className="text-lg text-center px-2">{message}</p>
    </div> 
  );
}

export default Spinner;

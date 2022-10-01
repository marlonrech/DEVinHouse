import React, { useRef } from 'react';

const FocusDoInput = () => {
  const focoNoInput = useRef();

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <input type="text" ref={focoNoInput} />

      <div>
        <button
          onClick={() => {
            focoNoInput.current.focus();
          }}
        >
          foca no input
        </button>
      </div>
    </div>
  );
};

export default FocusDoInput;

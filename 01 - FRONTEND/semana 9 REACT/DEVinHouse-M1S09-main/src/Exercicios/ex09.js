import React, { useEffect, useState, useRef } from 'react';

const Clock = () => {
  const [clock, setClock] = useState(new Date());
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setClock(new Date());
    }, 1000);
    return () => {
      clearInterval(timerRef);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Hello World</h1>
      <h2>{clock.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;

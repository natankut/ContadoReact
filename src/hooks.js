import React, { useState, useEffect } from 'react';

export default function ComponentHooks(props) {
  const [count, setCount] = useState(0);
  var fecha = new Date();
  useEffect(() => {
    fecha = Date.now();
  }, [count]);

  return (
    <>
      <h1>Contador: {count}</h1>
      <h2>Fecha que clickeaste por ultima vez: {fecha.toLocaleString()}</h2>

      <button text="SUMAR" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button text="RESTAR" onClick={() => setCount(count - 1)}>
        -
      </button>
    </>
  );
}

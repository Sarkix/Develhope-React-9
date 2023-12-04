import React from 'react';
import Hello from './Hello';
import Message from './Message';
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <Hello />
      <Hello />

      <Message />

      {/* Nuevo componente Welcome con props name y age */}
      <Welcome name={<strong>John</strong>} age={16} /> {/*He cambiado el valor de age de 25 a 16 para comprobar que funciona.*/}
    </div>
  );
}

export default App;

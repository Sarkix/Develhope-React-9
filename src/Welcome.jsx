import React from 'react';
import styles from './Welcome.module.css';
import Age from './Age';

function Welcome({ name, age }) {
  return (
    <p className={styles.welcome}>
      Welcome, <strong>{name}</strong>! 
      {age > 18 && <Age age={age} />} {age && <Age age={age} />} {age > 18 && age < 65 && <Age age={age} />} {age > 18 && age < 65 && name === 'John' && <Age age={age} />}
    </p>
  );
}

export default Welcome;

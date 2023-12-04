import React from 'react';
import Message from "./Message";
import styles from './Hello.module.css';

function Hello() {
  return (
  <div>
  <h2 className={styles.title}>Hello, World!</h2>
  <Message />
  </div>);
}

export default Hello;

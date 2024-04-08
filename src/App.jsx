import './App.css';
import Display from './Display';
import styles from "./App.module.css";
import Button from './Button';
import { useState } from 'react';

function App() {
  const [displayValue, setPlayValue] =useState('');
  return (
    <center>
        <div className={styles.box}>
          <h1><b>Drum Machine</b></h1>
        <Display displayValue={displayValue}></Display>
        <Button setPlayValue={setPlayValue} displayValue={displayValue}></Button>
        </div>
    </center>
  );
}

export default App;

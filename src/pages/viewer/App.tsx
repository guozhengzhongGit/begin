import React, { useEffect, useState } from 'react';
import './app.css';
import img1 from '@assets/p1.png';
import styles from './app.module.less';
import './app.less';

function App() {
  const [c, setC] = useState(0)
  const add = () => {
    setC(c => c + 1)
    console.log(11)
  }
  return (
    <div className="rootOuter">
      hello 9998
      <button onClick={add}>add</button>
      <h1 className={styles.count}>{c}</h1>
        <div className="imgBox">
            <img src={img1} alt="" />
        </div>
    </div>
  )
}

export default App;

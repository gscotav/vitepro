// @ts-nocheck

import { useState } from 'react'

import './App.css'

function App() {
 
  const [count, setCount] = useState(0);
  const [money, setMoney] = useState('');

  let feedback = "";
  if (count < 0) {
    feedback = "tzeduka";
  } else {
    feedback = "massir";
  } 

  return (
    <div>
      <h1>massir cheshbon</h1>
      <div>
        <button onClick={() => setCount((count) => count - money)}>
          tzeduka
        </button><> </>
        <input
          value={money}
          onChange={(e) => setMoney(e.target.value)}
          placeholder="Enter your earnings or tzeduka"
          style={{
            whiteSpace: 'nowrap',
            width: '185px',
          }}
        />
        <button onClick={() => setCount((count) => (count + money / 10))}>
          massir
        </button>
        <p>Your {feedback}: ${count.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default App

// @ts-nocheck

import { useState } from 'react';
import './style.css';
import firebaseConfig from './firebaseConfig';
export const App: FC<{ name: string }> = ({ name }) => {
  const [count, setCount] = useState(0);
  const [money, setMoney] = useState('');

  let feedback = '';
  if (count < 0) {
    feedback = 'tzeduka';
  } else {
    feedback = 'massir';
  }

  let result = '';
  if (count < 0) {
    result = Math.abs(count);
  } else {
    result = count;
  }

  return (
    <div>
      <h1>massir cheshbon</h1>
      <div>
        <button onClick={() => setCount((count) => count - money)}>
          tzeduka
        </button>
        <> $</>
        <input
          value={money}
          onChange={(e) => setMoney(e.target.value)}
          placeholder="Enter your earnings or tzeduka"
          style={{
            whiteSpace: 'nowrap',
            width: '185px',
          }}
        />
        <button onClick={() => setCount((count) => count + money / 10)}>
          massir
        </button>
        <p>
          Your {feedback}: ${result.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

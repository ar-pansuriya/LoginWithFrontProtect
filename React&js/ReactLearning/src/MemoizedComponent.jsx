// MemoizedComponent.js
import React, { useMemo, useState } from 'react';

const MemoizedComponent = () => {

  let [count,setCount]=useState(1)
  // Simulating a heavy computation
  const doubleCount = useMemo(() => {
    console.log('Performing expensive calculation...');
    for(let i = 0;i<1000000000;i++){
      count+=3
    }
    return count
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count (Memoized): {doubleCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default MemoizedComponent;

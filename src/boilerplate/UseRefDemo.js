import { useRef, useState } from 'react';
import './index.css'

function UseRefDemo() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const incrementCount = () => {
    setCount(count + 1);
    countRef.current++;
  };

  return (
    <div>
      
      <h1>Count Ref: {countRef.current}</h1>
      <h2>Count: {count}</h2>
      <button onClick={incrementCount}>Increment </button>
    </div>
  );
}

export default UseRefDemo;

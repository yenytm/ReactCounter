import './App.css'
import { useEffect, useState } from 'react'
import { SecondsCounter } from './components/secondsCounter/SecondsCounter';

function App() {
const [counter, setCount] = useState(0);
useEffect (() => {
  const interval = setInterval(() =>{
    setCount(counter + 1);
  }, 1000)
return () => clearInterval(interval);

  }, [counter])




  return (
    <>
    <SecondsCounter counter={counter} />
    </>
  )
}

export default App

import { useState } from 'react';
import './App.css';
import Timer from './components/Timer';

function App() {
  const [showTimer,setShowTimer] = useState(true)
  return (
    <div className="App">
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>{showTimer ? "Hide Timer" : "Show Timer"}</button>
    </div>
  );
}

export default App;

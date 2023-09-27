import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");

  useEffect(() => {
    const colors = ["green", "yellow", "red"];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % colors.length;
      setColor(colors[i]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getClassName = (circleColor) => {
    let className = 'circle';
    if (color === circleColor) className = className + ' ' + circleColor;
    return className;
  };

  
  return (
    <div className="App">     
      <div className={getClassName('red')} onClick={() => setColor('red')}></div>
      <div className={getClassName('yellow')} onClick={() => setColor('yellow')}></div>
      <div className={getClassName('green')} onClick={() => setColor('green')}></div>
    </div>
  );
}

export default App;



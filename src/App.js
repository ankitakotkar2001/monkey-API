import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [get, setGet] = useState(false);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#121212';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  const toggleGet = () => {
    if (get === false) {
      setGet(true);
      console.log("setGet ", get);
    }
  }

  return (
    <>
      <Navbar toggleMode={toggleMode} mode={mode} toggleGet={toggleGet} />
      <div className="theme-btn">
        <button onClick={toggleMode} className={`btn btn-${mode}`}>{mode === 'light' ? 'Dark' : 'Light'} Mode</button>
      </div>
      <div className="container">
        <Cards mode={mode} get={get} />
      </div>
    </>
  );
}

export default App;

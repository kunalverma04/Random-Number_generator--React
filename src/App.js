// import logo from './logo.svg';
import './App.css';
import React ,{useState}from 'react';

function App() {
  const [MinVal,setMinVal]=useState(0);
  const [MaxVal,setMaxVal]=useState(10);
  const [randomNum,setrandomNum]=useState(0);
  const handelRandom=()=>{
    setrandomNum(Math.floor(Math.random() * (MaxVal-MinVal +1)+ MinVal))
  }

  return (
    <div className="App">
      <div className="container">

        <div className="randomNum">

          <p>Random Number  <span>{randomNum}</span></p>

        </div>

        <div className="numContainer">
          <div>
            <p>Min:</p>
            <input type="number" value={MinVal} onChange={e =>setMinVal(+e.target.value)} />
          </div>
          <div>
            <p>Max:</p>
            <input type="number" value={MaxVal} onChange={e =>setMaxVal(+e.target.value)}/>
          </div>
        </div>
        <button  onClick={handelRandom} className="btn">Get random number</button>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";

function App() {
  const [shownoball11, setshownoball11] = useState(false);
  const [shownoball12, setshownoball12] = useState(false);
  const [shownoball13, setshownoball13] = useState(false);
  const [shownoball14, setshownoball14] = useState(false);
  const [shownoball15, setshownoball15] = useState(false);

  const box1 = () => {
    setshownoball11(false);
  };
  const box2 = () => {
    setshownoball12(false);
  };
  const box3 = () => {
    setshownoball13(false);
  };
  const box4 = () => {
    setshownoball14(false);
  };
  const box5 = () => {
    setshownoball15(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const d = e.target.input.value;
    e.stopPropagation();
    console.log(d);

    if (d === "1") {
      setshownoball11(true);
    }
    if (d === "2") {
      setshownoball12(true);
    }
    if (d === "3") {
      setshownoball13(true);
    }
    if (d === "4") {
      setshownoball14(true);
    }
    if (d === "5") {
      setshownoball15(true);
    }
    e.target.input.value = "";
  };

  return (
    <div className="bbox">
      {/* <h1>Hello World</h1> */}
      <div className="container1">
        <div className="box1">Empty Div</div>
        <div className="container12">
          <div className="box221 " hidden={!shownoball11} onClick={box1}></div>
          <div className="box222 " hidden={!shownoball12} onClick={box2}></div>
          <div className="box223 " hidden={!shownoball13} onClick={box3}></div>
          <div className="box224 " hidden={!shownoball14} onClick={box4}></div>
          <div className="box225 " hidden={!shownoball15} onClick={box5}></div>
        </div>
      </div>
      <div></div>
      <div className="d2">
        <div className="box12"><h3>5 circles</h3></div>
        <div className="box221" hidden={shownoball11}></div>
        <div className="box222" hidden={shownoball12}></div>
        <div className="box223" hidden={shownoball13}></div>
        <div className="box224" hidden={shownoball14}></div>
        <div className="box225" hidden={shownoball15}></div>
      </div>
      <div className="con3">
        <div className="di3">
          <form onSubmit={handleSubmit}>
            <input type="text" name="input" className="input"  />
            <br />
            <button className="button">Push</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";

import Button from "./components/Button";

function App() {
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <div className="App">
      <div>Hey There!!</div>
      <Button
        height={"50px"}
        width={"400px"}
        background={"powderblue"}
        color={"blue"}
        fontSize={"18px"}
        onClick={() => {
          setDisplay(true);
        }}
      />
      {display ? <div>Amma baboi Nokkesav</div> : <></>}
    </div>
  );
}

export default App;

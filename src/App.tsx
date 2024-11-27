import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Input } from "npm-library-ui-kit-kat";

function App() {
  return (
    <div className="App">
      <Button xl color="white">
        Add to Busket
      </Button>
      <br />

      <Input xl label="input" placeholder="name" />
    </div>
  );
}

export default App;

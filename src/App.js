import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Board from "./Board";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe!</h1>
        <Board />
      </header>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";

class Board extends React.Component {
  board = [["", "", ""], ["", "", ""], ["", "", ""]];

  handleClick = event => {
    const row = event.target.getAttribute("data-row");
    const col = event.target.getAttribute("data-col");

    alert(`clicked on row ${row}, col ${col}`);
  };

  render() {
    return (
      <div id="board">
        <div className="row">
          <div data-row={0} data-col={0} onClick={this.handleClick}>
            {this.board[0][0]}
          </div>
          <div data-row={0} data-col={1} onClick={this.handleClick}>
            {this.board[0][1]}
          </div>
          <div data-row={0} data-col={2} onClick={this.handleClick}>
            {this.board[0][2]}
          </div>
        </div>
        <div className="row">
          <div data-row={1} data-col={0} onClick={this.handleClick}>
            {this.board[1][0]}
          </div>
          <div data-row={1} data-col={1} onClick={this.handleClick}>
            {this.board[1][1]}
          </div>
          <div data-row={1} data-col={2} onClick={this.handleClick}>
            {this.board[1][2]}
          </div>
        </div>
        <div className="row">
          <div data-row={2} data-col={0} onClick={this.handleClick}>
            {this.board[2][0]}
          </div>
          <div data-row={2} data-col={1} onClick={this.handleClick}>
            {this.board[2][1]}
          </div>
          <div data-row={2} data-col={2} onClick={this.handleClick}>
            {this.board[2][2]}
          </div>
        </div>
      </div>
    );
  }
}

export default Board;

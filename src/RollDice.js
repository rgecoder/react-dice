import React, { Component } from "react";
import Die from "./Die";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };

  constructor(props) {
    super(props);
    this.state = { die1: "one", die2: "one", die3: "one", die4: "one" };
  }

  roll = () => {
    //pick new rolls
    const newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDie3 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDie4 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    //set state with new rolls
    this.setState({
      die1: newDie1,
      die2: newDie2,
      die3: newDie3,
      die4: newDie4
    });
  };

  render() {
    return (
      <div>
        <Die face={this.state.die1} />
        <Die face={this.state.die2} />
        <Die face={this.state.die3} />
        <Die face={this.state.die4} />
        <br></br>
        <button onClick={this.roll}>Roll Dice Game</button>
      </div>
    );
  }
}

export default RollDice;

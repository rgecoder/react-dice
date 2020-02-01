import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  
  };

  constructor(props) {
    super(props);
    this.state = {
      die1: "one",
      die2: "one",
      die3: "one",
      die4: "one",
      die5: "one",
      die6: "one",
      rolling:false,
    };
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
    const newDie5 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDie6 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    //set state with new rolls
    this.setState({
      die1: newDie1,
      die2: newDie2,
      die3: newDie3,
      die4: newDie4,
      die5: newDie5,
      die6: newDie6,
      rolling:true,
    });

    //wait one second, then set rolling to false
    setTimeout( ()=> {
      this.setState({rolling: false});
    }, 1000);
  };

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          
          <Die face={this.state.die1} rolling={this.state.rolling} />
          <Die face={this.state.die2} rolling={this.state.rolling}/>
          <Die face={this.state.die3} rolling={this.state.rolling}/>
          <Die face={this.state.die4} rolling={this.state.rolling}/>
          <Die face={this.state.die5} rolling={this.state.rolling}/>
          <Die face={this.state.die6} rolling={this.state.rolling}/>
        </div>

        <br></br>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling? 'Rolling...' : 'Roll Dice Simulation'}
        </button>
      </div>
    );
  }
}

export default RollDice;

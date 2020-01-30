import React, { Component } from 'react';
import './App.css';
class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color:'#ccc',
      count: 1,
      disabled:false
    };
  }
sudoku_value(value)
{
  if(this.props.answer != value && value != ''){
    this.props.WrongAnswer();
    if(this.state.count == 1){
      this.setState({
        color:'green',
        count:2,
        disabled:false
      })
    }
    else if(this.state.count == 2){
      this.setState({
        color:'yellow',
        count:3,
        disabled:false
      })
    }
    else if(this.state.count == 3){
      this.setState({
        color:'red',
        count:4,
        disabled:true
      })
    }
  }
 if(this.props.answer == value){
      this.setState({
        color:'#fff',
        disabled:true
      })
    }
}
  render() {
    return (
      <div className="Box">
        {
          this.props.number ? (
            <div>{this.props.number}</div>
          ) : (
            <input className="Box-input" type="text" onChange={(event) => this.sudoku_value(event.target.value) }
            style={{backgroundColor:this.state.color}} disabled= {(this.state.disabled)? 'disabled': ''}/>
          )
        }
      </div>
    )
  }
}

// let counter = 0;

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      NumberofWrongAttempts:0
    }
    this.increment = this.increment.bind(this);
  }

  increment(){
    // counter = counter+1;
    this.setState({
      NumberofWrongAttempts:this.state.NumberofWrongAttempts + 1
    })
  }
  
  render() {
    return (
      <div>
      <div className="full-box">
        <div className="column-box">
          <div className="boxes">
            <Box number={3} />
            <Box answer={1} WrongAnswer={this.increment} />
            <Box answer={2} WrongAnswer={this.increment}/>
            <Box number={4} />
          </div>
          <div className="boxes">
            <Box answer={1} WrongAnswer={this.increment}/>
            <Box number={3} />
             <Box number={4} />
            <Box answer={1} WrongAnswer={this.increment}/>
          </div>
        </div>
        <div className="column-box">
          <div className="boxes">
            <Box answer={4} WrongAnswer={this.increment}/>
            <Box number={2} />
            <Box number={1} />
            <Box answer={3} WrongAnswer={this.increment}/>
          </div>
          <div className="boxes">
            <Box number={2} />
            <Box answer={4} WrongAnswer={this.increment}/>
            <Box answer={1} WrongAnswer={this.increment}/>
            <Box number={4} />
          </div>
        </div>
      </div>
        <h1>NumberofWrongAttempts:{this.state.NumberofWrongAttempts}</h1>
        {/* <h1>Counter:{counter}</h1> */}
</div>
    );
  }
}
export default App;
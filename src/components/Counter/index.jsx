import React, { Component } from 'react';

class index extends Component {
  constructor() {
    super();

    this.state = {
        counter: 0,
    }
}
onClickUp = () => {
  this.setState((prevState) => {
      return {
          counter: prevState.counter + 1,
      }
  })
};

onClickDown = () => {
  this.setState((prevState) => {
      return {
          counter: prevState.counter - 1,
      }
  })
};

render() {
  return (
      <div>
        <p>Counter</p>
          <h1>{this.state.counter}</h1>
          <button onClick={this.onClickDown}>я отнимаю 1</button>
          <button onClick={this.onClickUp}>я добавляю 1</button>
          
      </div>
  )
}
}


export default index;

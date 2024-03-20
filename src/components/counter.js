import { Component } from "react";

 class Counter extends Component {
  //constructor for props
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  //render method to compute the jsx
  render() {
    const increment = () => {
      //onclick the button count need to increment by one
      let curr = this.state.count;
      this.setState({count:curr+1});
    };
    let obj={
        fontSize:'20px',
    }
    return (
      <>
      
        <p style={{fontSize:'29px',fontWeight:'bold'}}>Button clicked {this.state.count} times</p>
        <button onClick={increment}>Click me</button>
        
      </>
    );
  }
}

export default Counter
import React, { Component } from "react";

class ButtonWithBind extends Component {
  constructor() {
    super();

    this.state = { toggle: false };
    // this.toggleButton = this.toggleButton.bind(this);
  }

  // toggleButton() {
  //   this.setState(prevState => ({ toggle: !prevState.toggle }));
  // }

  toggleButton = () => { 
    this.setState(prevState => ({ toggle: !prevState.toggle }));
  }
  
  render() {
    const toggle = this.state.toggle;

    return (
      <div>
        <button onClick={this.toggleButton}>
          {toggle ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}

export default ButtonWithBind;
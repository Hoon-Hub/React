import React, { Component } from "react";
import "./Ref1.css";
import Header from "../Header.js";
export default class componentName extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  focusInput = React.createRef();

  handleFocus = () => [this.focusInput.current.focus()];

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });

    if (!this.validated) {
      this.setState({ password: "" });
      this.handleFocus();
    }
  };

  render() {
    return (
      <div>
        <Header />
        <h2>Focus를 ref를 이용하여 사용하기</h2>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          ref={(ref) => {
            this.focusInput = ref;
          }}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button type="button" onClick={this.handleButtonClick}>
          검증
        </button>
      </div>
    );
  }
}

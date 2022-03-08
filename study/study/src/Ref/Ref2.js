import React, { Component } from "react";
import Header from "../Header";
import ScrollBox from "./ScrollBox";
class Ref2 extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <ScrollBox
          ref={(ref) => {
            this.scrollBox = ref;
          }}
        />
        <button onClick={() => this.scrollBox.scrollToBottom()}>Bottom</button>
        <button onClick={() => this.scrollBox.scrollToTop()}>Top</button>
      </div>
    );
  }
}

export default Ref2;

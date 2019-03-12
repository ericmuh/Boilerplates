import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Hello from "./Hello";
import '../css/index.css'

class App extends Component {
  render() {
    return (
      <Container>
        <div className="header-contents">
          <Hello name="Eric" />
        </div>
      </Container>
    );
  }
}

export default App;

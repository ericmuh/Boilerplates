import React, { Component } from "react";
import { Button, Grid, Row, Col, Container } from "react-bootstrap";
import "../css/index.css";
let $ = require("jquery");

// class implementation..
/*class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = { greeting: "Hello " + this.props.name };
    // This binding is necessary to make `this` work in the callback
    this.getPythonHello = this.getPythonHello.bind(this);
  }
  personaliseGreeting(greeting) {
    this.setState({ greeting: greeting + " " + this.props.name + "!" });
  }
  getPythonHello() {
    $.get(window.location.href + "hello", (data) => {
      console.log(window.location.href);
      console.log(data);
      this.personaliseGreeting(data);
    });
  }

  render() {
    return (
      <Container>
        <h1>{this.state.greeting}</h1>
        <hr />
        <Button
          size="large"
          variant="outline-info"
          onClick={this.getPythonHello}>
          Say Hello!
        </Button>
      </Container>
    );
  }
} */

// Function implementation.
function Hello() {
  const [greetings, setGreetings] = React.useState({
    language: "English",
    greeting: "Hello",
  });
  const getPythonHello = () => {
    fetch("/hello")
      .then((res) => res.json())
      .then((res) => setGreetings(res[Math.floor(Math.random() * res.length)]))
      .catch((err) => console.error(err));
  };

  return (
    <Container>
      <h1>
        {greetings.language} : {greetings.greeting}
      </h1>
      <hr />
      <br />

      <Button size="large" variant="outline-info" onClick={getPythonHello}>
        Click to say hello in different Languages.
      </Button>
    </Container>
  );
}

export default Hello;

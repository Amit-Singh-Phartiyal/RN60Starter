import React, { Component } from "react";
import {
  Router,
  Stack,
  Scene,
} from "react-native-router-flux";
import Home from "../components/Home";
export default class Route extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="home" component={Home} />
        </Stack>
      </Router>
    );
  }
}

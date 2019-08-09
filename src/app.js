import React, { Component } from "react";
import { View } from "react-native"
import { Provider } from "react-redux";
import Route from "../src/routes/";
import { store } from "./store/setup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Route />
        </View>
      </Provider>
    );
  }
}

export default App;
